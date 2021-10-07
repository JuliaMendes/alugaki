const erros = {
    email_errado: {
        id: 1,
        texto: 'Insira um Email válido. Deve conter os caracteres "@" e "."'
    },
    password_errado: {
        id: 2,
        texto: 'O campo Senha deve conter de 8 a 64 caracteres.'
    }
}

let htmlErros = document.querySelector('ul.erros');
htmlErros.innerHTML = "";

let listaErros = [];

function oErroJaEstaNaLista(erro) {
    const achou = listaErros.find((elemento) => {
        return elemento.id === erro.id;
    });

    return achou;
}

function removeEsseErroDaLista(erro) {
    const listaExcluida = listaErros.filter((elemento) => {
        return elemento.id !== erro.id;
    });

    return listaExcluida;
}


function validaEmail() {
    let inputEmail = document.querySelector('#email');

    if (!inputEmail.value.includes('@') || !inputEmail.value.includes('.')) {
        const estaNaLista = oErroJaEstaNaLista(erros.email_errado);

        if (!estaNaLista) {
            listaErros.push(erros.email_errado);
        }

        inputEmail.style = 'border-color: #E64A19;'
    } else {
        listaErros = removeEsseErroDaLista(erros.email_errado)
        inputEmail.style = ''
    }

    htmlErros.innerHTML = "";
    if (listaErros.length > 0) {
        listaErros.forEach((mensagemErro) => {
            htmlErros.innerHTML += '<li>' + mensagemErro.texto + '</li>'
        })
    }
}

function validaPassword() {
    let inputPassword = document.querySelector('#pass');

    if (inputPassword.value.length < 8 || inputPassword.value.length > 64) {
        const estaNaLista = oErroJaEstaNaLista(erros.password_errado);

        if (!estaNaLista) {
            listaErros.push(erros.password_errado);
        }

        inputPassword.style = 'border-color: #E64A19;'

    } else {
        listaErros = removeEsseErroDaLista(erros.password_errado)
        inputPassword.style = ''
    }

    htmlErros.innerHTML = "";
    if (listaErros.length > 0) {
        listaErros.forEach((mensagemErro) => {
            htmlErros.innerHTML += '<li>' + mensagemErro.texto + '</li>'
        })
    }
}

window.addEventListener('load', () => {

    let btnCriarConta = document.querySelector('form button');

    btnCriarConta.onclick = (evento) => {
        evento.preventDefault()

        let form = document.querySelector('form');
        form.reportValidity()

        let inputEmail = document.querySelector('#email');
        let inputPassword = document.querySelector('#pass');

        if (!inputEmail.value.includes('@') || !inputEmail.value.includes('.')) {
            const estaNaLista = oErroJaEstaNaLista(erros.email_errado);

            if (!estaNaLista) {
                listaErros.push(erros.email_errado);
            }

            inputEmail.style = 'border-color: #E64A19;'
        } else {
            listaErros = removeEsseErroDaLista(erros.email_errado)
            inputEmail.style = ''
        }

        if (inputPassword.value.length < 8 || inputPassword.value.length > 64) {
            const estaNaLista = oErroJaEstaNaLista(erros.password_errado);

            if (!estaNaLista) {
                listaErros.push(erros.password_errado);
            }

            inputPassword.style = 'border-color: #E64A19;'

        } else {
            listaErros = removeEsseErroDaLista(erros.password_errado)
            inputPassword.style = ''
        }

        htmlErros.innerHTML = "";
        if (listaErros.length > 0) {
            listaErros.forEach((mensagemErro) => {
                htmlErros.innerHTML += '<li>' + mensagemErro.texto + '</li>'
            })

        } else {
            form.submit();
        }
    }
})
