import { startTimer } from "./timer.js";

let clicksCounter = 0;

function initializeClicker() {
  const metaButton = document.querySelector(".meta-clicker__button");

  metaButton.onclick = increaseClicksCounter;
}

function increaseClicksCounter() {
  const metaClicks = document.querySelector("#meta-сlicker__clicks-counter");
  if (clicksCounter === 0) {
    startTimer();
  }

  clicksCounter += 1;
  metaClicks.innerHTML = clicksCounter;
}

export { initializeClicker };
