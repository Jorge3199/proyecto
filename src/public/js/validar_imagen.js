function cambiar() {

  var imagen = document.getElementById("imagen").value;
  
   
    if(imagen === ""){
      // alert('hola');
      const resultado = document.querySelector('#cambiar');
      resultado.innerHTML = `
      <input class="btn btn-warning btn-block" onmousemove="cambiar()" onclick="validar_imagen()" value="jorge">
      `
        
      
    }

    if(imagen !== ''){
      // alert('hola1');
      const resultado = document.querySelector('#cambiar');
      resultado.innerHTML = `
      <button class="btn btn-warning btn-block" onmousemove="cambiar()" >Save</button>
      `
      
    }
   
      
}

function validar_imagen(){
  var nombre = document.getElementById("nombre").value;
  var precio = document.getElementById("precio").value;
  
  window.location = 'http://localhost:4000/administrador/editar/'+id+'/'+nombre+'/'+precio;
  
}

