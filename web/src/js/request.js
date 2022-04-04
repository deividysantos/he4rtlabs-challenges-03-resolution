import validator from './validator.js'
import render from './render.js';

function login(event){
    event.preventDefault();
    const email = document.querySelector('#emailLogin');
    const password = document.querySelector('#passwordLogin');

    if(!verifyInpust(email, password))
        return

    const url = 'http://127.0.0.1:8000/api/auth/login';
    
    const body = {
        email: email.value,
        password: password.value
    }

    axios.post(url, body)
    .then(response => {
        if(response.data.message){
            render.welcomePage();
            setTimeout(() => {
                email.value = '';
                password.value = '';
            }, 600)
        }
    })
    .catch(error => console.log(error));
}

function register(event){
    event.preventDefault();
    const email = document.querySelector('#emailRegister');
    const password = document.querySelector('#passwordRegister');

    if(!verifyInpust(email, password))
        return 

        const url = 'http://127.0.0.1:8000/api/auth/register';
    
        const body = {
            email: email.value,
            password: password.value
        };
    
        axios.post(url, body)
        .then(response => {
            if(response.data.message){
                render.loginPage();
                setTimeout(() => {
                    email.value = '';
                    password.value = '';
                }, 600)
            }
        })
        .catch(error => console.log(error));
}

function verifyInpust(email, password)
{
    return validator.emailIsValid(email) && validator.passwordIsValid(password);
}

export default{
    login,
    register
}