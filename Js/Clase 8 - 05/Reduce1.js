let numbers = [6, 1, 34, 94, 3, 17];

function multiplicacion(a,b){
    return a * b;
}
const mul = numbers.reduce(multiplicacion)// CODEA LA SOLUCIÓN
    

console.log(mul);
// debería mostrar 977976
