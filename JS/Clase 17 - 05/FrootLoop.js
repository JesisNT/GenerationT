let frutasYVerduras =[{fruta:"banana"},{verdura:"apio"},{fruta:"manzana"},{fruta:"frutilla"},{verdura:"zanahoria"},
{fruta:"kiwi"},{fruta:"sandia"},{fruta:"melon"},{verdura:"repollo"},{fruta:"mango"}];

function soloFrutas(){
    let frutas = frutasYVerduras.filter(justFruta => justFruta['fruta']);
    return frutas;
}
soloFrutas();
console.log(soloFrutas());