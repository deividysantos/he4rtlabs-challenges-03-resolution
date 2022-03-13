import { login, register } from './js/components.js'
import render from './js/render.js'
import validate from './js/validator.js'

const app = document.querySelector('.app')
app.innerHTML = login + register

const redirectToRegister = document.querySelector('.redirectToRegister');
const emailRegister = document.querySelector('#emailRegister');
const passwordRegister = document.querySelector('#passwordRegister');

const redirectToLogin = document.querySelector('.redirectToLogin');
const emailLogin = document.querySelector('#emailLogin');
const passwordLogin = document.querySelector('#passwordLogin');



redirectToRegister.addEventListener('click', render.Register);
redirectToLogin.addEventListener('click', render.Login);

emailLogin.addEventListener('change', validate.email);
passwordLogin.addEventListener('change', validate.password);

emailRegister.addEventListener('change', validate.email);
passwordRegister.addEventListener('change', validate.password);
