let poemaDesordenado = "los sean porque es ley tengan verdadera cualquier que porque entre pelean devoran de ajuera los los ellos si sea tiempo en unión primera la ésa unidos hermanos";

let arregloDesordenado = poemaDesordenado.split(' ');
let  arregloOrdenado = [];

function ordenarPoema(){
    for (i = 0 ; i < arregloDesordenado.length; i++) {

        arregloOrdenado[i] = arregloDesordenado.shift() + ' ' + arregloDesordenado.pop();
        
    }}
    
    ordenarPoema(arregloDesordenado);
console.log(arregloOrdenado);