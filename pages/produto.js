const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome =  document.getElementById('nomeProduto').value;
    let qtd = document.getElementById('qtd').value;
    let fabricante = document.getElementById('fabricante').value;
    let lote = document.getElementById('lote').value;
    let data = document.getElementById('data').value;
    let produtos = {
        nome,
        qtd,
        fabricante,
        lote,
        data,
    };
    if (localStorage.getItem('registroProduto') === null) {
        localStorage.setItem('registroProduto', JSON.stringify([produtos]));
    }else{
        localStorage.setItem('registroProduto', JSON.stringify([...JSON.parse(localStorage.getItem('registroProduto')),produtos]));
    }    
    Swal.fire({
        icon: 'success',
        title: 'Cadastro Realizado',
        showConfirmButton: false,
        timer: 1500
      });
        
        setTimeout(() => {
            document.getElementById('nomeProduto').value = '';
            document.getElementById('qtd').value = '';
            document.getElementById('fabricante').value = '';
            document.getElementById('lote').value = '';
            document.getElementById('data').value = '';
        },1000);
});