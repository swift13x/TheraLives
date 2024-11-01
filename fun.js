// Asegúrate de que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle"); // Selecciona el botón del menú
    const linksBarra = document.querySelector(".links-barra"); // Selecciona el contenedor de enlaces del menú

    // Añade el evento de clic para el menú hamburguesa
    menuToggle.addEventListener("click", function() {
        linksBarra.classList.toggle("active"); // Alterna la clase 'active'
    });
});
