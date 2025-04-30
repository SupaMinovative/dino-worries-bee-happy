const languageWindow = document.getElementById("languageWindow");
const fadeIn = document.getElementById("fade-in-text");
const dinoText = document.getElementById("text-1");
const beeText = document.getElementById("text-2");
const overlay = document.querySelector(".overlay");

// create text display
document.addEventListener("DOMContentLoaded", textDisplay);

function textDisplay() {
  overlay.classList.remove("hidden");
  dinoText.addEventListener("animationend", () => {
    beeText.classList.remove("hidden");
  });
}

beeText.addEventListener("animationend", () => {
  overlay.classList.add("hidden");
  dinoText.classList.add("hidden");
  beeText.classList.add("hidden");
  languageWindow.classList.remove("hidden");
});
