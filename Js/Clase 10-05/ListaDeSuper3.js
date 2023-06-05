let listaDeSuper = []
let listaNueva = ["Chocolates Santino TM marca registrada"]

listaDeSuper.push("Yerba mala", "TRUCHA yerba", "Yerba buena")

listaDeSuper.unshift("Canarias (cheto)")

console.log(listaDeSuper.length)


let noHabia = listaDeSuper.pop()

let Comprado = listaDeSuper.shift()

console.log(listaDeSuper.length)



function logitems(aux){
    aux.forEach(element => console.log(element));

}

for (i = 0; i < listaDeSuper.length; i++) {
    logitems(listaDeSuper);

}

for (i = 0; i < listaNueva.length; i++) {
    logitems(listaNueva);

}
