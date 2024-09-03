import { html, render } from '../../node_modules/lit-html/lit-html.js';
import * as authService from '../services/authService.js';

const registerTemplate = (registerHandler) => html`
     <h1>Register</h1>
        <form @submit=${registerHandler} id="registerForm">
            <input type="email" id="email" name="email" placeholder="Enter your email" required>
            <input  type="text" id="username" name="username" placeholder="Enter your username" required>
            <input type="password" id="password" name="password" placeholder="Enter your password" required>
            <button id="registerBtn" type="submit">Register</button>
</form>
`;
export const registerView = () => {
    const registerHandler = async (e) => {
        e.preventDefault();

        try {
            const data = new FormData(e.currentTarget);
            const email = data.get('email');
            const password = data.get('password');
            const username = data.get('username');

            const user = await authService.register(email, username, password);

            if (user) {
                localStorage.setItem('userId', user.id);
                alert('Successful registration!');
                window.location.href = '/';
            }
        } catch (error) {
            throw new Error('Sorry, something went wrong.');
        }

    }
    render(registerTemplate(registerHandler), document.getElementById('root'));
};