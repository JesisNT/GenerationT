let numeros = [ 2, 4, 5, 37, 0];
let numeros_duplicados = {};
//después debería quedar así {0:0, 2:4, 4:8, 5:10, 37:74}
for ( i = 0; i < numeros.length; i++) {
    numeros_duplicados[numeros[i]] = numeros[i] *2;
}
console.log(numeros_duplicados);
