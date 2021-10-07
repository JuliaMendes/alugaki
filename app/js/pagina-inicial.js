let latitude;
let longitude;
let estado;

if (window.screen.width < 768) {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log(position)
            latitude = position.coords.latitude
            longitude = position.coords.longitude

            fetch(`https://geolocation.contrateumdev.com.br/api/geocode?lat=${latitude}7&lon=${longitude}`)
                .then(response => response.json())
                .then(data => {
                    estado = data.address.state
                    console.log(estado)
                })

        }, function (error) {
            console.log(error)
        })
    } else {
        alert('ops, não foi possível pegar a sua localização')
    }
}

function busca() {
    const localizacao = document.querySelector('#localizacao').value;
    const categoria = document.querySelector('#categoria').value;
    const produto = document.querySelector('#produto').value;

    window.location.assign(`produtos-por-cat.html?localizacao=${localizacao}&categoria=${categoria}&produto=${produto}`)
}

function buscaMobile() {
    const localizacao = estado
    const produto = document.querySelector('#produto-mobile').value;

    window.location.assign(`produtos-por-cat.html?localizacao=${localizacao}&produto=${produto}`)
}

let menuBotoesCategoria = document.querySelectorAll('.botoes-categoria button')
let valorBtn = 'Esporte e Lazer';

menuBotoesCategoria.forEach((botaoQueEuAcabeiDeClicar) => {
    botaoQueEuAcabeiDeClicar.addEventListener("click", () => {
        if (!botaoQueEuAcabeiDeClicar.classList.contains("ativo")) {
            botaoQueEuAcabeiDeClicar.classList.add("ativo")
            valorBtn = botaoQueEuAcabeiDeClicar.innerText
            chamaProdutos()
        }
        menuBotoesCategoria.forEach((botao) => {
            if (botao !== botaoQueEuAcabeiDeClicar) {
                botao.classList.remove("ativo")
            }
        })
    })
})

function chamaProdutos() {
    fetch('https://raw.githubusercontent.com/JuliaMendes/alugaki/main/app/database/db.json')
        .then(response => response.json())
        .then(data => {
            const listaProdutos = document.querySelector('.lista-produtos')

            function categoria(elemento) {
                return elemento.category === valorBtn
            }

            listaProdutos.innerHTML = '';
            data.products
                .filter(categoria)
                .slice(0, 4)
                .forEach(elemento => {

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
                            <h3 class="preco">${elemento.preco}</h3>
                        </div>
                        </div>`;
                })
        });
}

chamaProdutos()