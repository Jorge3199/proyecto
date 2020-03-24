// var prod = [];
// var n10 = 0;
const formulario =  document.querySelector('#formulario');
       
const filtrar = (llamar)=>{
   
        prod = [];
        var modelo;

        const texto = formulario.value.toLowerCase();

        for (var i=0; i<productos.length;i++) { 
                
                let id = productos[i].id.toString().toLowerCase();
                let nombre = productos[i].nombre.toLowerCase();
                let precio = productos[i].precio.toString().toLowerCase();
                let cantidad = productos[i].cantidad.toString().toLowerCase();

                for (n = 0; n < categoria.length; n++){
                    if(productos[i].id_modelo == categoria[n].id){
                         modelo = categoria[n].modelo.toLowerCase();
         
                    }
                }
                
        
                if( (id.indexOf(texto) !== -1) || (nombre.indexOf(texto) !== -1) || (precio.indexOf(texto) !== -1) || (cantidad.indexOf(texto) !== -1) || (modelo.indexOf(texto) !== -1) ){ 
                    
                    prod[prod.length] = { id: productos[i].id, nombre: productos[i].nombre, precio:productos[i].precio, cantidad: productos[i].cantidad, modelo: modelo, tiempo: productos[i].tiempo, imagen: productos[i].imagen};
                    
                    
                }
                    
        } 

	if( (llamar != 'edito') && (llamar != 'elimino') ){
        valor(0);
		paginacion();
	}
		


    const id = [...document.querySelectorAll('#options1 .selected')].map(el => el.id);
	if(llamar == 'edito'){
		paginacion();
		paginacion_editar(id); 
    }

	if(llamar == 'elimino'){
	    paginacion();
        paginacion_eliminar(id);
	}
    
    

}
     
formulario.addEventListener('keyup', filtrar);
filtrar();


/////////////////////////////////////////////////////////////////////

function abrir_productos(){
    
    const ventana = document.querySelector('#vent');
    ventana.innerHTML = ` 
    <div class="row">
    <div class="col-sm-12 col-md-12 col-sx-12 col-lg-12 lg-auto">
        <div class="card">
        
            <div class="card-header">
          
          
            <div class="col-md-12 col-lg-12">
                <a><img height="75" width="100" src="/img/logo.png"><h2 style="position: absolute; top:-2px; left: 120px; color:black;">AGREGAR PRODUCTO</h2></a> 
            </div> 
            
        </div>
        
            <div class="card-body">
                <form id="frmSubir"  enctype="multipart/form-data" >
                  
                    <div class="row">
                    <hr color="black" size=3>
                    <br>
                      
                         <div class="col-md-4">
                            <h3 style="color:black">Nombre<span style="color:red">*</span></h3>
                            <div class="inputWithIcon jorge">
                            <input type="text" id="nombre" name="nombre" placeholder="Nombre del producto" class="form-control" required autofocus>
                            <i class="icon-pencil" aria-hidden="true"></i>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <h3 style="color:black">Cantidad<span style="color:red">*</span></h3>
                            <div class="inputWithIcon jorge">
                            <input type="text" id="cantidad" name="cantidad" placeholder="Cantidad" class="form-control" required>
                            <i class="icon-attach_money" aria-hidden="true"></i>
                            </div>
                        </div> 
                    
                        <div class="col-md-4">
                            <h3 style="color:black">Precio<span style="color:red">*</span></h3>
                            <div class="inputWithIcon jorge">
                            <input type="text" id="precio" name="precio" placeholder="RD$0.00" class="form-control" required >
                            <i class="icon-attach_money" aria-hidden="true"></i>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <h3 style="color:black">Modelo<span style="color:red">*</span></h3>
                            <div class="inputWithIcon jorge2">
                                <select id="id_modelo" name="id_modelo" placeholder="Modelo" class="form-control">
                                  
                                </select> 
                                <i class="icon-cogs" aria-hidden="true"></i>
                            </div>
                        </div>

                        <div class="col-md-2">
                            
                            <div id="div_file">
                            <p id="texto"><i class="icon-camera" aria-hidden="true"></i>Add file</p>
                                <input type="file" name="imagen" id="imagen"  required>
                            </div>
                            
                        </div>

                         
                        <div class="col-md-4">
                             <br>
                               
                            <table>
                                <tr><td><div id="imagenPreview" class="imagen" style="width:461px; height:263px; border:dashed black" > </div></td></tr>
                                
                                
                             

                            </table> 
                           
                        </div>

                        </div>

                       
                    </div>

                    <br>
                   
                    <div class="row">
                       <div id="boton01">
                            <div class="col-lg-8" style="text-align:right">
                                <div class="col-lg-3" >
                                    <a class="btn btn-warning btn-block" onclick="validar_formulario()" >Guardar</a>
                                </div>

                                <div class="col-lg-3" style="text-align:right">
                                <a class="btn btn-danger btn-block" onclick="cerrar()">Cancelar</a>
                                </div>

                            </div>
                        </div>    
                    </div>


                </form>

                


            </div>
        </div>
    </div>

</div>
    ` 

    abrir();

    var intro = document.getElementById('tamaño');
    
    intro.style.width="75%";
    intro.style.top="-12%";
    const precio = document.querySelector('#precio');
    const cantidad = document.querySelector('#cantidad');


    precio.addEventListener('keyup', (e) => {
        let valorInput = e.target.value;
    
        precio.value = valorInput

        //Eliminamos espacios en blanco
        .replace(/\s/g, '')
        //Eliminar las letrar
        .replace(/\D/g, '')

        .trim();
        
    });

    cantidad.addEventListener('keyup', (e) => {
        let valorInput = e.target.value;
    
        cantidad.value = valorInput

        //Eliminamos espacios en blanco
        .replace(/\s/g, '')
        //Eliminar las letrar
        .replace(/\D/g, '')

        .trim();
        
    });
  


    $('#imagenPreview').html("<img src='/img/camara1.png' class='imagen'/>"); 
   (function(){
       function filePreview(input){
           if(input.files && input.files[0]){
               var reader = new FileReader();

               reader.onload = function(e){
                   $('#imagenPreview').html("<img src='"+e.target.result+"' class='imagen'/>");
               }

               reader.readAsDataURL(input.files[0]);
           }
       }
       $('#imagen').change(function(){
          filePreview(this);
       });
   }) ();

   consulta_Real_Modelo();

}
//////////////////////////////////////////////////////////////////////////
function abrir_editacion_productos(id, imagen, nombre, precio, modelo, cantidad, opcion){
    
    const ventana = document.querySelector('#vent');
    ventana.innerHTML = ` 
    <div class="row">
    <div class="col-sm-12 col-md-12 col-sx-12 col-lg-12 lg-auto">
        <div class="card">
        
            <div class="card-header">
          
          
            <div class="col-md-12 col-lg-12">
                <a><img height="75" width="100" src="/img/logo.png"><h2 style="position: absolute; top:-2px; left: 120px; color:black;">EDITAR PRODUCTO</h2></a> 
            </div> 
            
        </div>
        
            <div class="card-body">
            <form id="editar_producto"  enctype="multipart/form-data" >
                  
                    <div class="row">
                    <hr color="black" size=3>
                    <br>
                    
                        <div class="col-md-4">
                            <h3 style="color:black">Nombre<span style="color:red">*</span></h3>
                            <div class="inputWithIcon jorge">
                            <input type="text" id="nombre" name="nombre" placeholder="Nombre del producto" class="form-control" value="${nombre}" required autofocus>
                            <i class="icon-pencil" aria-hidden="true"></i>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <h3 style="color:black">Cantidad<span style="color:red">*</span></h3>
                            <div class="inputWithIcon jorge">
                            <input type="text" id="cantidad" name="cantidad" placeholder="Cantidad" class="form-control" value="${cantidad}" required>
                            <i class="icon-attach_money" aria-hidden="true"></i>
                            </div>
                        </div> 
                    
                        <div class="col-md-4">
                            <h3 style="color:black">Precio<span style="color:red">*</span></h3>
                            <div class="inputWithIcon jorge">
                            <input type="text" id="precio" name="precio" placeholder="RD$0.00" class="form-control" value="${precio}" required >
                            <i class="icon-attach_money" aria-hidden="true"></i>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <h3 style="color:black">Modelo<span style="color:red">*</span></h3>
                            <div class="inputWithIcon jorge2">
                                <select id="id_modelo" name="id_modelo" placeholder="Modelo" class="form-control" ">
                                    
                                </select> 
                                <i class="icon-cogs" aria-hidden="true"></i>
                            </div>
                        </div>

                        <div class="col-md-2">
                            
                            <div id="div_file">
                            <p id="texto"><i class="icon-camera" aria-hidden="true"></i>Add file</p>
                                <input type="file" name="imagen" id="imagen"  required>
                            </div>
                            
                        </div>

                        
                        <div class="col-md-4">
                            <br>
                            
                            <table>
                                <tr><td><div id="imagenPreview" class="imagen" style="width:461px; height:263px; border:dashed black" > </div></td></tr>
                                
                                
                            

                            </table> 
                        
                        </div>

                        </div>

                    
                    </div>

                    <br>
                
                    <div class="row">
                    <div id="boton01">
                            <div class="col-lg-8" style="text-align:right">
                               <div class="col-lg-3" id="cambiar">
                                    <a class="btn btn-warning btn-block" onclick="validar_formulario_editar(${id}, '${opcion}')" >Guardar</a>
                                </div>

                                <div class="col-lg-3" style="text-align:right">
                                    <a class="btn btn-danger btn-block" onclick="cerrar('${opcion}')">Cancelar</a>
                                </div>

                            </div>
                        </div>    
                    </div>


             </form>

            </div>
        </div>
    </div>

</div>
    `

    abrir();

    var intro = document.getElementById('tamaño');
    
    intro.style.width="75%";
    intro.style.top="-12%";
    // intro.style.height="78%";
   

    $('#imagenPreview').html("<img src='/imagen1/"+imagen+"'  class='imagen'/>"); 
   (function(){
       function filePreview(input){
           if(input.files && input.files[0]){
               var reader = new FileReader();

               reader.onload = function(e){
                   $('#imagenPreview').html("<img src='"+e.target.result+"' class='imagen'/>");
               }

               reader.readAsDataURL(input.files[0]);
           }
       }
       $('#imagen').change(function(){
          filePreview(this);
       });
   }) ();

   consulta_Real_Modelo(modelo);
 
}
//////////////////////////////////////////////////////




