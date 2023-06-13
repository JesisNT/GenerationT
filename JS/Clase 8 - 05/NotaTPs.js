let notasDeTPs = [4, 7, 8, 5, 10]
 
let notaFinal = notasDeTPs.reduce(function(a, b){
    return a + b;
});
let aux = notaFinal / notasDeTPs.length;

console.log(aux)
// debería mostrar 6.8
