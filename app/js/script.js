const signup = document.querySelector('#signup');
const email = document.querySelector('#email');
const error = document.querySelector('.error');
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

signup.addEventListener('submit', function(e) {
    if (email.value.match(emailFormat)) {
        
    } else {   
        error.innerText = 'Please enter a valid email address';
        e.preventDefault();
    }
})