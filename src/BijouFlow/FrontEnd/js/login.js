// js/login.js
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const cpf = document.getElementById('cpf').value;
    const senha = document.getElementById('senha').value;
    console.log('Login attempt:', { cpf, senha });
    
    alert('Funcionalidade de login a ser implementada.');
});