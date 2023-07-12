
class Item {

    constructor(nuevaTarea) {
      this.crearDiv(nuevaTarea);
    }
  
    crearDiv(nuevaTarea) {
      let inputItem = document.createElement('input');
      inputItem.type = 'text';
      inputItem.classList.add('item-input');
      inputItem.disabled = true;
      inputItem.value = nuevaTarea;
  
      let crearDiv = document.createElement('div');
      crearDiv.classList.add('item');
  
      let btnEditar = document.createElement('button');
      btnEditar.innerHTML = '🔒';
      btnEditar.classList.add('boton-editar');
  
      let btnRemover = document.createElement('button');
      btnRemover.innerHTML = '🗑️';
      btnRemover.classList.add('boton-remover');
  
      crearDiv.appendChild(inputItem);
      crearDiv.appendChild(btnEditar);
      crearDiv.appendChild(btnRemover);
  
      btnEditar.addEventListener('click', () => this.editar(inputItem, btnEditar));
      btnRemover.addEventListener('click', () => this.remover(crearDiv));
      document.querySelector('.container').appendChild(crearDiv);
    }
  
    editar(inputItem, btnEditar) {
      
      if (inputItem.disabled) {
        inputItem.disabled = false;
        btnEditar.innerHTML = '🔓';
      
      } else {
        inputItem.disabled = true;
        btnEditar.innerHTML = '🔒';

      }
    }
  
    remover(item) {
      document.querySelector('.container').removeChild(item);
    }
  }
  
  function chequearInput() {

    let inputValue = document.querySelector('.input').value;
    
    if (inputValue !== '') {
      new Item(inputValue);
      document.querySelector('.input').value = '';

    }
  }
  document.querySelector('.boton-agregar').addEventListener('click', chequearInput);
  