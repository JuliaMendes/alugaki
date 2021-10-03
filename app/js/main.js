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

let menuBotoesCategoria = document.querySelectorAll('.botoes-categoria button')

menuBotoesCategoria.forEach((botaoQueEuAcabeiDeClicar) => {
    botaoQueEuAcabeiDeClicar.addEventListener("click", () => {
        if (!botaoQueEuAcabeiDeClicar.classList.contains("ativo")) {
            botaoQueEuAcabeiDeClicar.classList.add("ativo")
        }
        menuBotoesCategoria.forEach((botao) => {
            if (botao !== botaoQueEuAcabeiDeClicar) {
                botao.classList.remove("ativo")
            }
        })
    })
})


if (window.screen.width < 768) {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log(position)
        }, function (error) {
            console.log(error)
        })
    } else {
        alert('ops, não foi possível pegar a sua localização')

    }
}


// fetch('https://raw.githubusercontent.com/JuliaMendes/alugaki/main/app/database/db.json')
// .then(response => response.json())
// .then(data => console.log(data));


function busca() {
    const localizacao = document.querySelector('#localizacao').value;
    const categoria = document.querySelector('#categoria').value;
    const produto = document.querySelector('#produto').value;

    const parametros = {
        localizacao: localizacao,
        categoria: categoria,
        produto: produto
    }

    window.location.assign(`produtos-por-cat.html?localizacao=${localizacao}&categoria=${categoria}&produto=${produto}`)


}
