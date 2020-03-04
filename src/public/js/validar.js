function validar_administrador() {
    
    var nombre, apellido, sexo, nacimiento, direccion, telefono, correo, usuario, contrasena, confirmar, expresion;

    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    sexo = document.getElementById("sexo").value;
    nacimiento = document.getElementById("nacimiento").value;
    direccion = document.getElementById("direccion").value;
    telefono = document.getElementById("telefono").value;
    correo = document.getElementById("correo").value;
    usuario = document.getElementById("usuario").value;
    contrasena = document.getElementById("contrasena").value;
    confirmar = document.getElementById("confirmar").value;
    
  
    expresion = /\w+@\w+\.+[a-z]/;

    if( (nombre === "") || (apellido === "") || (sexo === "N") || (nacimiento === "") || (direccion === "N") ||
        (telefono === "") || (correo === "") || (usuario === "") || (contrasena === "") || (confirmar === "") 
    ){
        alertify.alert("HEADER","Todos los campo son obligatorios").set('label', 'Aceptar'); 
        // alert("Todos los campo son obligatorios");
        return false;
    }

    if( nombre.length > 20){
        alert("El nombre es muy largo");
        return false;
    }

    if( (isNaN(telefono)) || (telefono.length < 10) || (telefono.length > 10)  ){
        alert("El telefono no es numero valido");
        return false;
    }

    if(!expresion.test(correo)){
        alert("El correo no es valido");
        return false;
    }

    if(contrasena != confirmar){
        alertify.alert("HEADER","La contraseña no son iguales").set('label', 'Aceptar'); 
        // alert("La contraseña no son iguales");
        return  false;
    }

    agregar_administrador();
      
}

/////////////////////////formulario de agregar productos//////////////////////////
function validar_formulario() {
    var nombre, precio, imagen, modelo, cantidad;

    nombre = document.getElementById("nombre").value;
    precio = document.getElementById("precio").value;
    imagen = document.getElementById("imagen").value;
    modelo = document.getElementById("selectModelo").value;
    cantidad = document.getElementById("cantidad").value;
    

    if( (nombre === "") || (precio === "") || (imagen === "") || (modelo === "Modelo") || (cantidad === "")  ){
        alertify.alert("HEADER","Todos los campo son obligatorios").set('label', 'Aceptar'); 
        // alert("Todos los campo son obligatorios");
        return false;
    }

    // if( nombre.length > 20){
    //     alert("El nombre es muy largo");
    //     return false;
    // }

    if( (isNaN(precio)) ){
        alert("El precio no es numero valido");
        return false;
    }

    // if(!expresion.test(correo)){
    //     alert("El correo no es valido");
    //     return false;
    // }

    // if(contrasena != confirmar){
    //     alert("La contraseña no son iguales");
    //     return  false;
    // }
   
    cerrar();
    agregar_producto();

      
}
/////////////////////////formulario de agregar productos//////////////////////////
function validar_formulario_editar(id, opcion) {

    var nombre, precio, cantidad;

    nombre = document.getElementById("nombre").value;
    precio = document.getElementById("precio").value;
    cantidad = document.getElementById("cantidad").value;
    

    if( (nombre === "") || (precio === "") || (cantidad === "")  ){
        alertify.alert("HEADER","Todos los campo son obligatorios").set('label', 'Aceptar'); 
        // alert("Todos los campo son obligatorios");
        return false;
    }

    // if( nombre.length > 20){
    //     alert("El nombre es muy largo");
    //     return false;
    // }

    if( (isNaN(precio)) ){
        alert("El precio no es numero valido");
        return false;
    }

    // if(!expresion.test(correo)){
    //     alert("El correo no es valido");
    //     return false;
    // }

    // if(contrasena != confirmar){
    //     alert("La contraseña no son iguales");
    //     return  false;
    // }
    
    cerrar(opcion);
    editar_producto(id);

      
}
////////////////////////////CAMBIAR_CONTRASENA////////////////////////////////////
function validar_contrasena() {
    var contrasena, confirmar;

    contrasena = document.getElementById("contrasena").value;
    confirmar = document.getElementById("confirmar").value;

    if(contrasena != confirmar){
        Swal.fire({
            type: 'error',
            title: 'Error',
            text: 'La contraseña no son iguales!',
            
          })
        // alertify.alert("HEADER","La contraseña no son iguales").set('label', 'Aceptar'); 
        return  false;
    }
}

function imagenes(imagen){
    Swal.fire({
        //title: 'Sweet!',
        //text: 'Modal with a custom image.',
        imageUrl: '/imagen1/'+imagen,
        imageWidth: 400,
        imageHeight: 300,
        //imageAlt: 'Custom image',
        })
}

function confirmar(id){
                   
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
        /*Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
        )*/
        eliminar_producto(id);
    }
     
    })
  //  alertify.error('Ha Cancelado La Eliminacion');
    //window.location = 'http://localhost:4000/links';
  
}

function guardado(){
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
        title: 'Se agregado correctamente'
      })
}

function editado(){
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
        title: 'Se a editado correctamente'
      })
}

function eliminado(){
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
        title: 'Se a eliminado correctamente'
      })
}

function activado(){
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
        title: 'Se a activado correctamente'
      })
}


function confirmar2(id){
                   
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
       
        activar_producto(id);
    }
     
    })
  
  
}