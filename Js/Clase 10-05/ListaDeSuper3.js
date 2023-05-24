let lista = []
let listaNueva = ["Yerba Fea"]

lista.push("Yerba mala", "Yerba buena")

lista.unshift("yerba Normal", "Yerba regular")

console.log(lista.length)


let noHabia = lista.pop()

let Comprado = lista.shift()

console.log(lista.length)


function logitems(aux){
    for(i = 0; i < aux.length; i++){
        console.log(aux[i])
    }
}

for(i = 1; i<3; i++ ){
    if (i = 1 ){
        logitems(lista)
    }else if(i = 2){
        logitems(listaNueva)
    }

}
