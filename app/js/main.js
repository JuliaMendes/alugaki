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


if(window.screen.width < 768){
    if('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(function(position){
            console.log(position)
        }, function(error){
            console.log(error)
        })
    } else {
        alert('ops, não foi possível pegar a sua localização')

    }
} else {
    console.log('tela grande')
}