function abrir_modelo(){
    const ventana = document.querySelector('#vent');
    ventana.innerHTML = ` 
        <div class="row">

        <div class="col-lg-12 mx-auto">
        <div class="card text-center">
            <div class="card-header">
            <h3 style="color:black">Agregar Modelo</h3>
            </div>
        
            <div class="card-header">
            <form id="agregar_modelo" method="POST" onsubmit="return validar_correo();">
                <img height="150" width="150" src="/images/super_gato.png" class="center ms">

                <div class="inputWithIcon jorge">
                    <input type="text" id="modelo" name="modelo" placeholder="Ingrese el nuevo modelo" class="form-control" required autofocus>
                    <i class="icon-cogs" aria-hidden="true"></i>
                </div>
                
               
                <div class="row" >
                    <div class="modelo">
                        <div class="col-lg-5" >
                            <a class="btn btn-warning btn-block" onclick="modelo()"> Guardar </a>
                        </div> 
                        <div class="col-lg-5">
                            <a class="btn btn-danger btn-block" onclick="cerrar()">Cancelar</a>
                        </div>
                    </div>
                </div>
            </form>

            </div>
        </div>
        </div>
    </div>
    `

    abrir();

    var intro = document.getElementById('tamaño');
     intro.style.width="40%";
     intro.style.top="-3%";
}
////////////////////////////////////////////////////
function abrir_cliente(){
    const ventana = document.querySelector('#vent');
    ventana.innerHTML = `
        <div class="row">
        <div class="col-md-12 mx-auto" >
            <div class="card ">
        
            <div class="card-header">
                <h2 align="center" style="color:black">Registrar Cliente</h2>
            </div>
                
            <hr style="color:black" size=3>
            <div class="card-body">
                <form id="enviar" action="/cliente_signup" method="POST" enctype="multipart/form-data">

                <div align="center">
                    <div id="imagenPreview">
                    </div>
                </div>
            
        
                <div align="center">
                    <div id="div_file" style="top:-20px; left: 2px;">
                    <p id="texto"><i class="icon-camera" aria-hidden="true"></i>Add file</p>
                        <input type="file" name="imagen" id="imagen"  required>
                    </div>
                </div>
                <hr color="black" size=3>
    
                <div class="row">
    
                    <div class="col-lg-6">
                    <h3 class="negro">Nombre<span style="color:red">*</span></h3>
                    <div class="inputWithIcon jorge">
                        <input type="text" id="nombre" name="nombre" placeholder="Nombre" class="form-control" required autofocus>
                        <i class="icon-user" aria-hidden="true"></i>
                    </div>
                    </div>
    
                
                    <div class="col-lg-6">
                    <h3 class="negro">Apellido<span style="color:red">*</span></h3>
                    <div class="inputWithIcon jorge">
                        <input type="text" id="apellido" name="apellido" placeholder="Apellido" class="form-control" >
                        <i class="icon-pencil" aria-hidden="true"></i>
                    </div>
                    </div>
    
                </div>
    
                <div class="row">
    
                    <div class="col-lg-6">
                    <h3 class="negro">Sexo<span style="color:red">*</span></h3>
                    <div class="inputWithIcon jorge1">
                        <select id="sexo" name="sexo" placeholder="Sexo" class="form-control">
                            <option value="N" disabled selected>Selecciona sexo</option>
                            <option value="F">Femenino</option> 
                            <option value="M">Masculino</option> 
                        </select>
                        <i class="icon-man-woman" aria-hidden="true"></i>
                    </div>
                    </div>
    
                
                    <div class="col-lg-6">
                    <h3 class="negro">Nacimiento<span style="color:red">*</span></h3>
                    <div class="inputWithIcon jorge3">
                        <input type="date" id="nacimiento" name="nacimiento" placeholder="Nacimiento" class="form-control" >
                        <i class="icon-date" aria-hidden="true"></i>
                    </div>
                    </div>
    
                </div>
    
                <div class="row">
    
                    <div class="col-lg-6">
                    <h3 class="negro">Dirección<span style="color:red">*</span></h3>
                    <div class="inputWithIcon jorge2">
                        <select id="direccion" name="direccion" placeholder="Direccion" class="form-control">
                            <option value="N" disabled selected>Selecciona Provincia</option>
                            <option value="Azua">Azua</option> 
                            <option value="Bahoruco">Bahoruco</option> 
                            <option value="Barahona">Barahona</option>
                            <option value="Dajabón">Dajabón</option> 
                            <option value="Distrito Nacional">Distrito Nacional</option> 
                            <option value="San Francisco de Macorís">San Francisco de Macorís</option>
                            <option value="El Seibo">El Seibo</option> 
                            <option value="Elías Piña">Elías Piña</option> 
                            <option value="Moca">Moca</option>
                            <option value="Hato Mayor">Hato Mayor</option> 
                            <option value="Salcedo">Salcedo</option> 
                            <option value="Jimaní">Jimaní</option>
                            <option value="Higüey">Higüey</option> 
                            <option value="La Romana">La Romana</option> 
                            <option value="La Vega">La Vega</option>
                            <option value="Nagua">Nagua</option> 
                            <option value="Bonao">Bonao</option> 
                            <option value="Monte Cristi">Monte Cristi</option>
                            <option value="Monte Plata">Monte Plata</option> 
                            <option value="Pedernales">Pedernales</option> 
                            <option value="Baní">Baní</option>
                            <option value="Puerto Plata">Puerto Plata</option> 
                            <option value="Samaná">Samaná</option> 
                            <option value="San Cristóbal">San Cristóbal</option>
                            <option value="San José de Ocoa">San José de Ocoa</option> 
                            <option value="San Juan">San Juan</option> 
                            <option value="San Pedro de Macorís">San Pedro de Macorís</option>
                            <option value="Cotuí">Cotuí</option> 
                            <option value="Santiago">Santiago</option> 
                            <option value="Santiago Rodríguez">Santiago Rodríguez</option>
                            <option value="Santo Domingo">Santo Domingo</option> 
                            <option value="Valverde">Valverde</option>  
                        </select>
                        <i class="icon-location" aria-hidden="true"></i>
                    </div>
                    </div>
    
                
                    <div class="col-lg-6">
                    <h3 class="negro">Teléfono<span style="color:red">*</span></h3>
                    <div class="inputWithIcon jorge">
                        <input type="text" id="telefono" name="telefono" placeholder="Telefono" class="form-control" >
                        <i class="icon-phone" aria-hidden="true"></i>
                    </div>
                    </div>
    
                </div>
    
                <div class="row">

                    <div class="col-lg-6">
                    <h3 class="negro">Cedula<span style="color:red">*</span></h3>
                    <div class="inputWithIcon jorge">
                        <input type="text" id="cedula" name="cedula" placeholder="Cedula" class="form-control" >
                        <i class="icon-user-tie" aria-hidden="true"></i>
                    </div>
                    </div>
    
                    <div class="col-lg-6">
                    <h3 class="negro">Correo<span style="color:red">*</span></h3>
                    <div class="inputWithIcon jorge4">
                        <input type="email" id="correo" name="correo" placeholder="Correo" class="form-control" >
                        <i class="icon-email" aria-hidden="true"></i>
                    </div>
                    </div>
    
                </div>
    
                <div class="row">
    
                    <div class="col-lg-6">
                    <h3 class="negro">Contraseña<span style="color:red">*</span></h3>
                    <div class="inputWithIcon jorge5">
                        <input type="password" id="contrasena" name="contrasena" placeholder="Contraseña" class="form-control" >
                        <i class="icon-lock" aria-hidden="true"></i>
                    </div>
                    </div>
    
                
                    <div class="col-lg-6">
                    <h3 class="negro">Confirmar<span style="color:red">*</span></h3>
                    <div class="inputWithIcon jorge5">
                        <input type="password" id="confirmar" name="confirmar" placeholder="Confirmar" class="form-control" >
                        <i class="icon-key" aria-hidden="true"></i>
                    </div>
                    </div>
    
                </div>
                
                <br>

                <div class="col-lg-12">
                    <div class="col-lg-1">
                        <input type="checkbox" name="acepto" >
                    </div>

                    <div class="col-lg-6">
                        <a class="negro">Acepto ternimos y condiciones </a>
                    </div>
                </div>

                <div class="row">
    
                    <div class="col-lg-3">
                    <a id="check" class="btn btn-warning btn-block my-3" onclick="validar_registro()">
                        Registrar
                    </a>
                    
                    </div>
    
                    <div class="col-lg-3">
                    <a class="btn btn-danger btn-block my-3" onclick="cerrar()">
                        Cancelar
                    </a>
                    
                    </div>
    
                </div>
    
                </div>
                </form>
            </div>
            </div>
        </div>
        </div>
    
    `
    
    var c = () => Array.from(document.getElementsByTagName("INPUT")).filter(cur => cur.type === 'checkbox' && cur.checked).length > 0;

    check.addEventListener("click", () => {
    if(!c()) { 
        alert("Debes aceptar ternimos y condiciones");
        //alertify.alert("HEADER","Esto es un mensaje").set('label', 'Aceptar'); 
    } 
    });

    $('#imagenPreview').html("<img src='/img/perfil.jpg' class='imgRedonda'/>"); 
   (function(){
       function filePreview(input){
           if(input.files && input.files[0]){
               var reader = new FileReader();

               reader.onload = function(e){
                   $('#imagenPreview').html("<img src='"+e.target.result+"' class='imgRedonda'/>");
               }

               reader.readAsDataURL(input.files[0]);
           }
       }
       $('#imagen').change(function(){
          filePreview(this);
       });
    }) ();


    abrir();

    var intro = document.getElementById('tamaño');

    intro.style.width="60%";
    intro.style.top="-15%";

    const nombre = document.querySelector('#nombre');
    const apellido = document.querySelector('#apellido');
    const telefono = document.querySelector('#telefono');

    nombre.addEventListener('keyup', (e) => {
        let valorInput = e.target.value;
    
        nombre.value = valorInput

        //Elimina los numero
        .replace(/([0-9])/g, '')
        //Elimina el primer espaciado
        .replace(/^\s+/,"");
        
    });    



    apellido.addEventListener('keyup', (e) => {
        let valorInput = e.target.value;
    
        apellido.value = valorInput
        .replace(/([0-9])/g, '')   
        .replace(/^\s+/,"");
        
    }); 

    telefono.addEventListener('keyup', (e) => {
        let valorInput = e.target.value;
    
        telefono.value = valorInput
        
        //Eliminamos espacios en blanco
        .replace(/\s/g, '')
        //Eliminar las letrar
        .replace(/\D/g, '')

        .trim();
        
    });
}
////////////////////////////////////////////////////
function abrir_administrador(){
    const ventana = document.querySelector('#vent');
    ventana.innerHTML = `
        <div class="row">
        <div class="col-md-12 mx-auto">
            <div class="card ">
            
            <div class="card-header">
                <h2 align="center" style="color:black">Registrar Administrador</h2>
            </div>

            <hr color="black" size=3>
            <div class="card-body">
                <form id="enviar" action="/administrador_signup" method="POST" enctype="multipart/form-data">
                 
                <div align="center">
                    <div id="imagenPreview">
                    </div>
                </div>
            
        
                <div align="center">
                    <div id="div_file" style="top:-20px; left: 2px;">
                    <p id="texto"><i class="icon-camera" aria-hidden="true"></i>Add file</p>
                        <input type="file" name="imagen" id="imagen"  required>
                    </div>
                </div>
                <hr color="black" size=3>

                <div class="row">
    
                    <div class="col-lg-6">
                    <h3 class="negro">Nombre<span style="color:red">*</span></h3>
                    <div class="inputWithIcon jorge">
                        <input type="text" id="nombre" name="nombre" placeholder="Nombre" class="form-control" required autofocus>
                        <i class="icon-user" aria-hidden="true"></i>
                    </div>
                    </div>
    
                
                    <div class="col-lg-6">
                    <h3 class="negro">Apellido<span style="color:red">*</span></h3>
                    <div class="inputWithIcon jorge">
                        <input type="text" id="apellido" name="apellido" placeholder="Apellido" class="form-control" >
                        <i class="icon-pencil" aria-hidden="true"></i>
                    </div>
                    </div>
    
                </div>
    
                <div class="row">
    
                    <div class="col-lg-6">
                    <h3 class="negro">Sexo<span style="color:red">*</span></h3>
                    <div class="inputWithIcon jorge1">
                        <select id="sexo" name="sexo" placeholder="Sexo" class="form-control">
                            <option value="N" disabled selected>Selecciona sexo</option>
                            <option value="F">Femenino</option> 
                            <option value="M">Masculino</option> 
                        </select>
                        <i class="icon-man-woman" aria-hidden="true"></i>
                    </div>
                    </div>
    
                
                    <div class="col-lg-6">
                    <h3 class="negro">Nacimiento<span style="color:red">*</span></h3>
                    <div class="inputWithIcon jorge3">
                        <input type="date" id="nacimiento" name="nacimiento" placeholder="Nacimiento" class="form-control" >
                        <i class="icon-date" aria-hidden="true"></i>
                    </div>
                    </div>
    
                </div>
    
                <div class="row">
    
                    <div class="col-lg-6">
                    <h3 class="negro">Dirección<span style="color:red">*</span></h3>
                    <div class="inputWithIcon jorge2">
                        <select id="direccion" name="direccion" placeholder="Direccion" class="form-control">
                            <option value="N" disabled selected>Selecciona Provincia</option>
                            <option value="Azua">Azua</option> 
                            <option value="Bahoruco">Bahoruco</option> 
                            <option value="Barahona">Barahona</option>
                            <option value="Dajabón">Dajabón</option> 
                            <option value="Distrito Nacional">Distrito Nacional</option> 
                            <option value="San Francisco de Macorís">San Francisco de Macorís</option>
                            <option value="El Seibo">El Seibo</option> 
                            <option value="Elías Piña">Elías Piña</option> 
                            <option value="Moca">Moca</option>
                            <option value="Hato Mayor">Hato Mayor</option> 
                            <option value="Salcedo">Salcedo</option> 
                            <option value="Jimaní">Jimaní</option>
                            <option value="Higüey">Higüey</option> 
                            <option value="La Romana">La Romana</option> 
                            <option value="La Vega">La Vega</option>
                            <option value="Nagua">Nagua</option> 
                            <option value="Bonao">Bonao</option> 
                            <option value="Monte Cristi">Monte Cristi</option>
                            <option value="Monte Plata">Monte Plata</option> 
                            <option value="Pedernales">Pedernales</option> 
                            <option value="Baní">Baní</option>
                            <option value="Puerto Plata">Puerto Plata</option> 
                            <option value="Samaná">Samaná</option> 
                            <option value="San Cristóbal">San Cristóbal</option>
                            <option value="San José de Ocoa">San José de Ocoa</option> 
                            <option value="San Juan">San Juan</option> 
                            <option value="San Pedro de Macorís">San Pedro de Macorís</option>
                            <option value="Cotuí">Cotuí</option> 
                            <option value="Santiago">Santiago</option> 
                            <option value="Santiago Rodríguez">Santiago Rodríguez</option>
                            <option value="Santo Domingo">Santo Domingo</option> 
                            <option value="Valverde">Valverde</option>  
                        </select>
                        <i class="icon-location" aria-hidden="true"></i>
                    </div>
                    </div>
    
                
                    <div class="col-lg-6">
                    <h3 class="negro">Teléfono<span style="color:red">*</span></h3>
                    <div class="inputWithIcon jorge">
                        <input type="text" id="telefono" name="telefono" placeholder="Telefono" class="form-control" >
                        <i class="icon-phone" aria-hidden="true"></i>
                    </div>
                    </div>
    
                </div>
    
                <div class="row">

                    <div class="col-lg-6">
                    <h3 class="negro">Cedula<span style="color:red">*</span></h3>
                    <div class="inputWithIcon jorge">
                        <input type="text" id="cedula" name="cedula" placeholder="Cedula" class="form-control" >
                        <i class="icon-user-tie" aria-hidden="true"></i>
                    </div>
                    </div>
    
                    <div class="col-lg-6">
                    <h3 class="negro">Correo<span style="color:red">*</span></h3>
                    <div class="inputWithIcon jorge4">
                        <input type="email" id="correo" name="correo" placeholder="Correo" class="form-control" >
                        <i class="icon-email" aria-hidden="true"></i>
                    </div>
                    </div>
    
                </div>
    
                <div class="row">
    
                    <div class="col-lg-6">
                    <h3 class="negro">Contraseña<span style="color:red">*</span></h3>
                    <div class="inputWithIcon jorge5">
                        <input type="password" id="contrasena" name="contrasena" placeholder="Contraseña" class="form-control" >
                        <i class="icon-lock" aria-hidden="true"></i>
                    </div>
                    </div>
    
                
                    <div class="col-lg-6">
                    <h3 class="negro">Confirmar<span style="color:red">*</span></h3>
                    <div class="inputWithIcon jorge5">
                        <input type="password" id="confirmar" name="confirmar" placeholder="Confirmar" class="form-control" >
                        <i class="icon-key" aria-hidden="true"></i>
                    </div>
                    </div>
    
                </div>
                
                <br>

                <div class="col-lg-12">
                    <div class="col-lg-1">
                        <input type="checkbox" name="acepto" >
                    </div>

                    <div class="col-lg-6">
                        <a class="negro">Acepto ternimos y condiciones </a>
                    </div>
                </div>

                <div class="row">
    
                    <div class="col-lg-3">
                    <a id="check" class="btn btn-warning btn-block my-3" onclick="validar_registro()">
                        Registrar
                    </a>
                    
                    </div>
    
                    <div class="col-lg-3">
                    <a class="btn btn-danger btn-block my-3" onclick="cerrar()">
                        Cancelar
                    </a>
                    
                    </div>
    
                </div>
    
                </div>
                </form>
            </div>
            </div>
        </div>
        </div>
    
    `
  //  alert(administrador);
    var c = () => Array.from(document.getElementsByTagName("INPUT")).filter(cur => cur.type === 'checkbox' && cur.checked).length > 0;

    check.addEventListener("click", () => {
    if(!c()) { 
        alert("Debes aceptar ternimos y condiciones");
        //alertify.alert("HEADER","Esto es un mensaje").set('label', 'Aceptar'); 
    } 
    });

    $('#imagenPreview').html("<img src='/img/perfil.jpg' class='imgRedonda'/>"); 
    (function(){
        function filePreview(input){
            if(input.files && input.files[0]){
                var reader = new FileReader();
 
                reader.onload = function(e){
                    $('#imagenPreview').html("<img src='"+e.target.result+"' class='imgRedonda'/>");
                }
 
                reader.readAsDataURL(input.files[0]);
            }
        }
        $('#imagen').change(function(){
           filePreview(this);
        });
    }) ();


    abrir();

    var intro = document.getElementById('tamaño');
  
    intro.style.width="60%";
    intro.style.top="-15%";

    const nombre = document.querySelector('#nombre');
    const apellido = document.querySelector('#apellido');
    const telefono = document.querySelector('#telefono');

    nombre.addEventListener('keyup', (e) => {
        let valorInput = e.target.value;
    
        nombre.value = valorInput

        //Elimina los numero
        .replace(/([0-9])/g, '')
        //Elimina el primer espaciado
        .replace(/^\s+/,"");
        
    });    



    apellido.addEventListener('keyup', (e) => {
        let valorInput = e.target.value;
    
        apellido.value = valorInput
        .replace(/([0-9])/g, '')   
        .replace(/^\s+/,"");
        
    }); 

    telefono.addEventListener('keyup', (e) => {
        let valorInput = e.target.value;
    
        telefono.value = valorInput
        
        //Eliminamos espacios en blanco
        .replace(/\s/g, '')
        //Eliminar las letrar
        .replace(/\D/g, '')

        .trim();
        
    });
}

