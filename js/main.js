// Traccia
// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
// Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!
const secondiEl = document.getElementById("secondi");
const minutiEl = document.getElementById("minuti");
const oraEl = document.getElementById("ora");

const clock = setInterval(timeAttuale, 1000);
function timeAttuale() {
    let now = new Date();
    const secondi = now.getSeconds();
    const minuti = now.getMinutes();
    const ora = now.getHours();

    console.log("mancano: " + now.getTime("2023-02-04 09:30")); //è corretto cosi?
    clearInterval(clock);
}
