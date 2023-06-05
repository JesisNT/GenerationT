let lista = [1,1,1];

function isUniform(lista) { 
    var elementoCero = lista[0];
    
    for (var i = 1; i < lista.length; i++) {
      if (lista[i] !== elementoCero) {
        return false;
      }
    }
    return true; 
  }
1
 console.log(isUniform(lista));