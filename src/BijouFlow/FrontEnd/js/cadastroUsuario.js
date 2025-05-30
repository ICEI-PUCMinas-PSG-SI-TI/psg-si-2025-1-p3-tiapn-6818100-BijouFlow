// js/cadastroUsuario.js
document.getElementById('cadastroForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log('Cadastro attempt:', data);
    
    alert('Funcionalidade de cadastro a ser implementada.');
});