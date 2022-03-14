import { login, register, welcome } from './js/components.js'
import render from './js/render.js'
import validate from './js/validator.js'
import request from './js/request.js'


const app = document.querySelector('.app')
app.innerHTML = login + register

const redirectToRegister = document.querySelector('.redirectToRegister');
const emailRegister = document.querySelector('#emailRegister');
const passwordRegister = document.querySelector('#passwordRegister');
const btnRegister = document.querySelector('#btnRegister');

const redirectToLogin = document.querySelector('.redirectToLogin');
const emailLogin = document.querySelector('#emailLogin');
const passwordLogin = document.querySelector('#passwordLogin');
const btnLogin = document.querySelector('#btnLogin');


redirectToRegister.addEventListener('click', render.registerPage);
redirectToLogin.addEventListener('click', render.loginPage);

emailLogin.addEventListener('change', validate.email);
passwordLogin.addEventListener('change', validate.password);

emailRegister.addEventListener('change', validate.email);
passwordRegister.addEventListener('change', validate.password);

btnLogin.addEventListener('click', request.login);
btnRegister.addEventListener('click', request.register);
