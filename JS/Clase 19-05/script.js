const words = [
  "californication",
  "plataforma5",
  "black",
  "summer",
  "flea",
  "aeroplane",
  "peppers",
  "unlimited",
  "arcadium",
  "love",
  "getaway",
  "stadium",
  "quixoticelixer",
  "quarter",
  "snow",
  "dylan",
  "zephyr",
  "funky",
  "chili",
];

    function randomWord() {
        randomizador = Math.floor(Math.random() * words.length);
        return words[randomizador]; 
    }

var palabraAleatoria = randomWord();
var time = 10;
var score = 0;

    function addToDOM() {
    return document.getElementById("randomWord2").innerHTML = randomWord();
    }
addToDOM();

