const menuEmail   = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerMenu = document.querySelector(".menu");
const mobileMenu  = document.querySelector(".mobile-menu");
const body        = document.querySelector("body");

menuEmail.addEventListener("click", function(event){
    event.stopPropagation(); // Evita la propagación del evento
    toggleDesktopMenu();
});
burguerMenu.addEventListener("click", function(event) {
    event.stopPropagation(); // Evita la propagación del evento
    toggleMobileMenu();
});

body.addEventListener("click", function() {
    if(mobileMenu.classList.contains("active") || desktopMenu.classList.contains("active")) {
        toggleDesktopMenu();
        toggleMobileMenu();
    }  
});

function toggleDesktopMenu() {
    menuEmail.classList.toggle("animation-nav");
    desktopMenu.classList.toggle("inactive");
    desktopMenu.classList.toggle("active");
}

function toggleMobileMenu() {
    burguerMenu.classList.toggle("animation-svg");
    mobileMenu.classList.toggle("inactive");
    mobileMenu.classList.toggle("active");
}
