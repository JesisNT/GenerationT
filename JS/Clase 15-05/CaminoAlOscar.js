let actoresPrincipales = ['Tom Hanks', 'Johnny Deep', 'Elizabeth Taylor', 'Morgan Freeman', 'Jennifer Aniston', 'Meryl Steep', 'Natalie Portman'];
let actoresVocales = [];
let peliculas = [];
let actoresPrincipalesPorPelicula = {
  "Titanic": "Leonardo DiCaprio",
  "El Padrino": "Al Pacino",
  "Matrix": "Keanue Reeves",
  "Iron Man": "Robert Downey Jr.",
  "Bastardos Sin Gloria": "Brad Pitt"
};
function tieneMayus(){
  for (var i = 0; i < actoresPrincipales.length; i++) {
    var actor = actoresPrincipales[i];
  var nombreCompleto = actor.split(' ');
  var nombre = nombreCompleto[0];
  var apellido = nombreCompleto[nombreCompleto.length - 1]; 

  if(/^[aeiou]/i.test(nombre) || /^[aeiou]/i.test(apellido) ){
    actoresVocales.push(actor);}
  }
}
tieneMayus();

function agregarPrincipalXpeli(){
  for (peli in  actoresPrincipalesPorPelicula) {
  actoresPrincipales.push(actoresPrincipalesPorPelicula[peli]);
  }
}
agregarPrincipalXpeli();

function agregarPelis(){
for (peli in  actoresPrincipalesPorPelicula) {
  peliculas.push(peli);
}}
agregarPelis();

console.log(peliculas);