const formulario = document.querySelector('.login_wrapper');
const loginLink = document.querySelector('.login-link');
const cadastrarLink = document.querySelector('.cadastrar-link');
const btnLogin = document.querySelector('.btn_login');
const closeLogin = document.querySelector('.icon_close');

cadastrarLink.addEventListener('click', () =>{
    formulario.classList.add('active');
});

loginLink.addEventListener('click', () =>{
    formulario.classList.remove('active');
});

btnLogin.addEventListener('click', () =>{
    formulario.classList.add('active-login');
});

closeLogin.addEventListener('click', () =>{
    formulario.classList.remove('active-login');
});