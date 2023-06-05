function secuenciaFibonacci(position) {
    var anterior = 1;
    var actual = 1;
    var aux;
    
    for (var i = 3; i <= position; i++) {
      aux = anterior + actual;
      anterior = actual;
      actual = aux;
    }
    
    return aux;
  }
  console.log(secuenciaFibonacci(8))