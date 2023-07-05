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
  var score = 0;
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


const input = document.querySelector('input');

input.addEventListener('input', recuperaValor);

function recuperaValor(e) {
 return palabraIngresada = e.srcElement.value;
}

input.addEventListener('input', comparaValores);
function comparaValores(){
    if(palabraIngresada === palabraAleatoria){
        time += 3;
        input.innerHTML = "";
        
    }
    else return false;
}



