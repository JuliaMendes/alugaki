window.addEventListener('load', () => {

    let btnCriarConta = document.querySelector('form button');

    btnCriarConta.onclick = (evento) => {
        evento.preventDefault()

        let form = document.querySelector('form');
        form.reportValidity()


        let inputFullName = document.querySelector('#fullname');
        let inputEmail = document.querySelector('#email');
        let inputPassword = document.querySelector('#pass');

        let htmlErros = document.querySelector('ul.erros');
        htmlErros.innerHTML = "";
        let listaErros = [];

        if (inputFullName.value.length < 6) {
            listaErros.push('O campo Nome completo deve conter no mínimo 6 caracteres.');
            inputFullName.style = 'border-color: #E64A19;'
        } 

        if (!inputEmail.value.includes('@') || !inputEmail.value.includes('.')) {
            listaErros.push('Preencha o campo Email corretamente.');
            inputEmail.style = 'border-color: #E64A19;'
        }

        if (inputPassword.value.length < 8 || inputPassword.value.length > 100) {
            listaErros.push('O campo Senha deve conter de 8 a 64 caracteres.');
            inputPassword.style = 'border-color: #E64A19;'
        }

        if (listaErros.length > 0) {
            listaErros.forEach((mensagemErro) => {
                htmlErros.innerHTML += '<li>' + mensagemErro + '</li>'
            })

        } else {
            form.submit();        
        }
    }
})