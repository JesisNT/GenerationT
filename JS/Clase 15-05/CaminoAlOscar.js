let actoresPrincipales = ['Tom Hanks', 'Johnny Deep', 'Elizabeth Taylor', 'Morgan Freeman', 'Jennifer Aniston', 'Meryl Steep', 'Natalie Portman'];
let actoresVocales = [];

for (var i = 0; i < actoresPrincipales.length; i++) {
    var actor = actoresPrincipales[i];
  var nombreCompleto = actor.split(' ');
  var nombre = nombreCompleto[0];
  var apellido = nombreCompleto[nombreCompleto.length - 1]; 

  if(/^[aeiou]/i.test(nombre) || /^[aeiou]/i.test(apellido) ){
    actoresVocales.push(actor);}
}
console.log(actoresVocales);