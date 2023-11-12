function descargarPDF() {
    // URL del archivo PDF
    var pdfUrl = 'Ignacio_Finochietti CV.pdf';

    // Crea un elemento <a> invisible
    var link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Ignacio_Finochietti CV.pdf';

    // Añade el elemento <a> al documento
    document.body.appendChild(link);

    // Simula un clic en el enlace para iniciar la descarga
    link.click();

    // Elimina el elemento <a> del documento
    document.body.removeChild(link);
}

// Asocia la función al evento clic del botón
document.getElementById('descargarPDF').addEventListener('click', descargarPDF);