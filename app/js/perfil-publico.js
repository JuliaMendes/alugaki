console.log('JS conectado!');

let toggleCategoria = true;

//Conteudo - Anuncios

const setaAnuncio = (botao) => {
    let card = document.querySelector("section.anuncios div.card-produto:first-child");
    let anuncios = document.querySelector("section.anuncios");
    let newCard = card.cloneNode(true);
    let botaoAnuncio = botao;
    card.remove();
    anuncios.insertBefore(newCard, botaoAnuncio);
}

function chamaProdutos() {
    fetch('https://raw.githubusercontent.com/JuliaMendes/alugaki/main/app/database/db.json')
        .then(response => response.json())
        .then(data => {
            const secaoAnuncios = document.querySelector('section.anuncios');
            const cardsAnuncios = document.querySelectorAll('section.anuncios .card-produto');
            const seta = document.querySelector('section.anuncios button');
        
            console.log(cardsAnuncios)
            cardsAnuncios.forEach(card => {
                 card.innerHTML = '';
            })
            console.log(cardsAnuncios)

            produtos = data.products.slice(12, 15)
            console.log(produtos)

            for(let i=0; i<produtos.length;i++){
                card = cardsAnuncios[i];
                elemento = produtos[i];

                card.innerHTML += `
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
                    </div>`;

            }

        });
}

chamaProdutos()

//Conteudo - Avaliacao
function getPerfil (operacao){
    let perfil = document.querySelector("section.avaliacoes .card-avaliacao .infos h3");
    let nPerfil = '';
    let sinal = operacao;

    for(let i=7; i<(perfil.innerHTML).length;i++){
        nPerfil += perfil.innerHTML[i];
    }

    nPerfil = parseInt(nPerfil);

    if(sinal=="+"){
        if(nPerfil<4){
            nPerfil += 1;
        }
        else{
            nPerfil = 1;
        }
    }
    else if (sinal=="-"){
        if(nPerfil==1){
            nPerfil = 4;
        }
        else{
            nPerfil -= 1;
        }
    }
    else{
        nPerfil = operacao;
    }
    perfil.innerHTML = "Perfil " + nPerfil;
}

const setaAvaliacaoEsquerda = () => {
    let seletores = document.querySelectorAll('.seletores img');
    for(let i=0;i<seletores.length;i++){
        if(seletores[i].src.includes('/img/seletor_cheio_avaliacao.png')){
            seletores[i].src = 'img/seletor_vazio_avaliacao.png';
            if(i==0){
               seletores[seletores.length-1].src = 'img/seletor_cheio_avaliacao.png';
            }
            else{
                seletores[i-1].src = 'img/seletor_cheio_avaliacao.png';
            }
            break;
        }
    }
    getPerfil("-");
}

const setaAvaliacaoDireita = () => {
    let seletores = document.querySelectorAll('.seletores button img');
    for(let i=0;i<seletores.length;i++){
        if(seletores[i].src.includes('/img/seletor_cheio_avaliacao.png')){
            seletores[i].src = 'img/seletor_vazio_avaliacao.png';
            if(i == seletores.length - 1){
                seletores[0].src = 'img/seletor_cheio_avaliacao.png';
            }
            else{
                seletores[i+1].src = 'img/seletor_cheio_avaliacao.png';
            }
            break;
        }
    }
    getPerfil("+");
}

const botaoAvaliacao = (elemento) => {
    let botao = elemento;
    if(!botao.src.includes('/img/seletor_cheio_avaliacao.png')){
        let seletores = document.querySelectorAll('.seletores button img');
        for(let i=0;i<seletores.length;i++){
            if(seletores[i].src.includes('/img/seletor_cheio_avaliacao.png')){
                seletores[i].src = 'img/seletor_vazio_avaliacao.png';
            }
        }
        botao.src = 'img/seletor_cheio_avaliacao.png';
        for(let i=0;i<seletores.length;i++){
            if(seletores[i].src.includes('/img/seletor_cheio_avaliacao.png')){
                getPerfil(i+1);
            }
        }
    }

}
