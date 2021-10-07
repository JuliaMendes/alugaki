const erros = {
    nome_errado: {
        id: 1,
        texto: 'O campo Nome completo deve conter no mínimo 6 caracteres.'
    },
    email_errado: {
        id: 2,
        texto: 'Insira um Email válido. Deve conter os caracteres "@" e "."'
    },
    password_errado: {
        id: 3,
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

function validaFullName() {
    let inputFullName = document.querySelector('#fullname');

    if (inputFullName.value.length < 6) {
        const estaNaLista = oErroJaEstaNaLista(erros.nome_errado);

        if (!estaNaLista) {
            console.log('asdf')
            listaErros.push(erros.nome_errado);
        }

        inputFullName.style = 'border-color: #E64A19;'
    } else {
        listaErros = removeEsseErroDaLista(erros.nome_errado)
        inputFullName.style = ''
    }

    htmlErros.innerHTML = "";
    if (listaErros.length > 0) {
        listaErros.forEach((mensagemErro) => {
            htmlErros.innerHTML += '<li>' + mensagemErro.texto + '</li>'
        })
    }
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

    if (inputPassword.value.length < 8 || inputPassword.value.length > 100) {
        const estaNaLista = oErroJaEstaNaLista(erros.password_errado);

        if (!estaNaLista) {
            listaErros.push(erros.password_errado);
        }
        document.querySelector('.input-icone').style = 'border-color: #E64A19;'
    }
    else {
        listaErros = removeEsseErroDaLista(erros.password_errado)
        document.querySelector('.input-icone').style = ''
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


        let inputFullName = document.querySelector('#fullname');
        let inputEmail = document.querySelector('#email');
        let inputPassword = document.querySelector('#pass');


        if (inputFullName.value.length < 6) {
            const estaNaLista = oErroJaEstaNaLista(erros.nome_errado);

            if (!estaNaLista) {
                listaErros.push(erros.nome_errado);
            }

            inputFullName.style = 'border-color: #E64A19;'
        } else {
            listaErros = removeEsseErroDaLista(erros.nome_errado)
            inputFullName.style = ''
        }

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

        if (inputPassword.value.length < 8 || inputPassword.value.length > 100) {
            const estaNaLista = oErroJaEstaNaLista(erros.password_errado);

            if (!estaNaLista) {
                listaErros.push(erros.password_errado);
            }
            document.querySelector('.input-icone').style = 'border-color: #E64A19;'
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