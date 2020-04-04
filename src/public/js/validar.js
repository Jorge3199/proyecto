function error(texto){
    Swal.fire({
        type: 'error',
        title: 'Error',
        text: texto,
        
    })
}
function validar_registro(opcion) {
    
    var nombre, apellido, sexo, nacimiento, direccion, telefono, correo, usuario, contrasena, confirmar, expresion;

    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    sexo = document.getElementById("sexo").value;
    nacimiento = document.getElementById("nacimiento").value;
    direccion = document.getElementById("direccion").value;
    telefono = document.getElementById("telefono").value;
    correo = document.getElementById("correo").value;
    cedula = document.getElementById("cedula").value;
    contrasena = document.getElementById("contrasena").value;
    confirmar = document.getElementById("confirmar").value;
 
     
    expresion = /\w+@\w+\.+[a-z]/;

    if( (nombre === "") || (apellido === "") || (sexo === "N") || (nacimiento === "") || (direccion === "N") ||
        (telefono === "") || (correo === "") || (usuario === "") || (contrasena === "") || (confirmar === "") 
    ){
        error("Todos los campo son obligatorios!"); 
        return false;
    }

    if( nombre.length > 20){
        error("El nombre es muy largo!");
        return false;
    }

    if( apellido.length > 20){
        error("El apellido es muy largo!");
        return false;
    }

    var nacimiento1 = nacimiento.split("-");
    var hoy = new Date();
    var anos= hoy.getUTCFullYear() - 18;
   
    
    if(nacimiento1[0] >= anos){
        if(nacimiento1[0] > anos){
            error('No es mayor de edad!');
            return false;
        }
        if(nacimiento1[0] == anos){
            var mes = (hoy.getMonth() + 1);
            if(nacimiento1[1] > mes){
                error('No es mayor de edad!');
                return false;
            }
    
            if(nacimiento1[1] == mes){
               var dia= hoy.getDate();
               if(nacimiento1[2] > dia){
                    error('No es mayor de edad!');
                    return false;
               }
    
            }
    
        }
      
    }

    if( (telefono.length < 14) || (telefono.length > 14)){
        error("El telefono no es numero valido!");
        return false;
        // (isNaN(telefono)) 
    }

    if((telefono.slice(0, 5) != '(829)') &&  (telefono.slice(0, 5) != '(809)') &&  (telefono.slice(0, 5) != '(849)') ){
        error("El telefono no es numero valido!");
        return false;

    }

    if(!expresion.test(correo)){
        error("El correo no es valido!");
        return false;
    }

    if(contrasena != confirmar){
        error("La contraseña no son iguales!"); 
        return  false;
    }

    if(contrasena.length < 8){
        error("La contraseña debe de tener por los menos 8 digitos!"); 
        return  false;
    }

    $.ajax({
        type:"POST",
        url:"/administrador/informacion",
        data: {opcion : opcion},
        async: false,
        success:function(informacion){
        
            for(var n=0; n<informacion.length; n++){
                
                if(informacion[n].telefono == telefono){
                    error("El telefono ingresado, ya se encuentra registrado!");
                    return false;
                }

                if(informacion[n].cedula == cedula){
                    error("La cedula ingresado, ya se encuentra registrado!");
                    return false;
                }

                if(informacion[n].correo == correo){
                    error("El correo ingresado, ya se encuntra registrado!");
                    return false;
                }
                
            }

           
            var form = document.getElementById('enviar');
            form.submit();

        }
        
    });
   
}
//////////////////////////editar cliente o adminisnistrador///////////////////////
function validar_registro2(id, opcion) {
   
    var nombre, apellido, sexo, nacimiento, direccion, telefono, correo, cedula, expresion;

    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    sexo = document.getElementById("sexo").value;
    nacimiento = document.getElementById("nacimiento").value;
    direccion = document.getElementById("direccion").value;
    telefono = document.getElementById("telefono").value;
    correo = document.getElementById("correo").value;
    cedula = document.getElementById("cedula").value;
    
    
  
    expresion = /\w+@\w+\.+[a-z]/;

    if( (nombre === "") || (apellido === "") || (sexo === "N") || (nacimiento === "") || 
        (direccion === "N") || (telefono === "") || (correo === "") || (cedula === "") 
    ){
        error("Todos los campo son obligatorios!"); 
        return false;
    }

    if( nombre.length > 20){
        error("El nombre es muy largo!");
        return false;
    }

    if( (telefono.length < 14) || (telefono.length > 14)  ){
        error("El telefono no es numero valido!");
        return false;
        // (isNaN(telefono)) 
    }

    if(!expresion.test(correo)){
        error("El correo no es valido!");
        return false;
    }

    $.ajax({
        type:"POST",
        url:"/administrador/informacion",
        data: {opcion : opcion},
        async: false,
        success:function(informacion){
        
            for(var n=0; n<informacion.length; n++){
               
                if(id != informacion[n].id){
                    if(informacion[n].telefono == telefono){
                        error("El telefono ingresado, ya se encuentra registrado!");
                        return false;
                    }

                    if(informacion[n].cedula == cedula){
                        error("La cedula ingresado, ya se encuentra registrado!");
                        return false;
                    }
    
                    if(informacion[n].correo == correo){
                        error("El correo ingresado, ya se encuntra registrado!");
                        return false;
                    }
                }
    
            }
                
            editar_informacion(id, opcion);
            
        }
        
    });   
      
}

