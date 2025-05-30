// js/cadastroPecas.js
document.getElementById('formCadastroPeca').addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log('Cadastro de Peça:', data);
    
    alert('Funcionalidade de cadastro de peças a ser implementada.');
});