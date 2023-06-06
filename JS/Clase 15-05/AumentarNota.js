let estudiantes = [
  { nombre: 'Juan', nota: 6 },
  { nombre: 'Roberto', nota: 7 },
  { nombre: 'Rigoberto', nota: 10 },
  { nombre: 'Pedro', nota: 5 },
  { nombre: 'Alberta', nota: 3 },
  { nombre: 'Guadalupe', nota: 1 }
];
function aumentarNota(){
for (let i = 0; i < estudiantes.length; i++) {
  if (estudiantes[i].nota > 5) {
    estudiantes[i].nota += 2;

    if (estudiantes[i].nota > 10) {
      estudiantes[i].nota = 10;
    }
  }
}
}
aumentarNota();
console.log(estudiantes);