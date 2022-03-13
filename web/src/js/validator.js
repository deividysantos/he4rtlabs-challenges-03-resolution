function email(event){
    var isEmail = /\S+@\S+\.\S+/;
    
    const email = document.getElementById(event.currentTarget.id);

    if(!isEmail.test(event.target.value))
        email.classList.add('error');
    else
        email.classList.remove('error');   
}

function password(event){
    const password = document.getElementById(event.currentTarget.id);

    if( password.value.trim().length < 8 )
        password.classList.add('error');
    else
    password.classList.remove('error');
}

export default {
    email,
    password
}