var prod2 = [];
var prod3 = [];
var n5=0;
function abrir_lista_producto(){
    prod3= [];
    const tamano = document.querySelector('#tamaño');
    tamano.innerHTML = `
        <span class="close1" onclick="span('${"true"}')">×</span>

        <div id="vent">
            
        </div>
    `

    const ventana = document.querySelector('#vent2');
    ventana.innerHTML = `
    <div class="row">
        <div class="col-lg-3">
            <h5 class="letra2">Lista De Productos</h5>
        </div>

        <div class="col-lg-3">
            <div class="cursor">
               <a onclick="producto_eliminado()"><img src="/img/trash.png" width="30" height="30"> </a>
            </div>
        </div>
        
        <div class="col-lg-3">
            <h5 class="letra2" style="text-align:right">Buscar:</h5>
            
        </div>

        <div class="col-lg-3">
            
            <input type="text" id="formulario2" class="form-control ">
        </div>

    </div> 
 
   
    <div id="lppresults">
    <table  class="table display DataTables" class="table table-bordered order-table" class="card-header" style="color: white">

        <tbody style="background-color:#ddac1b; color:black" align="center">
            <tr>
            <td>ID</td>
            <td>Nombre</td>
            <td>Precio</td>
            <td>Cantidad</td>
            <td>Modelo</td>
            <td>Imagen</td>
            <td>Opciones</td>
            </tr>
        </tbody>

        <tbody id="lista" style="color:black" align="center" class="card-header">

        </tbody>
         
        

    </table>
    </div>

    <section class="paginacion">
		 <div id="options2" class="filter-menu">
				<ul class="option-set" >
					<ul id="paginacion2" class="pagination pagination-md">
			            
					</ul>	
				</ul>
        </div>
    
    </section>
    `
    
    formulario2.addEventListener('keyup', filtrar2);
    filtrar2();
    
    var intro = document.getElementById('tamañ2');
    
    intro.style.width="65%";
    intro.style.top="-15%";
    body2='true';
 
    abrir2();



    var doc = new jsPDF();
    $('#generatereport').click(function() {
        doc.fromHTML($('#lppresults')[0], 15, 15, {
            width: 170
        }, function() {
            doc.save('sample-file.pdf');
        });
    });
}


