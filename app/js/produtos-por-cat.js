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


function chamaProdutos() {
    fetch('https://raw.githubusercontent.com/JuliaMendes/alugaki/main/app/database/db.json')
        .then(response => response.json())
        .then(data => {
            const listaProdutos = document.querySelector('.produtos .lista-produtos')
            const tituloCat = document.querySelector('.produtos .titulo h1')

            function categoria(elemento) {
                console.log(elemento.category, valorBtn)
                return elemento.category === valorBtn
            }
    
            listaProdutos.innerHTML = '';
            data.products
                .filter(categoria)
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