const metaTimer = document.querySelector(".meta-timer");

const END_TIME_MESSAGE = "Time is up";

let timeRemaining = 60;

function initializeTimer() {
  updateTimer(timeRemaining);
}

function updateTimer(time) {
  const { minutes, seconds } = calculateTime(time);

  showMessage(`${minutes}:${seconds}`);
}

function startTimer() {
  setInterval(() => {
    const time = decreaseTime(timeRemaining)
    timeRemaining = time
    updateTimer(time);

    if (timeRemaining === 0) {
      showMessage(END_TIME_MESSAGE);
      clearInterval(startTimer);
    }
  }, 1000);
}

function decreaseTime(time) {
  return time - 1;
}

function calculateTime(remainingSeconds) {
  const SECONDS_PER_MINUTE = 60;

  const minutes = Math.floor(remainingSeconds / SECONDS_PER_MINUTE);
  const seconds = Math.floor(remainingSeconds % SECONDS_PER_MINUTE);

  return { minutes, seconds };
}

function showMessage(message) {
  metaTimer.innerHTML = message;
}

export { startTimer, initializeTimer };
