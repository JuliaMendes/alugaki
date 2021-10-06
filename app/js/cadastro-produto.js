//Valida campos
window.addEventListener("load", () => {
    console.log("arquivo cadastro-produto esta sendo executado!");
    let form = document.querySelector("section.formulario form");
    let btnAnunciar = document.querySelector("#btn-anunciar");
    
    
    // validaFotos(this){
    //     console.log("rodando...")
    // }

    btnAnunciar.onclick = (evento) => {
        let inputTitulo = document.querySelector("#titulo");
        let inputDescricao = document.querySelector("#descricao");
        console.log(inputDescricao);
    
        let inputPreco = document.querySelector("#preco");
        let inputCategoria = document.querySelector("#categoria");
        //let inputFotos = document.querySelector("#fotos");
        evento.preventDefault();


        let errosTitulo = document.querySelector("#erros-titulo");
        errosTitulo.innerHTML = "";

        let errosDescricao = document.querySelector("#erros-descricao");
        errosDescricao.innerHTML = "";


        let errosPreco = document.querySelector("#erros-preco");
        errosPreco.innerHTML = "";


        let errosCategoria = document.querySelector("#erros-cat");
        errosCategoria.innerHTML = "";

        //let htmlErros = document.querySelector("ul.erros");
        //console.log(htmlErros);
        //htmlErros.innerHTML = "";
        //let listaErros = [];
        let erroTit = false;
        let erroDesc = false;
        let erroPre = false;
        let erroCat = false;
        

        if(inputTitulo.value.length < 2 || inputTitulo.value.length > 100){
            errosTitulo.innerHTML += "<li>" + "O Campo Título deve conter de 2 a 100 caracteres" + "</li>";
            erroTit = true;
        }else{
            errosTitulo.innerHTML = "";
        }

        if(inputDescricao.value.length < 10){
            errosDescricao.innerHTML += "<li>" + "O campo Descrição deve conter no mínimo 10 caracteres." + "</li>";
            erroDesc = true;
        }else{
            errosDescricao.innerHTML = "";
        }

        if ((inputPreco.value == inputPreco.placeholder) || (inputPreco.value == "")){
            errosPreco.innerHTML += "<li>" + "Por favor, insira o preço do produto." + "</li>";
            erroPre = true;
        }else{
            errosPreco.innerHTML = "";
        }

        if (inputCategoria.value == ""){
            errosCategoria.innerHTML += "<li>" + "Por favor, selecione uma categoria para o produto." + "</li>";
            erroCat = true;
        }else{
            errosCategoria.innerHTML = "";
        }
        
        if(!(erroTit || erroDesc || erroPre || erroCat)){
            form.submit();
        }
    }

});

//API de cep

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