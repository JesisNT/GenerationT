//txt
var confirmaciones = document.getElementsByClassName("confirmaciones");
var listaDesordenada = document.getElementById("listaDesordenada");
//botones
var btnCarga = document.getElementById("cargar");
var btnRefresca = document.getElementById("refrescar");
//inputs
var nombreLibro = document.getElementById("txtNombreLibro").value;
var NombreAutor = document.getElementById("txtNombreAutor").value;
var direccion = document.getElementById("txtDireccionComprador").value;


class Pedido {
    constructor(titulo, autor, direccion) {
        this.titulo = titulo;
        this.autor = autor;
        this.direccion = direccion
        this.cargarItems();
    }
}
    
    function cargarItems() {
        var node = document.createElement('li');
        node.appendChild(document.createTextNode("hola"));
        document.querySelector('ul').appendChild(node);
} 
btnCarga.addEventListener( "click" , cargarItems());
