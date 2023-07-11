var confirmaciones = document.getElementsByClassName("confirmaciones");
var listaDesordenada = document.getElementById("listaDesordenada");

var btnCarga = document.getElementById("cargar");
var btnRefresca = document.getElementById("refrescar");

var nombreLibro = document.getElementById("txtNombreLibro");
var NombreAutor = document.getElementById("txtNombreAutor");
var direccion = document.getElementById("txtDireccionComprador");

class Pedido {
    constructor(titulo, autor, direccion) {
        this.titulo = titulo;
        this.autor = autor;
        this.direccion = direccion;
        this.cargarItems(titulo, autor, direccion);
    }
  
    cargarItems() {
    
      // Crear un nuevo ítem de lista
      const nuevoItem = document.createElement('li');
      nuevoItem.innerHTML = `${this.titulo} - ${this.autor} - ${this.direccion}`;
  
      // Agregar el nuevo ítem a la lista desordenada
      ul.appendChild(nuevoItem);
        
    }
}
    
    btnCarga.addEventListener('click' , cargarItems());
