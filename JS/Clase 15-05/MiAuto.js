var miAuto = {};

miAuto.marca = "BMW";
miAuto.año = 2018;  
miAuto.nuevo = false;
var propertyKey = "modelo";
miAuto.modelo = "135I";
var anotherPropertyKey = "precio";
miAuto.precio = 30000;
var nextProperty = "color";
miAuto.color = "Azul Marino";

for (var propiedad in miAuto) {
    console.log(propiedad + ": " + miAuto[propiedad]);
  }

