
const linkCadastroCliente = document.getElementById('cadastroCliente');
const linkCadastroProduto = document.getElementById('cadastroProduto');

linkCadastroCliente.addEventListener('click', (e) =>{
    e.preventDefault();
    const novoFrame = document.getElementById('frame');
    novoFrame.setAttribute('src',"pages/cadastrocliente.html");
});
linkCadastroProduto.addEventListener('click', (e) =>{
    e.preventDefault();
    const novoFrame = document.getElementById('frame');
    novoFrame.setAttribute('src',"pages/cadastroprodutos.html");
});
