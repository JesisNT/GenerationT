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
  
      
  var palabraAleatoria;
  var time = 10;
  var score = 0;
  var palabraIngresada; 
   
  function randomWords() {
    randomizador = Math.floor(Math.random() * words.length);
    return words[randomizador]; 
}
randomWords();

   function addToDOM() {
    palabraAleatoria = randomWords();
    document.getElementById("randomWord2").innerHTML = palabraAleatoria;
    } 
addToDOM();


var inputTxt = document.getElementById('txt');
inputTxt.addEventListener('input', compararPalabras);

function compararPalabras(e) {
   
    palabraIngresada = e.target.value;

  if (palabraIngresada === palabraAleatoria) {
    updateScore();
    time += 3;
    randomWords();
    addToDOM();
    e.target.value = "";
   
  } 

}

function updateScore(){
    score ++;
    var scoreHTML = document.getElementById("scoreSpan");
    scoreHTML.textContent = score;
}

function actualizarTiempo(){
  time -= 1;
  document.getElementById("timeSpan").innerHTML = time + 's';
  if(time === 0){
    clearInterval(intervalId);
    gameOver()
  }
}

const intervalId = setInterval(actualizarTiempo, 1000);

function gameOver(){
 
  document.getElementById("h2").innerHTML = "Te quedaste sin tiempo, ja.";
  document.getElementById("parrafo").innerHTML = "Puntaje de: "+ score;

}



