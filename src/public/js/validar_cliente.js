function agrego_carrito(){
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        onOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        type: 'success',
        title: 'Se agregado correctamente al carrito'
      })
}

function alert_compra(){
  Swal.fire({
    type: 'success',
    title: 'Gracias por su compra!!',
    text: 'La factura se le a enviado a su correo electrónico'
  })
  
}

function alert_compra1(){
  Swal.fire({
    type: 'warning',
    title: 'Revise su factura!!',
    text: 'hubo algunos problema con algunos de los productos a la ahora pago!',
    
  })
}

function alert_compra0(){
  Swal.fire({
    type: 'error',
    title: 'Error',
    text: 'hubo un fallo con los productos a la ahora de pago!',
    
  })
}

function agrego_favorito(){
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        onOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        type: 'success',
        title: 'Se agregado correctamente a la lista de favorito'
      })
}

function borrar_fav(id){
                
  Swal.fire({
  title: '¿Estás seguro?',
  text: "¡No podrás revertir esto!",
  type: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  cancelButtonText: 'Cancelar',
  confirmButtonText: 'Confirmar'
  }).then((result) => {
  if (result.value) {
      borrar_favorito(id);
      
  }

  })
  
}

function validar_imagen(){
  imagen = document.getElementById("imagen").value;

  if(imagen == ''){
    error("No ha selecionado ninguna imagen!");
    return  false;
  }

  if(imagen != ''){
    cambiar_imagen();
  }
}

function validar_informacion(){
  var telefono = document.getElementById("telefono").value;
  var correo = document.getElementById("correo").value;
  var expresion = /\w+@\w+\.+[a-z]/;

  if( (telefono.length < 14) || (telefono.length > 14)){
    error("El telefono no es numero valido!");
    return false;
  }

  if(!expresion.test(correo)){
    error("El correo no es valido!");
    return false;
  }

  editar_informacion();
}

function validar_contrasena() {
  var contrasena, confirmar, actual;

  actual = document.getElementById("actual").value;
  contrasena = document.getElementById("contrasena").value;
  confirmar = document.getElementById("confirmar").value;

  if( (contrasena === "") || (confirmar === "") || (actual === "") ){
    error("Todos los campo son obligatorios!");
    return false;
  }

  if(contrasena.length < 8){
    error("La contraseña debe de tener por los menos 8 digitos!"); 
    return  false;
  }

  if(contrasena != confirmar){ 
    error("La contraseña no son iguales!"); 
    return  false;
  }
  
  cambiar_contrasena();
  
}

function eliminacion_foto() {
  Swal.fire({
      title: '¿Estás seguro?',
      text: "¡No podrás revertir esto!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Confirmar'
      }).then((result) => {
      if (result.value) {
        
          eliminar_foto();
      }
       
  })
}

function alert_encontrado(){
  Swal.fire({
    type: 'warning',
    title: 'Advertencia',
    text: 'Este producto ya se encontraba en la lista de favorito'  
  })
}