//const boton = document.querySelector('#boton');


const filtrar2 = (llamar)=>{
    const lista = document.querySelector('#lista');

    const formulario2 =  document.querySelector('#formulario2');
        lista.innerHTML = '';
        prod2 = [];
        var modelo;
        const texto = formulario2.value.toLowerCase();

        for (var i=0; i<productos.length;i++) { 
                
                let id = productos[i].id.toString().toLowerCase();
                let nombre = productos[i].nombre.toLowerCase();
                let precio = productos[i].precio.toString().toLowerCase();
                let cantidad = productos[i].cantidad.toString().toLowerCase();
                for (n = 0; n < categoria.length; n++){
                    if(productos[i].id_modelo == categoria[n].id){
                         modelo = categoria[n].modelo.toLowerCase();
                    }
                }
                
        
                if( (id.indexOf(texto) !== -1) || (nombre.indexOf(texto) !== -1) || (precio.indexOf(texto) !== -1) || (cantidad.indexOf(texto) !== -1) || (modelo.indexOf(texto) !== -1) ){ 
                    
                    prod2[prod2.length] = { id: productos[i].id, nombre: productos[i].nombre, precio:productos[i].precio, cantidad: productos[i].cantidad, modelo: modelo, imagen: productos[i].imagen};
                    
                }
                    
        } 
        


    if( (llamar != 'edito') && (llamar != 'elimino') ){
        valor2(0);
		paginacion2();
	}
		


    const id = [...document.querySelectorAll('#options2 .selected')].map(el => el.id);
	if(llamar == 'edito'){
		paginacion2();
		paginacion_editar2(id); 
	}
    
	if(llamar == 'elimino'){
	    paginacion2();
        paginacion_eliminar2(id);
	}

}
    


