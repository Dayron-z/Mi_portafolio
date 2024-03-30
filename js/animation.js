document.addEventListener('DOMContentLoaded', function() {
    // Captura todos los elementos con la clase 'scroll-to-section'
    var scrollLinks = document.querySelectorAll('.scroll-to-section');

    // Añade un evento de clic a cada enlace
    scrollLinks.forEach(function(scrollLink) {
        scrollLink.addEventListener('click', function(e) {
            e.preventDefault(); // Evita el comportamiento predeterminado del enlace

            // Obtiene el destino del enlace (el id de la sección)
            var targetId = this.getAttribute('href').substring(1);
            var targetSection = document.getElementById(targetId);

            // Añade la clase para animar
            targetSection.classList.add('animate-section');

            // Desplaza la página hacia el destino con animación
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});
