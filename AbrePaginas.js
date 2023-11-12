var boton1 = document.getElementById("faveditButton");
var boton2 = document.getElementById("uadeButton");

// Agregar event listeners para el clic en los botones
boton1.addEventListener("click", function() {

    var pagina1URL = "https://www.educacionit.com/";

    window.open(pagina1URL, "_blank");
});

boton2.addEventListener("click", function() {
    var pagina2URL = "https://www.uade.edu.ar/";

    window.open(pagina2URL, "_blank");
})