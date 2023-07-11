var btnBeep = document.getElementById("btnBeep");

function parrafoBeep(){
    var node = document.createElement('p');
        node.appendChild(document.createTextNode("BEEP"));
        document.querySelector('body').appendChild(node);
}
btnBeep.addEventListener('click', parrafoBeep);