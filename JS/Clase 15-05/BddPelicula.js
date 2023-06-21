let  peliculas = [
    {
      titulo: "Búsqueda implacable",
      rating: 5,
      loHasVisto: true
    },
    {
      titulo: "Norbit",
      rating: 3,
      loHasVisto: false
    },
    {
      titulo: "Mini espías",
      rating: 2,
      loHasVisto: true
    },
  ];

  function imprimirPelis(){
    for ( i = 0; i < peliculas.length; i++) {
        let película = peliculas[i];
        let visto = película.loHasVisto;
        console.log(visto + ' "' + película.titulo + '" - ' + película.rating + " estrellas");
}
    }
    
imprimirPelis();