function agregar_producto(){
    // var file = e.target.files[0];
    var form = new FormData(document.getElementById("frmSubir"));
    $.ajax({
        type:"POST",
        url:"/administrador/add",
        data: form,
        async: true,
        processData: false,
        contentType: false,
        success:function(producto){
                // console.log(producto);
                productos=producto;
                guardado();
                filtrar();
                // valor(0);
                // paginacion();
        }
        
    }); 
    // console.log(form);
}

var productos_eliminado=[];
function producto_eliminado(opcion){

    $.ajax({
        type:"POST",
        url:"/administrador/productos_eliminado",
        async: false,
        success:function(producto){
               //  console.log(producto);
               productos_eliminado=producto;

        }
        
    });
   
    prod_eliminado();
    
}

function prod_eliminado(){
    prod2= [];
    const tamano = document.querySelector('#tamaño');
    tamano.innerHTML = `
        <span class="close1" onclick="span('${"true"}')">×</span>

        <div id="vent">
            
        </div>
    `

    const ventana = document.querySelector('#vent2');
    ventana.innerHTML = `
    <ol class="breadcrumb">
        <li><a onclick="abrir_lista_producto()" class="cursor">Lista de producto</a></li>
        <li><a class="active" style="color:black; cursor:context-menu;">Productos Eliminado</a></li>
    </ol> 

    <div class="row">
        <div class="col-lg-6">
            <h5 class="letra2">Productos Eliminado</h5>
        </div>
        
        <div class="col-lg-3">
            <h5 class="letra2" style="text-align:right">Buscar:</h5>
            
        </div>

        <div class="col-lg-3">
            
            <input type="text" id="formulario3" class="form-control ">
        </div>

    </div> 

    <div id="lppresults">
    <table  class="table display DataTables" class="table table-bordered order-table" class="card-header" style="color: white">

        <tbody style="background-color:#ddac1b; color:black" align="center">
            <tr>  
            <td>ID</td>
            <td>Nombre</td>
            <td>Precio</td>
            <td>Cantidad</td>
            <td>Modelo</td>
            <td>Imagen</td>
            <td>Opciones</td>
            </tr>
        </tbody>

        <tbody id="lista" style="color:black" align="center" class="card-header">

        </tbody>
         
        

    </table>
    </div>

    <section class="paginacion">
		 <div id="options3" class="filter-menu">
				<ul class="option-set" >
					<ul id="paginacion3" class="pagination pagination-md">
			            
					</ul>	
				</ul>
        </div>
    
    </section>
    `
    
    formulario3.addEventListener('keyup', filtrar3);
    filtrar3();
    
    var intro = document.getElementById('tamañ2');
    
    intro.style.width="65%";
    intro.style.top="-15%";
    body2='true';
 
    abrir2();



    var doc = new jsPDF();
    $('#generatereport').click(function() {
        doc.fromHTML($('#lppresults')[0], 15, 15, {
            width: 170
        }, function() {
            doc.save('sample-file.pdf');
        });
    });
}


const filtrar3 = (llamar)=>{
    const lista = document.querySelector('#lista');

    const formulario3 =  document.querySelector('#formulario3');
        lista.innerHTML = '';
        prod3 = [];
        var modelo;

        const texto = formulario3.value.toLowerCase();

        for (var i=0; i<productos_eliminado.length;i++) { 
                
                let id = productos_eliminado[i].id.toString().toLowerCase();
                let nombre = productos_eliminado[i].nombre.toLowerCase();
                let precio = productos_eliminado[i].precio.toString().toLowerCase();
                let cantidad = productos_eliminado[i].cantidad.toString().toLowerCase();
                for (n = 0; n < categoria.length; n++){
                    if(productos_eliminado[i].id_modelo == categoria[n].id){
                         modelo = categoria[n].modelo.toLowerCase();
                    }
                }
                
        
                if( (id.indexOf(texto) !== -1) || (nombre.indexOf(texto) !== -1) || (precio.indexOf(texto) !== -1) || (cantidad.indexOf(texto) !== -1) || (modelo.indexOf(texto) !== -1) ){ 
                    
                    prod3[prod3.length] = { id: productos_eliminado[i].id, nombre: productos_eliminado[i].nombre, precio:productos_eliminado[i].precio, cantidad: productos_eliminado[i].cantidad, modelo: modelo, imagen: productos_eliminado[i].imagen};
                    
                }
                    
        } 
        


    if( (llamar != 'edito') && (llamar != 'activo') ){
        valor3(0);
		paginacion3();
	}
		


    const id = [...document.querySelectorAll('#options3 .selected')].map(el => el.id);
	if(llamar == 'edito'){
		paginacion3();
		paginacion_editar3(id); 
	}

	if(llamar == 'activo'){
	    paginacion3();
        paginacion_eliminar3(id);
        valor(0);
        paginacion();
	}

}

function editar_producto(id){
  
    var imagen = document.getElementById("imagen").value;

    if(imagen == ''){
        var datos=$('#editar_producto').serialize();
        
        $.ajax({
            type:"POST",
            url:"/administrador/edit/"+id,
            data: datos,
            async: false,
            success:function(producto){
                    // console.log(producto);
                   
                    productos= producto;
    
            }
            
        });
    }
    if(imagen != ''){
        var datos = new FormData(document.getElementById("editar_producto"));
        $.ajax({
            type:"POST",
            url:"/administrador/editar/"+id,
            data: datos,
            async: false,
            processData: false,
            contentType: false,
            success:function(producto){
                     
                productos= producto;
    
            }
           
            
        });
    }
    
    editado();
    if(prod2.length != 0){
        filtrar2('edito');
    }
    if(prod3.length != 0){
        producto_eliminado();
        filtrar3('edito');
    }
    filtrar('edito');
    
}

function modelo(){
    var datos=$('#agregar_modelo').serialize();
    // alert(datos);
    // alert(id_administrador);
  $(document).ready(function(){
      $.ajax({
          type:"POST",
          url:"/administrador/agregar_modelo",
          data: datos,
          success:function(categoria1){
              categoria=categoria1;
          }
      }); 
     
  });

  cerrar();
  guardado();
  
}