/////////////////////////formulario de agregar productos//////////////////////////
function validar_formulario() {
    var nombre, precio, imagen, modelo, cantidad;

    nombre = document.getElementById("nombre").value;
    precio = document.getElementById("precio").value;
    imagen = document.getElementById("imagen").value;
    modelo = document.getElementById("id_modelo").value;
    cantidad = document.getElementById("cantidad").value;
    

    if( (nombre === "") || (precio === "") || (imagen === "") || (modelo === "Modelo") || (cantidad === "")  ){
        error("Todos los campo son obligatorios!"); 
        return false;
    }

    if( nombre.length > 20){
        error("El nombre es muy largo!");
        return false;
    }

    if( (isNaN(precio)) ){
        error("El precio no es numero valido!");
        return false;
    }

   
    cerrar();
    agregar_producto();

      
}
/////////////////////////formulario de editar productos//////////////////////////
function validar_formulario_editar(id, opcion) {

    var nombre, precio, cantidad;

    nombre = document.getElementById("nombre").value;
    precio = document.getElementById("precio").value;
    cantidad = document.getElementById("cantidad").value;

    if( (nombre === "") || (precio === "") || (cantidad === "") ){
        error("Todos los campo son obligatorios!"); 
        return false;
    }

    if( nombre.length > 20){
        error("El nombre es muy largo!");
        return false;
    }

    if( (isNaN(precio)) ){
        error("El precio no es numero valido!");
        return false;
    }
    
    cerrar(opcion);
    editar_producto(id);

      
}
////////////////////////////Eliminar_Fotos///////////////////////////////////////
function eliminacion_foto(id, opcion) {
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
          
            eliminar_foto(id, opcion);
        }
         
    })
}
////////////////////////////CAMBIAR_CONTRASENA////////////////////////////////////
function validar_contrasena(id, opcion) {
    var actual, contrasena, confirmar;

    actual = document.getElementById("actual").value;
    contrasena = document.getElementById("contrasena").value;
    confirmar = document.getElementById("confirmar").value;

    if( (contrasena === "") || (confirmar === "") || (actual === "") ){
        error("Todos los campo son obligatorios!"); 
        return false;
    }

    if(contrasena != confirmar){ 
        error("La contraseña no son iguales!"); 
        return  false;
    }

    if(contrasena.length < 8){
        error("La contraseña debe de tener por los menos 8 digitos!"); 
        return  false;
    }
    
    
    cambiar_contrasena(id, opcion);
    
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

        eliminar_producto(id);
    }
     
    })
  
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

function confirmar4(id_cliente, fecha_hora){
                   
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
       
       
        factura_despachada(id_cliente, fecha_hora);
    
    }
     
    })
  
  
}

function confirmar04(id_cliente, fecha_hora){
                   
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
       
       recuperar_venta(id_cliente, fecha_hora);
        
       
    }
     
    })
  
  
}

function confirmar5(id){
                   
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
      
            eliminar_cliente(id);
       
    }
     
    })
  
}    

function confirmar05(id){
                   
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
      
        activar_cliente(id);
       
    }
     
    })
  
}    

  
  
