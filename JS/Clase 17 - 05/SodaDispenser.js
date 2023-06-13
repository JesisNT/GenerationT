var gaseosasEnStock = [];

let unidades = [1, 2, 3, 4];
let gaseosas = ["cocacola", "sprite", "fanta", "seven up"];


function dispenserGaseosas(cantGaseosa, nomGaseosa){
    
    for(i = 0; i <gaseosas.length; i++){
        if(unidades[i] > 0 && nomGaseosa === gaseosas[i]){
            gaseosasEnStock.push(nomGaseosa);
        }
    } 
   
}

dispenserGaseosas(1, "cocacola");
console.log(gaseosasEnStock);