function eliminar_producto(id){
    $.ajax({
        type:"POST",
        url:"/administrador/delete",
        data: {id : id},
        async: false,
        success:function(producto){
                // console.log(producto);
                productos = producto;
               
            
        }
        
    }); 
    prod=productos;
    // console.log(prod);
    eliminado();
    if(prod2.length != 0){
        filtrar2('elimino');
    }
    filtrar('elimino');
}


function consulta_Real_Modelo(sele_modelo){
    
    const modelo = document.querySelector('#id_modelo');
    // <option disabled selected>Modelo</option>
    modelo.innerHTML += `
        <option disabled selected>Modelo</option>
    `;

    for (n = 0; n < categoria.length; n++){
    
            //  modelo = categoria[n].modelo.toLowerCase();
            if( sele_modelo != categoria[n].modelo.toLowerCase() ){
                modelo.innerHTML += `
                <option value=${categoria[n].id}>${categoria[n].modelo}</option> 
                `;
            }

            if(sele_modelo == categoria[n].modelo.toLowerCase() ){
                modelo.innerHTML += `
                <option value=${categoria[n].id} selected>${categoria[n].modelo}</option> 
                `;
            }
        
    }
                      
   
}

function activar_producto(id){
   
    $.ajax({
        type:"POST",
        url:"/administrador/activar_producto",
        data: {id : id},
        async: false,
        success:function(producto){
                // console.log(producto);
                prod = [];
                productos = [];
                productos_eliminado = [];
                var modelo;
                for (var n = 0; n < producto.length; n++) {
                    if(producto[n].estado == 'A'){

                        for (i = 0; i < categoria.length; i++){
                            if(producto[n].id_modelo == categoria[i].id){
                                 modelo = categoria[i].modelo.toLowerCase();
                            }
                        }

                        prod[prod.length] = { id: producto[n].id, nombre: producto[n].nombre, precio:producto[n].precio, cantidad: producto[n].cantidad, modelo: modelo, imagen:producto[n].imagen};
                        productos[productos.length] = producto[n];
                    }

                    if(producto[n].estado == 'I'){
                        productos_eliminado[productos_eliminado.length] = producto[n];
                       
                    }
                     
                }
            
        }
        
    }); 

    activado();
    filtrar3('activo');
    // valor(0);
    // paginacion();
}


var prod4 = [];
function abrir_lista_venta(){
    prod4= [];
    const tamano = document.querySelector('#tamaño');
    tamano.innerHTML = `
        <span class="close1" onclick="span('${"true"}')">×</span>

        <div id="vent">
            
        </div>
    `

    const ventana = document.querySelector('#vent2');
    ventana.innerHTML = `
    
    <div class="row">
        <div class="col-lg-3">
            <h5 class="letra2">Lista De Ventas</h5>
        </div>

        <div class="col-lg-3">
            <div class="cursor" style="position: relative; left: -58px;">
               <a onclick="vent_despachada()"><img src="/img/trash.png" width="30" height="30"> </a>
            </div>
        </div>
        
        <div class="col-lg-3">
            <h5 class="letra2" style="text-align:right">Buscar:</h5>
            
        </div>

        <div class="col-lg-3">
            
            <input type="text" id="formulario4" class="form-control ">
        </div>

    </div> 
    
    <div id="lppresults">
    <table  class="table display DataTables" class="table table-bordered order-table" class="card-header" style="color: white">

        <tbody style="background-color:#ddac1b; color:black" align="center">
            <tr>
            <td>Nombre</td>
            <td>Apellido</td>
            <td>Cedula</td>
            <td>Imagen</td>
            <td>Total</td>
            <td>Fecha</td>
            <td>Hora</td>
            <td>Opciones</td>
            </tr>
        </tbody>

        <tbody id="lista" style="color:black" align="center" class="card-header">

        </tbody>
         
        

    </table>
    </div>

    <section class="paginacion">
		 <div id="options2" class="filter-menu">
				<ul class="option-set" >
					<ul id="paginacion4" class="pagination pagination-md">
			            
					</ul>	
				</ul>
        </div>
    
    </section>
    `
    
    formulario4.addEventListener('keyup', filtrar4);
    filtrar4();
    
    var intro = document.getElementById('tamañ2');
    
    intro.style.width="65%";
    intro.style.top="-15%";
    body2='true';
 
    abrir2();



    var doc = new jsPDF();
    $('#generatereport').click(function() {
        doc.fromHTML($('#lppresults')[0], 15, 15, {
            width: 170
        }, function() {
            doc.save('sample-file.pdf');
        });
    });
}


//const boton = document.querySelector('#boton');

var prod4 =[];
var venta = [];
var products = [];
const filtrar4 = (llamar)=>{
    console.log('hola');
    $.ajax({
        type:"POST",
        url:"/administrador/venta",
        async: false,
        success:function(venta1){
               venta = venta1;
              
        }
        
    });
    $.ajax({
        type:"POST",
        url:"/administrador/todos_producto",
        async: false,
        success:function(products1){
              
               products = products1;
               
        }
        
    });
    const lista = document.querySelector('#lista');

    const formulario4 =  document.querySelector('#formulario4');
        lista.innerHTML = '';
        prod4 = [];
       
        const texto = formulario4.value.toLowerCase();
    
        for (var i=0; i<venta.length;i++) { 
                    
                let nombre = venta[i].nombre.toLowerCase();
                let apellido = venta[i].apellido.toLowerCase();
                let cedula = venta[i].cedula.toString().toLowerCase();
                let total = venta[i].total.toString().toLowerCase();
                let fecha_hora = venta[i].fecha_hora.split(" ");
              
              
                
        
                if( (nombre.indexOf(texto) !== -1) || (apellido.indexOf(texto) !== -1) || (cedula.indexOf(texto) !== -1) || (total.indexOf(texto) !== -1) || (fecha_hora[0].indexOf(texto) !== -1) || (fecha_hora[1].indexOf(texto) !== -1) ){ 
                    
                    prod4[prod4.length] = venta[i];
                   
                    
                }
                    
        } 
        


    if( (llamar != 'edito') && (llamar != 'elimino') ){
        console.log('hola');
        valor4(0);
		paginacion4();
	}
		


    const id = [...document.querySelectorAll('#options2 .selected')].map(el => el.id);
	if(llamar == 'edito'){
		paginacion4();
		paginacion_editar4(id); 
	}

	if(llamar == 'elimino'){
	    paginacion4();
        paginacion_eliminar4(id);
	}

}


