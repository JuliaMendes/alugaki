window.addEventListener('load', () => {
    console.log("JS rodando");

    form_editar = document.querySelector("section.conteudo #form_editar");
    btnEditar = document.querySelector("section.conteudo #form_editar button");

    inputNome = document.querySelector("section.conteudo #form_editar #nome");
    inputTelefone = document.querySelector("section.conteudo #form_editar #telefone");
    inputEmail = document.querySelector("section.conteudo #form_editar #email");

    btnSenha = document.querySelector("section.conteudo #form_senha");
    inputSenha = document.querySelector("section.conteudo #senha");

    inputPrivacidade = document.querySelector("section.conteudo #form_priv input");

    inputExcluir = document.querySelector("section.conteudo .excluir button");

    //fazer estilo de toggle, if inner HTML = EDITAR ou if inner HTML = SALVAR
    btnEditar.onclick = (evento) => {
       
        evento.preventDefault();

        if (btnEditar.innerHTML == "Editar"){
            btnEditar.innerHTML = "Salvar";
            
            inputNome.removeAttribute("readonly");
            inputTelefone.removeAttribute("readonly");
            inputEmail.removeAttribute("readonly");
        }

        btnEditar.onclick = (evento) => {
            evento.preventDefault();
   
            if (btnEditar.innerHTML == "Salvar"){
               
                //verificar se a pessoa nao digitou nada
                if(inputNome.value.length==0 && inputTelefone.value.length==0 && inputEmail.value.length==0){
                    btnEditar.innerHTML = "Editar";
                    
                    inputNome.setAttribute("readonly","");
                    inputTelefone.setAttribute("readonly","");
                    inputEmail.setAttribute("readonly","");
                    
                    location.reload();
                }
                else{
                    let listaErros = [];
                    errosNome = document.querySelector("#erros-nome");
                    errosTelefone = document.querySelector("#erros-telefone");
                    errosEmail = document.querySelector("#erros-email");

                    if(inputNome.value.length<3){
                        inputNome.style = 'border-color: #E64A19;';
                        errosNome.innerHTML = "<li> O campo Nome deve ter no mínimo 3 caracetres. </li>";
                    }
                    else if (inputNome.value.length > 100){
                        inputNome.style = 'border-color: #E64A19;';
                        errosNome.innerHTML = "<li>O campo Nome deve ter no máximo 100 caraceteres. </li>";
                    }
                    if(inputTelefone.value.length < 10){
                        inputTelefone.style = 'border-color: #E64A19;';
                        errosTelefone.innerHTML = "<li> O campo Telefone deve ter no mínimo 10 caracteres. </li>";
                    }
                    if(!inputEmail.value.includes("@") || !inputEmail.value.includes(".")){
                        inputEmail.style = 'border-color: #E64A19;';
                        errosEmail.innerHTML = "<li> O campo Email deve incluir os caracteres '@' e '.' . </li>";
                    }
                    if(inputEmail.value.length < 10 || inputEmail.value.length > 180){
                        inputEmail.style = 'border-color: #E64A19;';
                        errosEmail.innerHTML  = "<li> O campo Email deve ter entre 10 e 180 caracteres. </li>";
                    }


                    if(listaErros.length != 0){
                        console.log("Cheio de erros")
                    }
                    else{
                    btnEditar.innerHTML = "Editar";

                    inputNome.setAttribute("readonly","");
                    inputTelefone.setAttribute("readonly","");
                    inputEmail.setAttribute("readonly","");

                    form_editar.submit();
                    }
                }
            }
       }
    }



})