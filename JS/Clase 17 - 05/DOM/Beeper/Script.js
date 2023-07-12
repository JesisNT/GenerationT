var btnBeep = document.getElementById("btnBeep");

function parrafoBeep(){
    var node = document.createElement('p');
        node.appendChild(document.createTextNode("BEEP"));
        document.querySelector('body').appendChild(node);
        node.style.backgroundColor = colorRandom() ;
    }


function colorRandom(){
const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const rbgColor = `rgb(${r},${g},${b})`;
  return rbgColor;
}
btnBeep.addEventListener('click', parrafoBeep);