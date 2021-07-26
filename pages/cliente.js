const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome =  document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let selecao = document.getElementById('selecao').value;
    let CEP = document.getElementById('CEP').value;
    let rua = document.getElementById('rua').value;
    let num = document.getElementById('num').value;
    let bairro = document.getElementById('bairro').value;
    let UF = document.getElementById('UF').value;
    let cidade = document.getElementById('cidade').value;
    let clientes = {
        nome,
        email,
        telefone,
        selecao,
        CEP,
        rua,
        num,
        bairro,
        UF,
        cidade
    };

    if (localStorage.getItem('registro') === null) {
        localStorage.setItem('registro', JSON.stringify([clientes]));
    
    }else{
        localStorage.setItem('registro', JSON.stringify([...JSON.parse(localStorage.getItem('registro')),clientes]));
        
    }  

    Swal.fire({
        icon: 'success',
        title: 'Cadastro Realizado',
        showConfirmButton: false,
        timer: 1500
      });
        
        setTimeout(() => {
            document.getElementById('nome').value = '';
            document.getElementById('email').value = '';
            document.getElementById('telefone').value = '';
            document.getElementById('selecao').value = 'Selecione';
            document.getElementById('CEP').value = '';
            document.getElementById('rua').value = '';
            document.getElementById('num').value = '';
            document.getElementById('bairro').value = '';
            document.getElementById('UF').value = '';
            document.getElementById('cidade').value = '';
        },1000);   

});

