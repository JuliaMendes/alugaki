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


let latitude;
let longitude;
let estado;

if (window.screen.width < 768) {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log(position)
            latitude = position.coords.latitude
            longitude = position.coords.longitude

           fetch(`https://geolocation.contrateumdev.com.br/api/geocode?lat=${latitude}7&lon=${longitude}`) 
           .then(response => response.json())
           .then(data => {
               estado = data.address.state
               console.log(estado)
           })
        
        }, function (error) {
            console.log(error)
        })
    } else {
        alert('ops, não foi possível pegar a sua localização')
    }
}



