import { html, render } from '../../node_modules/lit-html/lit-html.js';
import * as authService from '../services/authService.js';
import { updateNavbar } from './navigation.js';
import page from '../../node_modules/page/page.mjs';

const loginTemplate = (loginHandler) => html`
      <div class="loginContainer">
      <h1>Login Here</h1>
        <form @submit=${loginHandler} id="loginForm">
        <input type="email" id="loginEmail" name="loginEmail" placeholder="Enter your email" required>
        <input type="password" id="loginPassword" name="loginPassword" placeholder="Enter your password" required>
        <button id="loginBtn" type="submit">Login</button>
        </form>
    </div>
`;

export const loginView = () => {
    const loginHandler = (e) => {
        e.preventDefault();

        if (localStorage.getItem('userId')) {
            alert('You are already logged in.');
            page.redirect('/');
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
                    page.redirect('/');
                }
            })
            .catch(error => {
                alert(error.message);
            });
    }
    render(loginTemplate(loginHandler), document.getElementById('root'));
};