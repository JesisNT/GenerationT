var gaseosasEnStock = [];

let unidades = [1, 2, 3, 4];
let gaseosas = ["cocacola", "sprite", "fanta", "seven up"];


function dispenserGaseosas(cantGaseosa, nomGaseosa){
    
    for(i = 0; i <gaseosas.length; i++){
        if(unidades[i] >= cantGaseosa && nomGaseosa === gaseosas[i]){
            gaseosasEnStock.push(nomGaseosa);
        }
    } 
   
}

dispenserGaseosas(4, "seven up");
console.log(gaseosasEnStock);
