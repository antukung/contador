
let milisegundos_total = 0;
let idInterval;
const contador = document.querySelector("#contador");
const boton = document.querySelector("#boton");

function iniciar() {
    let segundos = parseInt(document.querySelector("#segundos").value) || 0;
    let minutos = parseInt(document.querySelector("#minutos").value) || 0;
    let horas = parseInt(document.querySelector("#horas").value) || 0;
    let dias = parseInt(document.querySelector("#dias").value) || 0;
    let anios = parseInt(document.querySelector("#anios").value) || 0;

    milisegundos_total = (anios * 365 * 24 * 60 * 60 +dias * 24 * 60 * 60+horas * 60 * 60 + minutos * 60 + segundos) * 1000;

    idInterval = setInterval(() => {
        if (milisegundos_total <= 0) {
            clearInterval(idInterval);
            contador.innerHTML = "<p>¡Tiempo terminado!</p>";
            
        } else {
            milisegundos_total -= 1000;
            if (segundos > 0) {
                segundos -= 1;
            } else if (minutos > 0) {
                minutos -= 1;
                segundos = 59;
            } else if (horas > 0) {
                horas -= 1;
                minutos = 59;
                segundos = 59;
            } else if (dias > 0) {
                dias -= 1;
                horas= 23;
                minutos = 59;
                segundos = 59;
            } else if (anios> 0) {
                anios -=1;
                dias = 364;
                horas= 23;
                minutos = 59;
                segundos = 59;
            } 


            contador.innerHTML = `<p>${anios}:${dias}:${horas}:${minutos}:${segundos}</p>`;
        }
        boton.disabled = true;
        if (segundos===0 && minutos===0 && horas===0 && dias===0 && anios===0) {
        boton.disabled = false;
        }
    }, 1000);
}
