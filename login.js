let passwordToggle = document.querySelectorAll('.password-toggle');
let formPassword = document.querySelectorAll('.input-password')

for (let i = 0; i < passwordToggle.length; i++) {
    passwordToggle[i].addEventListener('click', () => {
        if(formPassword[i].type === 'password') {
            formPassword[i].type = 'text';
            passwordToggle[i].style.background = 'url(./images/password-unhide-active.svg)';
            passwordToggle[i].style['background-size'] = 'cover';
            passwordToggle[i].style.width = '20px';
            passwordToggle[i].style.height = '20px';

        } else {
            formPassword[i].type = 'password';
            passwordToggle[i].style.background = 'url(./images/password-unhide.svg)';
            passwordToggle[i].style['background-size'] = 'cover';
            passwordToggle[i].style.width = '20px';
            passwordToggle[i].style.height = '20px';
        }
    })
}

let signupTrigger = document.querySelector('.sign-up-trigger');
let signinTrigger = document.querySelector('.sign-in-trigger');
let page = document.querySelector('.page');
let contentBG = document.querySelector('.form-content');

signupTrigger.addEventListener('click', () => {
    page.classList.add('page-alter');
    contentBG.style.animation = "backgroundChanger1 1s ease-in-out forwards";
});

signinTrigger.addEventListener('click', () => {
    page.classList.remove('page-alter');
    contentBG.style.animation = "backgroundChanger2 1s ease-in-out forwards";
});