const metaTimer = document.querySelector(".metaTimer");
let timeSecond = 60;
const endTimeMessage = "Time is up";

displayTime(timeSecond);

const countDown = setInterval(async () => {
  timeSecond--;
  await displayTime(timeSecond);
  if (timeSecond <= 0 || timeSecond < 1) {
    await endTime();
    clearInterval(countDown);
  }
}, 1000);

async function displayTime(second) {
  const minutes = Math.floor(second / 60);
  const seconds = Math.floor(second % 60);
  metaTimer.innerHTML = `${minutes}:${seconds}`;
}

async function endTime() {
  metaTimer.innerHTML = endTimeMessage;
}
