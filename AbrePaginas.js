var boton1 = document.getElementById("faveditButton");
var boton2 = document.getElementById("uadeButton");

// Agregar event listeners para el clic en los botones
boton1.addEventListener("click", function() {
    // URL de la primera página a la que quieres redirigir
    var pagina1URL = "https://www.educacionit.com/";

    // Abrir una nueva pestaña con la URL especificada
    window.open(pagina1URL, "_blank");
});

boton2.addEventListener("click", function() {
    // URL de la segunda página a la que quieres redirigir
    var pagina2URL = "https://www.uade.edu.ar/";

    // Abrir una nueva pestaña con la URL especificada
    window.open(pagina2URL, "_blank");
})