function abrir_factura(id_cliente, nombre, apellido, direccion, telefono, total, fecha_hora){
    var datos = [];

    $.ajax({
        type:"POST",
        url:"/administrador/datos_factura",
        data: {id_cliente: id_cliente, fecha_hora: fecha_hora},
        async: false,
        success:function(datos1){
               datos = datos1;
                
        }
        
    });
    // <button id="generatereport">Download Report</button> 
    let fecha_hora1 = fecha_hora.split(" ");
    const ventana = document.querySelector('#vent');
    ventana.innerHTML = `

    <div id="lppresults">
    <h3 style="color:black; text-align: center;">Super Gato</h3>
    <p class="encambezado">Santo Domingo, Km 11/2</p>
    <p class="encambezado" style="top: -51px">Tel(s):809-573-3711</p>
    <p class="encambezado" style="top: -72px">RNC: 103003133</p>
    <h5 class="datos" style="top: 170px; " >Nombre:</h5>
    <h5 class="datos" style="top: 189px; ">Direccion:</h5>
    <h5 class="datos" style="top: 208px; ">Telefono:</h5>

    <h5 class="datos" style="top: 170px; left: 105px; font-size: 14px;">${nombre +" "+ apellido}</h5>
    <h5 class="datos" style="top: 189px; left: 125px; font-size: 14px;">${direccion}</h5>
    <h5 class="datos" style="top: 208px; left: 123px; font-size: 14px;">${telefono}</h5>

    <h5 class="datos" style="top: 170px; left: 365px; ">Fecha:</h5>
    <h5 class="datos" style="top: 189px; left: 365px; ">Hora:</h5>

    <h5 class="datos" style="top: 170px; left: 430px; font-size: 16px;">${fecha_hora1[0]}</h5>
    <h5 class="datos" style="top: 189px; left: 423px; font-size: 16px;">${fecha_hora1[1]}</h5>
    <br/>
    <table class="table display DataTables" >

       <tbody style="background-color:#ddac1b; color:black" align="center">
           
            <td>Cant.</td>  
            <td>Nombre</td>
            <td>Precio</td>
            <td>Modelo</td>
            <td>Importe</td>
           
       </tbody>

        <tbody id="cuerpo" style="color:black" align="center" class="card-header">

        </tbody>
        
        
        

    </table>

    <p class="piez">Gracias por su compra!!</p>
    </div>
    `

    const cuerpo = document.querySelector('#cuerpo');
    var modelo;
    for (var i = 0; i < datos.length; i++){ 

        for (n=0;n<products.length;n++) {


            if(datos[i].id_producto == products[n].id){

                for (p = 0; p < categoria.length; p++){
                    
                    if(products[n].id_modelo == categoria[p].id){
        
                         modelo = categoria[p].modelo.toLowerCase();
                    }
                }
    

                cuerpo.innerHTML += `
                <td>${datos[i].unidad}</td> <td>${products[n].nombre}</td> <td>${datos[i].precio}</td>
                <td>${modelo}</td> <td>${datos[i].importe}</td>
                
                ` 
            }
            
        }
    } 
    
    cuerpo.innerHTML += `
    <tbody style="align='center'">
      <th></th> <th></th> <th></th> <th class="total5">Sub-Total:</th> <th class="total6">${total}</th>
    </tbody>
    <tbody>
      <th></th> <th></th> <th></th> <th class="total5">DESCUENTO:</th> <th class="total6">0.00</th>
    </tbody>
    <tbody>
       <th></th> <th></th> <th></th> <th class="total5">ITBIS:</th> <th class="total6">0.00</th>
    </tbody>
    <tbody>
       <th></th> <th></th> <th></th> <th class="total5">TOTAL:</th> <th class="total6">${total}</th>
    </tbody>
    <tbody>
       <th></th> <th></th> <th></th> <th ></th> <th ></th>
    </tbody>
    
    `;
    
    abrir();
    var doc = new jsPDF();
    $('#generatereport').click(function() {
        doc.fromHTML($('#lppresults')[0], 15, 15, {
            width: 170
        }, function() {
            doc.save('sample-file.pdf');
        });
    });

    var intro = document.getElementById('tamaño');
    
    intro.style.width="40%";
    intro.style.top="-12%";
    
}





function factura_despachada(id_cliente, fecha_hora){

    $.ajax({
        type:"POST",
        url:"/administrador/factura_despachada",
        data: {id_cliente : id_cliente, fecha_hora : fecha_hora},
        async: false,
        success:function(venta1){
               //  console.log(producto);
               venta = venta1;

        }
        
    });
    
    filtrar4('elimino');;
    
}





function vent_despachada(){
    // prod2= [];
    const tamano = document.querySelector('#tamaño');
    tamano.innerHTML = `
        <span class="close1" onclick="span('${"true"}')">×</span>

        <div id="vent">
            
        </div>
    `

    const ventana = document.querySelector('#vent2');

    ventana.innerHTML = `
    <ol class="breadcrumb">
        <li><a onclick="abrir_lista_venta()" class="cursor">Lista de ventas</a></li>
        <li><a class="active" style="color:black; cursor:context-menu;">Venta despachada</a></li>
    </ol>
    
    <div class="row">
        <div class="col-lg-6">
            <h5 class="letra2">Lista De Despachada</h5>
        </div>
  
        <div class="col-lg-3">
            <h5 class="letra2" style="text-align:right">Buscar:</h5>
            
        </div>

        <div class="col-lg-3">
            
            <input type="text" id="formulario4" class="form-control ">
        </div>

    </div> 
    
    <div id="lppresults">
    <table  class="table display DataTables" class="table table-bordered order-table" class="card-header" style="color: white">

        <tbody style="background-color:#ddac1b; color:black" align="center">
            <tr>
            <td>Nombre</td>
            <td>Apellido</td>
            <td>Cedula</td>
            <td>Imagen</td>
            <td>Total</td>
            <td>Fecha</td>
            <td>Hora</td>
            <td>Opciones</td>
            </tr>
        </tbody>

        <tbody id="lista" style="color:black" align="center" class="card-header">

        </tbody>
         
        

    </table>
    </div>

    <section class="paginacion">
		 <div id="options2" class="filter-menu">
				<ul class="option-set" >
					<ul id="paginacion4" class="pagination pagination-md">
			            
					</ul>	
				</ul>
        </div>
    
    </section>
    `

    formulario4.addEventListener('keyup', filtrar04);
    filtrar04();
    
    var intro = document.getElementById('tamañ2');
    
    intro.style.width="65%";
    intro.style.top="-15%";
    body2='true';
 
    abrir2();
}  


var venta_desp = [];
const filtrar04 = (llamar)=>{
    $.ajax({
        type:"POST",
        url:"/administrador/vent_despachada",
        async: false,
        success:function(venta2){
               //  console.log(producto);
               venta_desp=venta2;

        }
        
    });
   
    const lista = document.querySelector('#lista');

    const formulario4 =  document.querySelector('#formulario4');
        lista.innerHTML = '';
        prod4 = [];
       
        const texto = formulario4.value.toLowerCase();
    
        for (var i=0; i<venta_desp.length;i++) { 
                    
                let nombre = venta_desp[i].nombre.toLowerCase();
                let apellido = venta_desp[i].apellido.toLowerCase();
                let cedula = venta_desp[i].cedula.toString().toLowerCase();
                let total = venta_desp[i].total.toString().toLowerCase();
                let fecha_hora = venta_desp[i].fecha_hora.split(" ");
              
              
                
        
                if( (nombre.indexOf(texto) !== -1) || (apellido.indexOf(texto) !== -1) || (cedula.indexOf(texto) !== -1) || (total.indexOf(texto) !== -1) || (fecha_hora[0].indexOf(texto) !== -1) || (fecha_hora[1].indexOf(texto) !== -1) ){ 
                    
                    prod4[prod4.length] = venta_desp[i];
                   
                    
                }
                    
        } 
        


    if( (llamar != 'edito') && (llamar != 'elimino') ){
        valor04(0);
		paginacion4();
	}
		


    const id = [...document.querySelectorAll('#options2 .selected')].map(el => el.id);
	if(llamar == 'edito'){
		paginacion4();
		paginacion_editar4(id); 
	}

	if(llamar == 'elimino'){
	    paginacion4();
        paginacion_eliminar4(id,2);
	}

}

function recuperar_venta(id_cliente, fecha_hora){

    $.ajax({
        type:"POST",
        url:"/administrador/recuperar_venta",
        data: {id_cliente : id_cliente, fecha_hora : fecha_hora},
        async: false,
        success:function(venta2){
               //  console.log(producto);
               venta_desp = venta2;

        }
        
    });
    
    filtrar04('elimino');
    
}

