console.log('JS conectado!');

let toggleCategoria = true;

//Conteudo - Avaliacao
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
    }
