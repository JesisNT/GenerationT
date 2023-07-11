let persona = [{nombre: "Juan", edad:19}, {nombre: "Joaco", edad: 3}];

function agregandoFechaNacimiento(arr){
    const fecha = new Date();
    año = fecha.getFullYear();

    for(i = 0; i < persona.length; i++){
        var fech = año - arr[i].edad;
        arr[i].fechaNacimiento = fech;
    }   
}
console.log(persona);


agregandoFechaNacimiento(persona);
console.log(persona);