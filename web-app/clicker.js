const metaButton = document.querySelector(".metaButton");
metaButton.onclick = clicksCounter;
const metaClicks = document.querySelector(".metaClicks");
metaClicks.id = document.querySelector(".metaClicks");

let metaClicksInitial = 0;

async function clicksCounter() {
  metaClicksInitial += 1;
  metaClicks.innerHTML = metaClicksInitial;
}