///////////////////////////////////////////
var prod5 = [];
function abrir_lista_cliente(){
    prod4= [];
    const tamano = document.querySelector('#tamaño');
    tamano.innerHTML = `
        <span class="close1" onclick="span('${"true"}')">×</span>

        <div id="vent">
            
        </div>
    `

    const ventana = document.querySelector('#vent2');
    ventana.innerHTML = `
    
    <div class="row">
        <div class="col-lg-3">
            <h5 class="letra2">Lista De Clientes</h5>
        </div>

        <div class="col-lg-3">
            <div class="cursor" style="position: relative; left: -58px;">
               <a onclick="abrir_cliente_eliminado()"><img src="/img/trash.png" width="30" height="30"> </a>
            </div>
        </div>
        
        <div class="col-lg-3">
            <h5 class="letra2" style="text-align:right">Buscar:</h5>
            
        </div>

        <div class="col-lg-3">
            
            <input type="text" id="formulario4" class="form-control ">
        </div>

    </div> 
    
    <div id="lppresults">
    <table  class="table display DataTables" class="table table-bordered order-table" class="card-header" style="color: white">

        <tbody style="background-color:#ddac1b; color:black" align="center">
            <tr>
            <td>Nombre</td>
            <td>Apellido</td>
            <td>Sexo</td>
            <td>Direccion</td>
            <td>Telefono</td>
            <td>Cedula</td>
            <td>Correo</td>
            <td>Imagen</td>
            <td>Opciones</td>
            </tr>
        </tbody>

        <tbody id="lista" style="color:black" align="center" class="card-header">

        </tbody>
         
        

    </table>
    </div>

    <section class="paginacion">
		 <div id="options2" class="filter-menu">
				<ul class="option-set" >
					<ul id="paginacion4" class="pagination pagination-md">
			            
					</ul>	
				</ul>
        </div>
    
    </section>
    `
    
    formulario4.addEventListener('keyup', filtrar5);
    filtrar5();
    
    var intro = document.getElementById('tamañ2');
    
    intro.style.width="80%";
    intro.style.top="-15%";
    body2='true';
 
    abrir2();



    var doc = new jsPDF();
    $('#generatereport').click(function() {
        doc.fromHTML($('#lppresults')[0], 15, 15, {
            width: 170
        }, function() {
            doc.save('sample-file.pdf');
        });
    });
}


//const boton = document.querySelector('#boton');


var cliente = [];
var prod5 = [];
const filtrar5 = (llamar)=>{
    if(llamar != 'elimino'){
        $.ajax({
            type:"POST",
            url:"/administrador/lista_cliente",
            async: false,
            success:function(cliente1){
                cliente = cliente1;
                
            }
            
        });
    }
    
    const lista = document.querySelector('#lista');

    const formulario4 =  document.querySelector('#formulario4');
        lista.innerHTML = '';
        prod5 = [];
       
        const texto = formulario4.value.toLowerCase();
    
        for (var i=0; i<cliente.length;i++) { 
                    
                let nombre = cliente[i].nombre.toLowerCase();
                let apellido = cliente[i].apellido.toLowerCase();
                let sexo = cliente[i].sexo.toLowerCase();
                let nacimiento = cliente[i].nacimiento.toLowerCase();
                let direccion = cliente[i].direccion.toLowerCase();
                let telefono = cliente[i].telefono.toLowerCase();
                let cedula = cliente[i].cedula.toString().toLowerCase();
                let correo = cliente[i].correo.toString().toLowerCase();
               
              
              
                
        
                if( (nombre.indexOf(texto) !== -1) || (apellido.indexOf(texto) !== -1) ||
                 (sexo.indexOf(texto) !== -1) || (nacimiento.indexOf(texto) !== -1) || 
                 (direccion.indexOf(texto) !== -1) || (telefono.indexOf(texto) !== -1) ||
                 (cedula.indexOf(texto) !== -1) || (correo.indexOf(texto) !== -1) ){ 
                    
                    prod5[prod5.length] = cliente[i];
                   
                    
                }
                    
        } 
        


    if( (llamar != 'edito') && (llamar != 'elimino') ){
        valor5(0);
		paginacion4();
	}
		


    const id = [...document.querySelectorAll('#options2 .selected')].map(el => el.id);
	if(llamar == 'edito'){
		paginacion4();
		paginacion_editar5(id); 
	}

	if(llamar == 'elimino'){
        console.log('hola');
	    paginacion4();
        paginacion_eliminar5(id);
	}

}


function eliminar_cliente(id){
    $.ajax({
        type:"POST",
        url:"/administrador/eliminar_cliente",
        data: {id : id},
        async: false,
        success:function(cliente1){
               //  console.log(producto);
            cliente = cliente1;
            filtrar5('elimino');

        }
        
    });
    
   
}

function abrir_cliente_eliminado(){
    prod5= [];
    const tamano = document.querySelector('#tamaño');
    tamano.innerHTML = `
        <span class="close1" onclick="span('${"true"}')">×</span>

        <div id="vent">
            
        </div>
    `

    const ventana = document.querySelector('#vent2');
    ventana.innerHTML = `
    <ol class="breadcrumb">
        <li><a onclick="abrir_lista_cliente()" class="cursor">Lista de cliente</a></li>
        <li><a class="active" style="color:black; cursor:context-menu;">Cliente eliminado</a></li>
    </ol>
    
    <div class="row">
        <div class="col-lg-6">
            <h5 class="letra2">Cliente Eliminado</h5>
        </div>

        <div class="col-lg-3">
            <h5 class="letra2" style="text-align:right">Buscar:</h5>
            
        </div>

        <div class="col-lg-3">
            
            <input type="text" id="formulario4" class="form-control ">
        </div>

    </div> 
    
    <div id="lppresults">
    <table  class="table display DataTables" class="table table-bordered order-table" class="card-header" style="color: white">

        <tbody style="background-color:#ddac1b; color:black" align="center">
            <tr>
            <td>Nombre</td>
            <td>Apellido</td>
            <td>Sexo</td>
            <td>Direccion</td>
            <td>Telefono</td>
            <td>Cedula</td>
            <td>Correo</td>
            <td>Imagen</td>
            <td>Opciones</td>
            </tr>
        </tbody>

        <tbody id="lista" style="color:black" align="center" class="card-header">

        </tbody>
         
        

    </table>
    </div>

    <section class="paginacion">
		 <div id="options2" class="filter-menu">
				<ul class="option-set" >
					<ul id="paginacion4" class="pagination pagination-md">
			            
					</ul>	
				</ul>
        </div>
    
    </section>
    `
    
    formulario4.addEventListener('keyup', filtrar05);
    filtrar05();
    
    var intro = document.getElementById('tamañ2');
    
    intro.style.width="80%";
    intro.style.top="-15%";
    body2='true';
 
    abrir2();

}


//const boton = document.querySelector('#boton');


const filtrar05 = (llamar)=>{
    if(llamar != 'activo'){
        $.ajax({
            type:"POST",
            url:"/administrador/cliente_eliminado",
            async: false,
            success:function(cliente1){
                cliente = cliente1;
                
            }
            
        });
    }
    
    const lista = document.querySelector('#lista');

    const formulario4 =  document.querySelector('#formulario4');
        lista.innerHTML = '';
        prod5 = [];
       
        const texto = formulario4.value.toLowerCase();
    
        for (var i=0; i<cliente.length;i++) { 
                    
                let nombre = cliente[i].nombre.toLowerCase();
                let apellido = cliente[i].apellido.toLowerCase();
                let sexo = cliente[i].sexo.toLowerCase();
                let nacimiento = cliente[i].nacimiento.toLowerCase();
                let direccion = cliente[i].direccion.toLowerCase();
                let telefono = cliente[i].telefono.toLowerCase();
                let cedula = cliente[i].cedula.toString().toLowerCase();
                let correo = cliente[i].correo.toString().toLowerCase();
               
              
              
                
        
                if( (nombre.indexOf(texto) !== -1) || (apellido.indexOf(texto) !== -1) ||
                 (sexo.indexOf(texto) !== -1) || (nacimiento.indexOf(texto) !== -1) || 
                 (direccion.indexOf(texto) !== -1) || (telefono.indexOf(texto) !== -1) ||
                 (cedula.indexOf(texto) !== -1) || (correo.indexOf(texto) !== -1) ){ 
                    
                    prod5[prod5.length] = cliente[i];
                   
                    
                }
                    
        } 
        


    if( (llamar != 'edito') && (llamar != 'activo') ){
        valor05(0);
		paginacion4();
	}
		


    const id = [...document.querySelectorAll('#options2 .selected')].map(el => el.id);
	if(llamar == 'edito'){
		paginacion4();
		paginacion_editar5(id); 
	}

	if(llamar == 'activo'){
	    paginacion4();
        paginacion_eliminar5(id, 2);
	}

}

function activar_cliente(id){
    $.ajax({
        type:"POST",
        url:"/administrador/activar_cliente",
        data: {id : id},
        async: false,
        success:function(cliente1){
               //  console.log(producto);
            cliente = cliente1;
            filtrar05('activo');

        }
        
    });
    
   
}