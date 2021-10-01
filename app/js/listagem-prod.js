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