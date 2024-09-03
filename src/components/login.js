import { html, render } from '../../node_modules/lit-html/lit-html.js';
import * as authService from '../services/authService.js';
import { updateNavbar } from './navigation.js';

const loginTemplate = (loginHandler) => html`
      <h1>Login</h1>
    <form @submit=${loginHandler} id="loginForm">
        <input type="email" id="loginEmail" name="loginEmail" placeholder="Enter your email" required>
        <input type="password" id="loginPassword" name="loginPassword" placeholder="Enter your password" required>
        <button id="loginBtn" type="submit">Login</button>
</form>
`;

export const loginView = () => {
    const loginHandler = (e) => {
        e.preventDefault();

        if (localStorage.getItem('userId')) {
            alert('You are already logged in.');
            window.location.href = '/';
            return;
        }
        const data = new FormData(e.currentTarget);
        const loginEmail = data.get('loginEmail');
        const loginPassword = data.get('loginPassword');

        authService.login(loginEmail, loginPassword)
            .then((user) => {
                if (user) {
                    localStorage.setItem('userId', user.id);
                    alert('Successful login!');
                    updateNavbar();
                    window.location.href = '/';
                }
            })
            .catch(error => {
                alert(error.message);
            });
    }
    render(loginTemplate(loginHandler), document.getElementById('root'));
};