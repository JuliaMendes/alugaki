const selecionado = [1, 2, 3, 4, 5]
document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return

    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest("[data-dropdown]")
        currentDropdown.classList.toggle("active")
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove("active")
    })
})

// filtro: categoria
let filtroCat = document.querySelectorAll('.botao-cat')
let valorBtn = 'Esporte e Lazer';

filtroCat.forEach((botaoQueEuAcabeiDeClicar) => {
    botaoQueEuAcabeiDeClicar.addEventListener("click", () => {
        valorBtn = botaoQueEuAcabeiDeClicar.innerText
        chamaProdutos()
    })
})

// filtros: preço
function categoria(elemento) {
    console.log(elemento.category, valorBtn)
    return elemento.category === valorBtn
}


function valorMenor(elemento) {
    const preco = parseInt(elemento.preco.split('/')[0]);

    return preco <= 99;
}

function valorMedio(elemento) {
    const preco = parseInt(elemento.preco.split('/')[0]);

    return (preco > 99 && preco <= 199);
}

function valorMaior(elemento) {
    const preco = parseInt(elemento.preco.split('/')[0]);

    return preco > 199;
}



function chamaProdutos(filterValor = (valor) => valor) {
    fetch('https://raw.githubusercontent.com/JuliaMendes/alugaki/main/app/database/db.json')
        .then(response => response.json())
        .then(data => {
            const listaProdutos = document.querySelector('.produtos .lista-produtos')
            const tituloCat = document.querySelector('.produtos .titulo h1')

            listaProdutos.innerHTML = '';
            data.products
                .filter(categoria)
                .filter(filterValor)
                .filter(filtraNotas)
                .forEach(elemento => {
                    tituloCat.innerHTML = elemento.category
                    listaProdutos.innerHTML += `<div class="card-produto">
                        <div class="thumb">
                            <a href="listagem-prod.html"><img src="${elemento.img}" alt="${elemento.titulo}"></a>
                        </div>
                        <div class="info">
                            <h3>${elemento.titulo}</h3>
                            <div>
                                <img src="img/Star 1.png" alt="Ícone estrela">
                                <div>
                                    <small class="pontuacao">${elemento.avaliacao}</small>
                                    <small>• ${elemento.navaliacao} avaliações</small>
                                </div>
                            </div>
                            <div class="localiz">
                                <img src="img/location.png" alt="ícone localização">
                                <small>${elemento.localizacao}</small>
                            </div>
                            <h3 class="preco">R$ ${elemento.preco}</h3>
                        </div>
                        </div>`;
                })
        });
}

chamaProdutos()

const todosOsInputsPreco = document.querySelectorAll('.preco input')

todosOsInputsPreco.forEach((umInputPreco) => {
    umInputPreco.addEventListener("change", (e) => {
        let pegandoValorId = e.target.id

        switch (pegandoValorId) {
            case 'menor':
                chamaProdutos(valorMenor)
                break;
            case 'medio':
                chamaProdutos(valorMedio)
                break;
            case 'maior':
                chamaProdutos(valorMaior)
                break;
        }

    })
})

// filtro checkbox
const checkboxAvaliacao = document.querySelectorAll('input[name="avaliacao"]')
// const selecionado = []

// checkboxAvaliacao.forEach((avaliacao) => {
//     avaliacao.addEventListener("change", (e) => {
//         if(e.target.checked){
//             console.log(e.target)
//             selecionado.push(e.target.value)
//         } else {
//             selecionado.pop()
//         }
//     })
// })

function validacaoCheckbox(){
        const checkboxAvaliacao = document.querySelectorAll('input[name="avaliacao"]')

        checkboxAvaliacao.forEach((avaliacao) => {
            avaliacao.addEventListener("change", (e) => {
                if(e.target.checked){
                    console.log(e.target)
                    selecionado.push(parseInt(e.target.value))
                } else {
                    selecionado.pop()
                }
            })
        })
    
    return selecionado
}

function filtraNotas(objeto){
    // console.log(objeto)
    const maiorNota = Math.max(...selecionado)
    const menorNota = Math.min(...selecionado)
    if(objeto.avaliacao <= maiorNota && objeto.avaliacao >= menorNota){
        return true
    }
    return false
}

// pagination
let botoesPagination = document.querySelectorAll('.pagination a')
console.log(botoesPagination)
let valorPag = '1';

botoesPagination.forEach((botaoQueEuAcabeiDeClicar) => {
     botaoQueEuAcabeiDeClicar.addEventListener("click", () => {
         if (!botaoQueEuAcabeiDeClicar.classList.contains("ativo")) {
             botaoQueEuAcabeiDeClicar.classList.add("ativo")
             valorBtn = botaoQueEuAcabeiDeClicar.innerText
         }
         botoesPagination.forEach((botao) => {
            if (botao !== botaoQueEuAcabeiDeClicar) {
                 botao.classList.remove("ativo")
             }
         })
     })
     })