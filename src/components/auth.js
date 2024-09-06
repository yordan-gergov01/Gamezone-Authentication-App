// import { html, render} from '../../node_modules/lit-html/lit-html.js';

// export function renderAuth(root){
//     const template = html `
//     <div id="auth-container">
//     <div id="registrationForm" class="form-container">
//         <h1>Register</h1>
//         <form id="registerForm">
//             <input type="email" id="email" name="email" placeholder="Enter your email" required>
//             <input  type="text" id="username" name="username" placeholder="Enter your username" required>
//             <input type="password" id="password" name="password" placeholder="Enter your password" required>
//             <button id="registerBtn" type="submit">Register</button>
// </form>
// <p>Already have an account? <a href="#" id="showLogin">Login here</a></p>
// </div>

// <div id="loginDivForm" class="form-container" style="display:none;">
//     <h1>Login</h1>
//     <form id="loginForm">
//         <input type="email" id="loginEmail" name="loginEmail" placeholder="Enter your email" required>
//         <input type="passwoed" id="loginPassword" name="loginPassword" placeholder="Enter your password" required>
//         <button id="loginBtn" type="submit">Login</button>
// </form>
// <p>Don't have an account? <a href="#" id="showRegister">Register here></a></p>
// </div>
// </div>
// `;

// render(template, root);

// const registerFormElement = document.getElementById('registerForm');
// const registrationForm = document.getElementById('registrationForm');
// const loginDivForm = document.getElementById('loginDivForm');
// const loginFormElement = document.getElementById('loginForm');
// const showLogin = document.getElementById('showLogin');
// const showRegister = document.getElementById('showRegister');
// const url = 'https://66ced4b6901aab24841fbca2.mockapi.io/Users';

// showLogin.addEventListener('click', function(event) {
//     event.preventDefault();
//     registrationForm.style.display = 'none';
//     loginDivForm.style.display = 'block';
// });

// showRegister.addEventListener('click', function(event) {
//     event.preventDefault();
//     loginDivForm.style.display = 'none';
//     registrationForm.style.display = 'block';
// });

// registerFormElement.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const data = new FormData(registerFormElement);
//     const email = data.get('email');
//     const username = data.get('username');
//     const password = data.get('password');

//     fetch(url, {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({email, username, password})
//     })
//     .then((res) => res.json())
//     .then((data) => {
//         alert('Registration successful!');
//         registrationForm.style.display = 'none';
//         loginDivForm.style.display = 'block';
//     })
//     .catch((error) => {
//         alert('Sorry, something went wrong, please try again!');
//     });
// });

// loginFormElement.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const data = new FormData(loginFormElement);
//     const loginEmail = data.get('loginEmail');
//     const loginPassword = data.get('loginPassword');

//     fetch(`https://66ced4b6901aab24841fbca2.mockapi.io/Users?email=${encodeURIComponent(loginEmail)}`)
//     .then(res => {
//         if(!res.ok){
//             throw new Error('Login failed!');
//         }
//         return res.json();
//     })
    
//     .then((users) => {
//         const user = users.find(user => user.password === loginPassword);
//         if(user){
//             alert('Successful login!');
//         }else{
//             alert('Invalid email or password.');
//         }
//     })
//     .catch(error => {
//         alert('Sorry, something went wrong, please try again!');
//     });
// });
// }