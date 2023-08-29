let milisegundos_total = 0;
let idInterval;

function iniciar() {
    const segundos = parseInt(document.querySelector("#segundos").value) || 0;
    const minutos = parseInt(document.querySelector("#minutos").value) || 0;
    const horas = parseInt(document.querySelector("#horas").value) || 0;

    milisegundos_total = (horas * 60 * 60 + minutos * 60 + segundos) * 1000;

    idInterval = setInterval(() => {
        if (milisegundos_total <= 0) {
            clearInterval(idInterval);
            document.querySelector("#contador").innerHTML = "<p>¡Tiempo terminado!</p>";
        } else {
            milisegundos_total -= 1000;
            const tiempoRestante = new Date(milisegundos_total);
            const horasRestantes = tiempoRestante.getUTCHours();
            const minutosRestantes = tiempoRestante.getUTCMinutes();
            const segundosRestantes = tiempoRestante.getUTCSeconds();
            document.querySelector("#contador").innerHTML = `<p>${horasRestantes}:${minutosRestantes}:${segundosRestantes}</p>`;
        }
    }, 1000);
}
