//produto principal
function getProduto() {
    fetch('https://raw.githubusercontent.com/JuliaMendes/alugaki/main/app/database/db.json')
        .then(response => response.json())
        .then(data => {
            let produto = data.products.slice(16, 17)[0];

            const produtoPrimeira = document.querySelector('section.primeira .produto');
            const produtoDescricao = document.querySelector('section.segunda .descricao p');
            const produtoVendedor = document.querySelector('section.segunda .vendedor');

            produtoPrimeira.innerHTML = '';
            produtoPrimeira.innerHTML = `
                <div class="info">
                    <h1>${produto.titulo}</h1>
                    <div class="subtitulo">
                        <img src="img/Star 1.png" alt="">
                        <small>${produto.avaliacao}</small>
                        <img src="img/location.png" alt="">
                        <small style="color: #757575;">${produto.localizacao}</small>
                    </div>
                </div>
                <div class="thumb" style="background-color: darkgray;"><img src=${produto.img}></div>
                <div class="info2">
                    <div class="esq">
                        <img src="img/Star 1.png" alt="">
                        <small>${produto.avaliacao}</small>
                        <small style="color: #757575;">• ${produto.navaliacao} avaliações</small> <br>
                        <small class="price">R$ ${produto.preco}</small>
                    </div>
                    <div class="dir">
                        <button><img class="fav" src="img/favorite_border.png" alt=""></button>
                        <button><img src="img/share.png" alt=""></button>
                    </div>
                </div>
                `;

            console.log(produto);

            produtoDescricao.innerHTML = '';
            produtoDescricao.innerHTML = `${produto.descricao}
            `;

            //Alterar apos arrumar o db

            // produtoVendedor.innerHTML = '';
            // produtoVendedor.innerHTML = `
            //     <div class="avatar" style="background-color: darkgray;"></div>
            //     <div class="info">
            //         <h3>John Doe</h3>
            //         <div>
            //             <img src="img/location.png" alt="">
            //             <small style="color: #757575;">São Paulo, SP</small>
            //         </div>
            //         <div>
            //             <img src="img/Star 1.png" alt="">
            //             <small>4,8</small>
            //             <small style="color: #757575;">• 750 avaliações</small> <br>
            //         </div>
            //     </div>
            //     `;
            

        });
}

getProduto()


//produtos similares
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

            produtos = data.products.slice(12, 16)

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


//menu Dropdown, coracao favoritar, avaliacoes
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

    //clique coracao
    let verificacao = 0
    let coracao = document.querySelector('.fav')

    coracao.onclick = (evento) => {
        //previne o evento nativo
        evento.preventDefault()

        if(verificacao == 0){
            coracao.src = "img/red-heart.png"
            verificacao = 1
        } else {
            coracao.src = "img/favorite_border.png"
            verificacao = 0
        }
    }

    //avaliacoes
    let botaoCarregar = document.querySelector('#botaoCarregar');
    let avaliacao = document.querySelector('section.quarta .card-avaliacao');
    let listaAval = document.querySelector('section.quarta .lista-aval');
    let breakAval = document.querySelector('section.quarta .lista-aval break');

    botaoCarregar.addEventListener('click', () => {
        console.log('clicou')
        let newAvaliacao = avaliacao.cloneNode(true);
        listaAval.insertBefore(newAvaliacao, breakAval);
    })


}