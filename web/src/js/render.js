function Register()
{      
    document.querySelector('.onTop').classList.add('animate-switch-form-top');

    setTimeout(function(){
        document.querySelector('.onTop').classList.remove('onTop');
        document.querySelector('.animate-switch-form-top').classList.remove('animate-switch-form-top');
        document.querySelector('.register').classList.add('onTop');
    }, 600);
}

function Login() 
{   
    document.querySelector('.onTop').classList.add('animate-switch-form-bottom');

    setTimeout(function(){
        document.querySelector('.onTop').classList.remove('onTop');
        document.querySelector('.animate-switch-form-bottom').classList.remove('animate-switch-form-bottom');
        document.querySelector('.login').classList.add('onTop');
    }, 600);
}

export default{
    Register,
    Login
}