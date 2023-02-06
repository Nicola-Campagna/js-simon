// Traccia
// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
// Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!

// COSTANTI
const secondiEl = document.getElementById("secondi");
const minutiEl = document.getElementById("minuti");
const oraEl = document.getElementById("ora");
const giorniEl = document.getElementById("giorni");


// richiamo funzione
countdownToTomorrowLesson();
const intervalCountdown = setInterval((countdownToTomorrowLesson), 1000);

// funzione calcolo differenza alla lezione di domani data xxx
function countdownToTomorrowLesson() {
    const now = new Date();
    const tomorrowLesson = new Date("2023-02-07 9:30");
    const [seconds, minutes, hours, days] = countdown(now, tomorrowLesson);
    if (
        seconds <= 0 &&
        minutes <= 0 &&
        hours <= 0 &&
        days <= 0
    ) {
        clearInterval(intervalCountdown)
    }
    printTime(seconds, minutes, hours, days)
}

// funzione differenza tra giorni
function countdown(dateFrom, dateTarget) {
    // data di partenza
    const msDateFrom = dateFrom.getTime();
    // data di arrivo
    const msDateTarget = dateTarget.getTime();

    // differenza in millisecondi alla data di arrivo 
    const msToDateTarget = msDateTarget - msDateFrom;
    // differenza in secondi a data di arrivo
    const sToDateTarget = parseInt(msToDateTarget / 1000);

    // secondi  domani
    const seconds = sToDateTarget % 60;
    // minuti a domani
    const minutes = parseInt((sToDateTarget / 60) % 60);
    // ore a domani
    const hours = parseInt((sToDateTarget / 60 / 60) % 24);
    // giorni a domani
    const days = parseInt(sToDateTarget / 60 / 60 / 60 / 24);

    return [
        seconds,
        minutes,
        hours,
        days
    ]
}

// funzione per stampare giorni,mesi,ora,minuti e secondi nel Dom
function printTime(seconds, minutes, hours, days) {
    secondiEl.innerHTML = (seconds < 10) ? "0" + seconds : seconds;
    minutiEl.innerHTML = (minutes < 10) ? "0" + minutes : minutes;
    oraEl.innerHTML = (hours < 10) ? "0" + hours : hours;
    giorniEl.innerHTML = (days < 10) ? "0" + days : days;
}