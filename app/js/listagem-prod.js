window.onload = () => {
    let count = 0
    console.log("deu bom")

    let coracao = document.querySelector('.fav')
    console.log(coracao)

    coracao.onclick = (evento) => {

        //previne o evento nativo
        evento.preventDefault()

        console.log("clicou no <3")

        if(count % 2 == 0){
            coracao.src = "img/red-heart.png"
        } else {
            coracao.src = "img/favorite_border.png"
        }
        count++
    }
}