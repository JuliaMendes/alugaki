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
