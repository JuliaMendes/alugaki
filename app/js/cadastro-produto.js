
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

        let htmlErros = document.querySelector("ul.erros");
        console.log(htmlErros);
        htmlErros.innerHTML = "";
        let listaErros = [];

        if(inputTitulo.value.length < 2 || inputTitulo.value.length > 100){
            listaErros.push("O Campo Título deve conter de 2 a 100 caracteres")
        }

        if(inputDescricao.value.length < 10){
            listaErros.push("O campo Descrição deve conter no mínimo 10 caracteres.");
        }

        if(listaErros.length > 0){
            listaErros.forEach((mensagemErro) =>{
                htmlErros.innerHTML += "<li>" + mensagemErro + "</li>";
            })
        } else{
            form.submit();
        }
    }

});