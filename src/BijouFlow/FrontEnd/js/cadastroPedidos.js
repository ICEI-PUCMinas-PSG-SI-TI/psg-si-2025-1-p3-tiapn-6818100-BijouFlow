// js/cadastroPedidos.js
document.getElementById('formCadastroPedido').addEventListener('submit', function (event) {
    event.preventDefault();
    
    console.log('Cadastro de Pedido submetido.');
    
    alert('Funcionalidade de cadastro de pedidos a ser implementada.');
});

const ufs = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"];
const selectUF = document.getElementById('clienteUf');
ufs.forEach(uf => {
    const option = document.createElement('option');
    option.value = uf;
    option.textContent = uf;
    selectUF.appendChild(option);
});
document.getElementById('btnAdicionarItem').addEventListener('click', () => {
    alert('Modal/funcionalidade para adicionar itens ao pedido.');
});