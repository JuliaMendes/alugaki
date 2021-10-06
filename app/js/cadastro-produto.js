
window.addEventListener("load", () => {
    console.log("arquivo cadastro-produto esta sendo executado!");

    let form = document.querySelector("section.formulario form");
    let btnAnunciar = document.querySelector("section.formulario form #btn-anunciar");
    let inputTitulo = document.querySelector("section.formulario form #titulo");
    let inputDescricao = document.querySelector("section.formulario form #descricao");
    console.log(inputDescricao);

    let preco = document.querySelector("section.formulario form #preco");
    let categoria = document.querySelector("section.formulario form #cat");

    let cep = document.querySelector("section.formulario form #localizacao");

    btnAnunciar.onclick = (evento) => {
        evento.preventDefault();

        //let htmlErros = document.querySelector("ul.erros");
        //console.log(htmlErros);
        //htmlErros.innerHTML = "";
        //let listaErros = [];

        if(inputTitulo.value.length < 2 || inputTitulo.value.length > 100){
            let errosTitulo = document.querySelector("#erros-titulo");
            errosTitulo.innerHTML = "";
            errosTitulo.innerHTML += "<li>" + "O Campo Título deve conter de 2 a 100 caracteres" + "</li>";
        }

        if(inputDescricao.value.length < 10){
            let errosDescricao = document.querySelector("#erros-descricao");
            errosDescricao.innerHTML = "";
            errosDescricao.innerHTML += "<li>" + "O campo Descrição deve conter no mínimo 10 caracteres." + "</li>";
        }

        // if(listaErros.length > 0){
        //     listaErros.forEach((mensagemErro) =>{
        //         htmlErros.innerHTML += "<li>" + mensagemErro + "</li>";
        //     })
        // } 
        else{
            form.submit();
        }
    }

});

let inputCep = document.querySelector('#localizacao');

inputCep.addEventListener('blur', () => {
    const valor = inputCep.value;

    let inputEnd = document.querySelector('#endereco');
    let inputBairro = document.querySelector('#bairro');
    let inputCidade = document.querySelector('#cidade');
    let inputUF = document.querySelector('#estado');

    if(valor.length !== 8){
        alert('CEP no formato incorreto');
        return;
    }

    if(localStorage.getItem(valor)){
        console.log("INFORMAÇOES VINDAS DO CACHE");

        inputEnd.value = dados.logradouro;
        inputBairro.value = dados.bairro;
        inputCidade.value = dados.localidade;
        inputUF.value = dados.uf;

        return;
    }

    fetch('https://viacep.com.br/ws/' + valor + '/json/')
        .then(function (resposta) {
            return resposta.json();
        })
        .then(function (minhaRespostaPronta) {
            if (minhaRespostaPronta.erro) {
                alert('CEP inexistente');
                return;
            }
            console.log('RESPOSTA DA API')

            inputEnd.value = minhaRespostaPronta.logradouro;
            inputBairro.value = minhaRespostaPronta.bairro;
            inputCidade.value = minhaRespostaPronta.localidade;
            inputUF.value = minhaRespostaPronta.uf;

            console.log('GUARDANDO RESPOSTA NO LOCAL STORAGE');
            const respostaString = JSON.stringify(minhaRespostaPronta);
            localStorage.setItems(valor, respostaString);
        })
        // .catch(function (erro) {
        //     alert('Erro ao procurar CEP')
        //     inputEnd.value = '';
        //     inputBairro.value = '';
        //     inputCidade.value = '';
        //     inputUF.value = '';

        //     location.reload();
        //     // location.href = 'https://digitalhouse.com.br'
        // });
})