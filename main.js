// Selección de elementos del DOM
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerMenu = document.querySelector(".menu");
const menuCarIcon = document.querySelector(".navbar-shopping-cart");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");

// Agrupación de elementos que podrían tener la clase 'active'
const allElementsHTML   = [menuEmail, menuCarIcon, burguerMenu]
const allActiveElements = [desktopMenu, aside, mobileMenu];

// Función para eliminar el estado activo de todos los elementos
function removeActiveState() {
    allActiveElements.forEach(element => {
        element.classList.remove("active");
        element.classList.add("inactive");
    });
    allElementsHTML.forEach(element => {
        element.classList.remove("animation-nav");
    });
}

// Función para alternar el estado activo del elemento seleccionado
function toggleActiveState(element) {
    if (element.classList.contains("inactive")) {
        removeActiveState();
    }
    element.classList.toggle("active");
    element.classList.toggle("inactive");
    
    let index = allActiveElements.indexOf(element);    
    if (index !== -1) {
        allElementsHTML[index].classList.toggle("animation-nav");
    }
}

// Función para agregar un escuchador de eventos de clic a un elemento
function addToggleListener(element, active) {
    element.addEventListener("click", function(event){
        event.stopPropagation();
        toggleActiveState(active);
    });
} 

// Agregación de escuchadores de eventos a los elementos
for(let i = 0; i < allActiveElements.length ; i++){
    addToggleListener(allElementsHTML[i], allActiveElements[i]);
}

// Agregación de escuchador de eventos al documento
document.addEventListener("click", function(event) {
    for (let i = 0; i < allActiveElements.length; i++) {
        if (allActiveElements[i].contains(event.target)) {
            return;
        }
    }
    removeActiveState();
});
