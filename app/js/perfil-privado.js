window.addEventListener('load', () => {
    console.log("JS rodando");

    btnEditar = document.querySelector("section.conteudo #form_editar");

    inputNome = document.querySelector("section.conteudo #form_editar #nome");
    inputTelefone = document.querySelector("section.conteudo #form_editar #tel");
    inputEmail = document.querySelector("section.conteudo #form_editar #email");

    btnSenha = document.querySelector("section.conteudo #form_senha");
    inputSenha = document.querySelector("section.conteudo #senha");

    inputPrivacidade = document.querySelector("section.conteudo #form_priv input");

    inputExcluir = document.querySelector("section.conteudo .excluir button");

    //fazer estilo de toggle, if inner HTML = EDITAR ou if inner HTML = SALVAR
    // btnEditar.onclick = (evento) => {

    // }

})