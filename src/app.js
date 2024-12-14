/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let intervalId;

function cartaAlAzar() {
  let header = document.querySelector("header");
  let center = document.querySelector(".center");
  let footer = document.querySelector("footer");

  const numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  const figuras = ["♦", "♥", "♠", "♣"];

  function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  let randomFiguras = randomElement(figuras);
  let randomNumber = randomElement(numbers);

  let clase = "";
  if (randomFiguras === "♦") {
    clase = "diamond";
  }
  if (randomFiguras === "♥") {
    clase = "heart";
  }
  if (randomFiguras === "♣") {
    clase = "club";
  }
  if (randomFiguras === "♠") {
    clase = "spade";
  }

  header.innerHTML = `<span class="${clase} icon-header">${randomFiguras}</span>`;
  center.innerHTML = `<span class="number">${randomNumber}</span>`;
  footer.innerHTML = `<span class="${clase} icon-footer">${randomFiguras}</span>`;
}

const boton = document.querySelector(".generador");
boton.addEventListener("click", () => {
  cartaAlAzar();
});

const buttonTemporized = document.querySelector(".aleatorio");

function temporizador() {
  if (!intervalId) {
    intervalId = setInterval(cartaAlAzar, 5000);
  }
}

buttonTemporized.addEventListener("click", temporizador);

const buttonTemporizedFinish = document.querySelector(".finalizador");

function stopInterval() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

buttonTemporizedFinish.addEventListener("click", stopInterval);
