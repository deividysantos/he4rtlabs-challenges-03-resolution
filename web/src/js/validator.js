function email(event){

    const email = document.getElementById(event.currentTarget.id);

    if( !emailIsValid(email) ){
        email.classList.add('error');
        return 
    }    
    
    email.classList.remove('error');
}

function password(event){
    const password = document.getElementById(event.currentTarget.id);

    if( !passwordIsValid(password) ){
        password.classList.add('error');
        return 
    }
        
    password.classList.remove('error');
}

function emailIsValid(email){
    
    var isEmail = /\S+@\S+\.\S+/;

    return isEmail.test(email.value)
}

function passwordIsValid(password){
    return password.value.trim().length >= 8
}

export default {
    email,
    password,
    emailIsValid,
    passwordIsValid
}