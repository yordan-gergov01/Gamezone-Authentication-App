import { html, render } from '../../node_modules/lit-html/lit-html.js';
import * as authService from '../services/authService.js';

const searchHandler = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);
    let search = formData.get('search');
    window.location.href = `/games?search=${search}`;
}

export const navbarTemplate = (isLoggedIn, username, logoutHandler, searchHandler) => html`
<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">GAMEZONE</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Catalog</a>
          </li>
          ${isLoggedIn ? html`
            <li class="nav-item">
              <a class="nav-link" href="/games">My Games</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click=${logoutHandler} href='#'>Logout</a>
            </li>
          ` : html`
            <li class="nav-item">
              <a class="nav-link" href="/login">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/register">Register</a>
            </li>
          `}
        </ul>
        ${isLoggedIn ? html`
            <span class="navbar-text ms-3">Welcome, ${username}!</span>
        ` : ''}
        <form class="d-flex" role="search" @submit=${searchHandler}>
          <input class="form-control me-2" type="search" name="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
</nav>
`;

export const updateNavbar = () => {
    const isLoggedIn = !!localStorage.getItem('userId');
    let username = '';

    if (isLoggedIn) {
        const user = JSON.parse(localStorage.getItem('user') || {});
        username = user.username || 'User';
    }
    const logoutHandler = () => {
        authService.logout();
        localStorage.removeItem('userId');
        localStorage.removeItem('user');
        updateNavbar();
        window.location.href = '/';
    };
    render(navbarTemplate(isLoggedIn, username, logoutHandler, searchHandler), document.getElementById('navbar'));
};