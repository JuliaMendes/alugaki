function validaNome() {
    let errosNome = document.querySelector("#erros-nome");

    if(inputNome.value.length<3){
        inputNome.style = 'border-color: #E64A19;';
        errosNome.innerHTML += "<li> O campo Nome deve ter no mínimo 3 caracteres. </li>";
        erros = true;
    }
    else if (inputNome.value.length > 100){
        inputNome.style = 'border-color: #E64A19;';
        errosNome.innerHTML += "<li>O campo Nome deve ter no máximo 100 caraceteres. </li>";
        erros = true;
    }
    else{
        errosNome.innerHTML = "";
        erros = false;
    }

    return erros
}

function validaTelefone() {
    let errosTelefone = document.querySelector("#erros-telefone");

    if(inputTelefone.value.length < 10){
        inputTelefone.style = 'border-color: #E64A19;';
        errosTelefone.innerHTML += "<li> O campo Telefone deve ter no mínimo 10 caracteres. </li>";
        erros = true;
    }
    else{
        errosTelefone.innerHTML = "";
        erros = false;
    }

    return erros
}

function validaEmail() {
    let errosEmail = document.querySelector("#erros-email");

    if(inputEmail.value.length < 10){
        inputEmail.style = 'border-color: #E64A19;';
        errosEmail.innerHTML  += "<li> O campo Email deve ter no mínimo 10 caracteres. </li>";
    }
    else if(inputEmail.value.length > 180){
        inputEmail.style = 'border-color: #E64A19;';
        errosEmail.innerHTML  += "<li> O campo Email deve ter no máximo 180 caracteres. </li>";
    }
    else{
        errosEmail.innerHTML = "";
    }
    if(!inputEmail.value.includes("@") || !inputEmail.value.includes(".")){
        inputEmail.style = 'border-color: #E64A19;';
        errosEmail.innerHTML += "<li> O campo Email deve incluir os caracteres '@' e '.' </li>";
    }

    return erros
}

function validaSenha() {
    let errosSenha = document.querySelector("#erros-senha");

    if(inputSenha.value.length < 8){
        inputSenha.style = 'border-color: #E64A19;';
        errosSenha.innerHTML  += "<li> O campo Senha deve ter no mínimo 8 caracteres. </li>";
    }
    else if(inputSenha.value.length > 64){
        inputSenha.style = 'border-color: #E64A19;';
        errosSenha.innerHTML  += "<li> O campo Senha deve ter no máximo 64 caracteres. </li>";
    }
    else{
        errosSenha.innerHTML = "";
    }

    return erros
}

inputPrivacidade = document.querySelector("section.conteudo #form_editar #priv");

function validaPrivacidade(inputPrivacidade) {
    if (inputPrivacidade.hasAttribute("checked")){
        localStorage.setItem("checked", "false");
        inputPrivacidade.removeAttribute("checked");
    }
    else{
        localStorage.setItem("checked", "true");
        inputPrivacidade.setAttribute("checked","");
    }
}

window.addEventListener('load', () => {

    //formulario de dados
    formEditar = document.querySelector("section.conteudo #form_editar");
    btnEditar = document.querySelector("section.conteudo #form_editar button");

    inputNome = document.querySelector("section.conteudo #form_editar #nome");
    inputTelefone = document.querySelector("section.conteudo #form_editar #telefone");
    inputEmail = document.querySelector("section.conteudo #form_editar #email");

    inputSenha = document.querySelector("section.conteudo #form_editar #pass");

    inputPrivacidade = document.querySelector("section.conteudo #form_editar #priv");

    inputExcluir = document.querySelector("section.conteudo div.excluir button");

    checked = localStorage.getItem("checked");

    if(checked=="true"){
        inputPrivacidade.setAttribute("checked","");
    }
    else{
        inputPrivacidade.removeAttribute("checked");
    }

    btnEditar.onclick = (evento) => {
       
        evento.preventDefault();

        if (btnEditar.innerHTML == "Editar"){
            btnEditar.innerHTML = "Salvar";
            
            inputNome.removeAttribute("readonly");
            inputTelefone.removeAttribute("readonly");
            inputEmail.removeAttribute("readonly");
            inputSenha.removeAttribute("readonly");
            inputPrivacidade.removeAttribute("disabled");
        }

        btnEditar.onclick = (evento) => {
            evento.preventDefault();
   
            if (btnEditar.innerHTML == "Salvar"){
               
                //verificar se a pessoa nao digitou nada
                if(inputNome.value.length==0 && inputTelefone.value.length==0 && inputEmail.value.length==0 && inputSenha.value.length==0){
                    btnEditar.innerHTML = "Editar";
                    
                    inputNome.setAttribute("readonly","");
                    inputTelefone.setAttribute("readonly","");
                    inputEmail.setAttribute("readonly","");
                    inputSenha.setAttribute("readonly","");
                    inputPrivacidade.setAttribute("disabled","");
                    
                    formEditar.submit();
                }
                else{
                    let errosNomeB = false;
                    let errosTelefoneB = false;
                    let errosEmailB = false;
                    let errosSenhaB = false;

                    //validacao nome
                    if(!inputNome.value.length==0) {
                        errosNomeB = validaNome();
                    }

                    //validacao telefone
                    if(!inputTelefone.value.length==0) {
                        errosTelefoneB = validaTelefone();
                    }

                    //validacao email
                    if(!inputEmail.value.length==0) {
                        errosEmailB = validaEmail();
                    }

                    //validacao senha
                    if(!inputSenha.value.length==0) {
                        errosSenhaB = validaSenha();
                    }

                    if(!(errosNomeB || errosTelefoneB || errosEmailB || errosSenhaB)){
                    btnEditar.innerHTML = "Editar";

                    inputNome.setAttribute("readonly","");
                    inputTelefone.setAttribute("readonly","");
                    inputEmail.setAttribute("readonly","");
                    inputSenha.setAttribute("readonly","");
                    inputPrivacidade.setAttribute("disabled","");

                    formEditar.submit();
                    }
                }
            }
       }
    }

    inputExcluir.onclick = () => {
        if(confirm('Tem certeza que deseja excluir sua conta? Todos os dados serão excluídos definitivamente e não será possível recuperar a conta posteriormente.')){
            alert("Conta excluída.");
            location.reload();
        }

    }

    //imagem

    formImg = document.querySelector("section.barra-lateral form");
    btnImg= document.querySelector("section.barra-lateral form button");
    inputImg = document.querySelector("section.barra-lateral form input");

    btnImg.onclick = (evento) => {
        evento.preventDefault();

        if (btnImg.innerHTML == "Alterar"){
            btnImg.innerHTML = "Salvar";
            inputImg.removeAttribute("hidden");
        }
        btnImg.onclick = (evento) => {
            evento.preventDefault();

            if(btnImg.innerHTML = "Salvar"){
                btnImg.innerHTML = "Alterar";
                inputImg.setAttribute("hidden", "");

                formImg.submit();
            }
        }

    }

})