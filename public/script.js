function kastTerning() {
  const tall = Math.floor(Math.random() * 6) + 1;
  document.getElementById("terningResultat").textContent = "Du kastet: " + tall;
}

function spillBlackJack() {
  const kort = [];
  kort.push(Math.floor(Math.random() * 11) + 1);
  kort.push(Math.floor(Math.random() * 11) + 1);
  const sum = kort[0] + kort[1];

  let melding = `kortene dine: ${kort[0]} og ${kort[1]}. Sum: ${sum}`;

  if (sum === 21) {
    melding += " - BlackJack! Gratulerer!";
  } else if (sum > 21) {
    melding += " - Du har tapt!";
  } else {
    melding += " - Vil du trekke et nytt kort?";
  }

  document.getElementById("spillBlackJackRes").textContent = melding;
}
