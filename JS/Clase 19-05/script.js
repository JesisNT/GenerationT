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
  
      
  var palabraAleatoria = randomWords();
  var time = 10;
  document.getElementById("timeSpan").innerHTML = time;
  var score = 0;
  document.getElementById("scoreSpan").innerHTML = score;
  var palabraIngresada; 
   
  function randomWords() {
    randomizador = Math.floor(Math.random() * words.length);
    return words[randomizador]; 
}
randomWords();

   function addToDOM() {
    document.getElementById("randomWord2").innerHTML = palabraAleatoria;
    }
addToDOM();


const inputTxt = document.getElementById('txt');
inputTxt.addEventListener('input', compararPalabras);

function compararPalabras(e) {
   
    palabraIngresada = e.target.value;

  if (palabraIngresada === palabraAleatoria) {
    time += 3;
    document.getElementById("timeSpan").innerHTML = time;
    randomWords();
    addToDOM();
    e.target.value = "";
   
  } else {
    
  }
}

function actualizaTiempo(){
   while (time >0) {
    document.getElementById("timeSpan").innerHTML = time;
    time --;
   }
   if (time === 0 ){
    clearInterval(time);
    document.getElementById("timeSpan").innerHTML = time;
   }
}





