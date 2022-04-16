const timer = document.getElementById("timer")
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const resetButton = document.getElementById("reset-button");

let timerID;
let lastTimerStartTime = 0;
let millisElapsedSinceStart = 0;

const INTERVAL_MS = 1000/60;

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

function startTimer(){
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = true;

    lastTimerStartTime = Date.now();
    timerID = setInterval(updateTimer, INTERVAL_MS)
}

function stopTimer(){
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;

    millisElapsedSinceStart += Date.now() - lastTimerStartTime
    clearInterval(timerID)
}

function resetTimer(){
    resetButton.disabled = true;
    timer.textContent = "00:00:000";
    millisElapsedSinceStart = 0;
}

function updateTimer() {
   const millElapsed = Date.now() - lastTimerStartTime + millisElapsedSinceStart;
   const seconds = millElapsed / 1000;
   const minutes = seconds / 60;

   const millisText = formatNumber(millElapsed % 1000, 3);
   const secondsText = formatNumber(Math.floor(seconds) % 60, 2);
   const minutesText = formatNumber(Math.floor(minutes), 2);

   timer.textContent = `${minutesText}:${secondsText}:${millisText}`
}

function formatNumber(number, length) {
    const stringNumber = String(number);
    return stringNumber.padStart(length, '0')
}