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
      title: 'Gracias por su compra!!, La factura se le a enviado a su correo electrónico'
    })
}

function alert_compra1(){
  Swal.fire({
    type: 'error',
    title: 'Error',
    text: 'revice su factura',
    
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
      Swal.fire({
          type: 'error',
          title: 'Error',
          text: 'No ha selecionado ninguna imagen!',
          
        })
      // alertify.alert("HEADER","La contraseña no son iguales").set('label', 'Aceptar'); 
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

  if( (telefono.length < 14) || (telefono.length > 14)  ){
    Swal.fire({
      type: 'error',
      title: 'Error',
      text: 'El telefono no es numero valido!',
      
    })
     
    return false;  
  }

  if(!expresion.test(correo)){
    Swal.fire({
      type: 'error',
      title: 'Error',
      text: 'El correo no es valido!',
      
    })
    
    return false;
  }

  editar_informacion();
}

function validar_contrasena() {
  var contrasena, confirmar;

  contrasena = document.getElementById("contrasena").value;
  confirmar = document.getElementById("confirmar").value;

  if(contrasena != confirmar || contrasena == '' || confirmar == ''){
      Swal.fire({
          type: 'error',
          title: 'Error',
          text: 'La contraseña no son iguales!',
          
        }) 
      return  false;
  }
  
  
  cambiar_contrasena();
  
}
