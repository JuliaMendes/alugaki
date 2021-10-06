const setaAnuncioEsquerda = (botao) => {
    let card = document.querySelector("section.terceira div.lista-produtos");
    let anuncios = document.querySelector("section.terceira .container");
    let newCard = card.cloneNode(true);
    let botaoAnuncio = document.querySelector("#botaoDireita")
    card.remove();
    anuncios.insertBefore(newCard, botaoAnuncio);
}

const setaAnuncioDireita = (botao) => {
    let card = document.querySelector("section.terceira div.container div.lista-produtos:nth-child(5)");
    let anuncios = document.querySelector("section.terceira .container");
    let cardSeguinte = document.querySelector("section.terceira div.container div.lista-produtos:nth-child(2)");
    let newCard = card.cloneNode(true);
    card.remove();
    anuncios.insertBefore(newCard, cardSeguinte);
}

function chamaProdutos() {
    fetch('https://raw.githubusercontent.com/JuliaMendes/alugaki/main/app/database/db.json')
        .then(response => response.json())
        .then(data => {
            const secaoAnuncios = document.querySelector('section.terceira');
            const cardsAnuncios = document.querySelectorAll('section.terceira .lista-produtos');
        
            cardsAnuncios.forEach(card => {
                 card.innerHTML = '';
            })

            produtos = data.products.slice(11, 15)

            for(let i=0; i<produtos.length;i++){
                card = cardsAnuncios[i];
                elemento = produtos[i];

                card.innerHTML += `
                    <div class="card-produto">
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

            }

        });
}

chamaProdutos()

window.onload = () => {
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

    let verificacao = 0
    console.log("deu bom")

    let coracao = document.querySelector('.fav')
    console.log(coracao)

    coracao.onclick = (evento) => {

        //previne o evento nativo
        evento.preventDefault()

        console.log("clicou no <3")

        if(verificacao == 0){
            coracao.src = "img/red-heart.png"
            verificacao = 1
        } else {
            coracao.src = "img/favorite_border.png"
            verificacao = 0
        }
    }
}