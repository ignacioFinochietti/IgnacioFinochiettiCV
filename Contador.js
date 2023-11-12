    let contadorClicksLinkedIn = 0;
    let contadorClicksGitHub = 0;

    function redirigirA(url, contador) {
    contador++;
    window.open(url, '_blank');
    return contador;
    }

    document.getElementById('linkedinButton').addEventListener('click', function() {
        contadorClicksLinkedIn = redirigirA('https://www.linkedin.com/in/ignacio-finochietti-911a5113b/', contadorClicksLinkedIn);
        });
    
    
        document.getElementById('githubButton').addEventListener('click', function() {
        contadorClicksGitHub = redirigirA('https://github.com/ignacioFinochietti/', contadorClicksGitHub);
        });


    window.addEventListener('beforeunload', function() {
    console.log(`LinkedIn fue clickeado ${contadorClicksLinkedIn} veces.`);
    console.log(`GitHub fue clickeado ${contadorClicksGitHub} veces.`);
    });