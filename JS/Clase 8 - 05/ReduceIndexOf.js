let numeros = [5, 1, 7, 12, 5, 2, 9, 0, 11, 9, 11]

let sinRepetidos = numeros.reduce(function (eliminador, elemento) {
    if (eliminador.indexOf(elemento) === -1) {
        eliminador.push(elemento);
    }
    return eliminador;

}, []);


console.log(sinRepetidos)
// debería mostrar [ 5, 1, 7, 12, 2, 9, 0, 11 ]
