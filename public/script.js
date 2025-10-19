function kastTerning() {
  const tall = Math.floor(Math.random() * 6) + 1;
  document.getElementById("terningResultat").textContent = "Du kastet: " + tall;
}

function spillBlackJack() {
  document.getElementById("spillBlackJack").textContent =
    "Blackjack starter snart… 🎴";
}
