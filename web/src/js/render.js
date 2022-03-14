import { login, register, welcome } from './components.js' 

function registerPage()
{      
    document.querySelector('.onTop').classList.add('animate-switch-form-top');

    setTimeout(function(){
        document.querySelector('.onTop').classList.remove('onTop');
        document.querySelector('.animate-switch-form-top').classList.remove('animate-switch-form-top');
        document.querySelector('.register').classList.add('onTop');
    }, 600);
}

function loginPage() 
{   
    document.querySelector('.onTop').classList.add('animate-switch-form-bottom');

    setTimeout(function(){
        document.querySelector('.onTop').classList.remove('onTop');
        document.querySelector('.animate-switch-form-bottom').classList.remove('animate-switch-form-bottom');
        document.querySelector('.login').classList.add('onTop');
    }, 600);
}

function welcomePage()
{
    let app = document.querySelector('.app');    
    app.innerHTML = welcome;
    let welcomezada = document.querySelector('.welcome')
    welcomezada.classList.add('animate-welcome')

    setTimeout(function(){
        welcomezada.innerHTML = '<h1>Hello He4rt</h1>'
    }, 150);
}

export default{
    registerPage,
    loginPage,
    welcomePage
}