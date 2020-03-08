// var prod = [];
// var n10 = 0;
const formulario =  document.querySelector('#formulario');
       
const filtrar = (llamar)=>{
   
        prod = [];
        n10=0;
    
        const texto = formulario.value.toLowerCase();

        for (var i=0; i<productos.length;i++) { 
                
                let id = productos[i].id.toString().toLowerCase();
                let nombre = productos[i].nombre.toLowerCase();
                let precio = productos[i].precio.toString().toLowerCase();
                let cantidad = productos[i].cantidad.toString().toLowerCase();
                let modelo = productos[i].modelo.toLowerCase();
                
        
                if( (id.indexOf(texto) !== -1) || (nombre.indexOf(texto) !== -1) || (precio.indexOf(texto) !== -1) || (cantidad.indexOf(texto) !== -1) || (modelo.indexOf(texto) !== -1) ){ 
                    
                    prod[n10] = { id: productos[i].id, nombre: productos[i].nombre, precio:productos[i].precio, cantidad: productos[i].cantidad, modelo: productos[i].modelo, imagen: productos[i].imagen};
                    n10 +=1;
                    
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
                       <div class="col-md-8">

                         <div class="col-md-6">
                            <h3 style="color:black">Nombre<span style="color:red">*</span></h3>
                            <div class="inputWithIcon jorge">
                            <input type="text" id="nombre" name="nombre" placeholder="Nombre del producto" class="form-control" required autofocus>
                            <i class="icon-pencil" aria-hidden="true"></i>
                            </div>
                        </div>
                    
                        <div class="col-md-6">
                            <h3 style="color:black">Precio<span style="color:red">*</span></h3>
                            <div class="inputWithIcon jorge">
                            <input type="text" id="precio" name="precio" placeholder="RD$0.00" class="form-control" required >
                            <i class="icon-attach_money" aria-hidden="true"></i>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <h3 style="color:black">Modelo<span style="color:red">*</span></h3>
                            <div class="inputWithIcon jorge2">
                                <select name="modelo" id="selectModelo" placeholder="Modelo" class="form-control" multiple>
                                    <option disabled selected>Modelo</option>
                                </select> 
                                <i class="icon-attach_money" aria-hidden="true"></i>
                            </div>
                        </div>


                        <div class="col-md-6">
                            <h3 style="color:black">Cantidad<span style="color:red">*</span></h3>
                            <div class="inputWithIcon jorge">
                            <input type="text" id="cantidad" name="cantidad" placeholder="Cantidad" class="form-control" required>
                            <i class="icon-attach_money" aria-hidden="true"></i>
                            </div>
                        </div> 

                        </div>

                        <div class="col-md-4">
                        <div class="col-md-12">
                            <h3 style="color:black">Imagen<span style="color:red">*</span></h3>
                            <div class="inputWithIcon jorge6">
                            <input type="file" name="imagen" id="imagen" class="form-control" required>
                            <i class="icon-camera" aria-hidden="true"></i>
                            </div>
                        </div>
                         
                        <div class="col-md-12">
                             <br>
                               
                            <table>
                                <tr><td><div id="imagenPreview" class="imagen" style="width:310px; height:210px; border:dashed black" > </div></td></tr>
                                
                                
                             

                            </table> 
                           
                        </div>

                        </div>

                       
                    </div>

                    <br>
                   
                    <div class="row">
                        <div class="col-lg-8" style="text-align:right">
                            <div class="col-lg-3" >
                                <a class="btn btn-warning btn-block" onclick="validar_formulario()" >Guardar</a>
                            </div>

                            <div class="col-lg-3" style="text-align:right">
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
    
    intro.style.width="75%";
    intro.style.top="-12%";
  


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
                       <div class="col-md-8">

                         <div class="col-md-6">
                            <h3 style="color:black">Nombre<span style="color:red">*</span></h3>
                            <div class="inputWithIcon jorge">
                            <input type="text" id="nombre" name="nombre" placeholder="Nombre del producto" class="form-control" value="${nombre}" required autofocus>
                            <i class="icon-pencil" aria-hidden="true"></i>
                            </div>
                        </div>
                    
                        <div class="col-md-6">
                            <h3 style="color:black">Precio<span style="color:red">*</span></h3>
                            <div class="inputWithIcon jorge">
                            <input type="text" id="precio" name="precio" placeholder="RD$0.00" class="form-control" value="${precio}" required autofocus>
                            <i class="icon-attach_money" aria-hidden="true"></i>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <h3 style="color:black">Modelo<span style="color:red">*</span></h3>
                            <div class="inputWithIcon jorge2">
                                <select name="modelo" id="selectModelo" placeholder="Modelo" class="form-control" value="${modelo}" multiple>
                                    <option disabled>Modelo</option>
                                </select> 
                                <i class="icon-attach_money" aria-hidden="true"></i>
                            </div>
                        </div>


                        <div class="col-md-6">
                            <h3 style="color:black">Cantidad<span style="color:red">*</span></h3>
                            <div class="inputWithIcon jorge">
                            <input type="text" id="cantidad" name="cantidad" placeholder="Cantidad" class="form-control" value="${cantidad}" required>
                            <i class="icon-attach_money" aria-hidden="true"></i>
                            </div>
                        </div> 

                        </div>

                        <div class="col-md-4">
                        <div class="col-md-12">
                            <h3 style="color:black">Imagen<span style="color:red">*</span></h3>
                            <div class="inputWithIcon jorge6">
                            <input type="file" name="imagen" id="imagen" class="form-control" value="${imagen}" required>
                            <i class="icon-camera" aria-hidden="true"></i>
                            </div>
                        </div>
                         
                        <div class="col-md-12">
                             <br>
                               
                            <table>
                                <tr><td><div id="imagenPreview" class="imagen" style="width:310px; height:210px; border:dashed black" > </div></td></tr>
                                
                                
                             

                            </table> 
                           
                        </div>

                        </div>

                       
                    </div>

                    <br>
                   
                    <div class="row">
                        <div class="col-lg-8" style="text-align:right">
                            <div class="col-lg-3" id="cambiar">
                                <a class="btn btn-warning btn-block" onclick="validar_formulario_editar(${id}, '${opcion}')" >Guardar</a>
                            </div>

                            <div class="col-lg-3" style="text-align:right">
                                <a class="btn btn-danger btn-block" onclick="cerrar('${opcion}')">Cancelar</a>
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

   consulta_Real_Modelo();
 
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
                
                <div class="row">
                    <div class="col-lg-6">
                        <a class="btn btn-warning btn-block" onclick="modelo()"> Guardar </a>
                    </div> 
                    <div class="col-lg-6">
                        <a class="btn btn-danger btn-block" onclick="cerrar()">Cancelar</a>
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
        <div class="col-md-10 mx-auto">
            <div class="card ">
            <ol class="breadcrumb">
                <li><a href="/administrador">Inicio</a></li>
                <li><a class="active" style="color:black">Registrar Cliente</a></li>
            </ol>
            <div class="card-header">
                <h2 align="center" style="color:black">Registrar Cliente</h2>
            </div>
            <div class="card-body">
                <form id="cliente_signup" onsubmit="return validar_administrador();">
    
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
                    <h3 class="negro">Correo<span style="color:red">*</span></h3>
                    <div class="inputWithIcon jorge4">
                        <input type="email" id="correo" name="correo" placeholder="Correo" class="form-control" >
                        <i class="icon-email" aria-hidden="true"></i>
                    </div>
                    </div>
    
                
                    <div class="col-lg-6">
                    <h3 class="negro">Usuario<span style="color:red">*</span></h3>
                    <div class="inputWithIcon jorge">
                        <input type="text" id="usuario" name="usuario" placeholder="Usuario" class="form-control" >
                        <i class="icon-user-tie" aria-hidden="true"></i>
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
                    <a id="check" class="btn btn-warning btn-block my-3" onclick="validar_registro(07)">
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


    abrir();

    var intro = document.getElementById('tamaño');

    intro.style.width="65%";
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
        <div class="col-md-10 mx-auto">
            <div class="card ">
            <ol class="breadcrumb">
                <li><a href="/administrador">Inicio</a></li>
                <li><a class="active" style="color:black">Registrar Administrador</a></li>
            </ol>
            <div class="card-header">
                <h2 align="center" style="color:black">Registrar Administrador</h2>
            </div>
            <div class="card-body">
                <form id="administrador_signup" onsubmit="return validar_administrador();">
    
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
                    <h3 class="negro">Correo<span style="color:red">*</span></h3>
                    <div class="inputWithIcon jorge4">
                        <input type="email" id="correo" name="correo" placeholder="Correo" class="form-control" >
                        <i class="icon-email" aria-hidden="true"></i>
                    </div>
                    </div>
    
                
                    <div class="col-lg-6">
                    <h3 class="negro">Usuario<span style="color:red">*</span></h3>
                    <div class="inputWithIcon jorge">
                        <input type="text" id="usuario" name="usuario" placeholder="Usuario" class="form-control" >
                        <i class="icon-user-tie" aria-hidden="true"></i>
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
                    <a id="check" class="btn btn-warning btn-block my-3" onclick="validar_registro(31)">
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


    abrir();

    var intro = document.getElementById('tamaño');
  
    intro.style.width="65%";
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
        <div class="col-lg-6">
            <h5 style="color:black">Lista De Productos</h5>
        </div>
        
        <div class="col-lg-3">
            <h5 style="color:black; text-align:right">Buscar:</h5>
            
        </div>

        <div class="col-lg-3">
            
            <input type="text" id="formulario2" class="form-control ">
        </div>

    </div> 
    <button id="generatereport">Download Report</button> 
    <div>
        <a onclick="producto_eliminado('${"true"}')"><img src="/img/trash.png" width="30" height="30"> </a>
     </div>
    <div id="lppresults">
    <table  class="table display DataTables" class="table table-bordered order-table" class="card-header" style="color: white">

        <thead style="background-color:#ddac1b; color:black" align="center">
            <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Modelo</th>
            <th>Imagen</th>
            <th>Opciones</th>
            </tr>
        </thead>

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
    
    var intro = document.getElementById('tamaño2');
    
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
        n5=0;
        
        const texto = formulario2.value.toLowerCase();

        for (var i=0; i<productos.length;i++) { 
                
                let id = productos[i].id.toString().toLowerCase();
                let nombre = productos[i].nombre.toLowerCase();
                let precio = productos[i].precio.toString().toLowerCase();
                let cantidad = productos[i].cantidad.toString().toLowerCase();
                let modelo = productos[i].modelo.toLowerCase();
                
        
                if( (id.indexOf(texto) !== -1) || (nombre.indexOf(texto) !== -1) || (precio.indexOf(texto) !== -1) || (cantidad.indexOf(texto) !== -1) || (modelo.indexOf(texto) !== -1) ){ 
                    
                    prod2[n5] = { id: productos[i].id, nombre: productos[i].nombre, precio:productos[i].precio, cantidad: productos[i].cantidad, modelo: productos[i].modelo, imagen: productos[i].imagen};
                    n5 +=1;
                    
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
                for (var n = 0; n < producto.length; n++) {
                     productos[n] = { id: producto[n].id, nombre: producto[n].nombre, precio:producto[n].precio, cantidad: producto[n].cantidad, modelo: producto[n].modelo, imagen:producto[n].imagen};
                }
                prod=productos;
                guardado();
                valor(0);
                paginacion();
        }
        
    }); 
    // console.log(form);
}

var productos_eliminado=[];
function producto_eliminado(opcion){
    productos_eliminado=[];
    $.ajax({
        type:"POST",
        url:"/administrador/productos_eliminado",
        async: false,
        success:function(producto){
               //  console.log(producto);
               
                for (var n = 0; n < producto.length; n++) {
                     productos_eliminado[n] = { id: producto[n].id, nombre: producto[n].nombre, precio:producto[n].precio, cantidad: producto[n].cantidad, modelo: producto[n].modelo, imagen:producto[n].imagen};
                }

        }
        
    });
    if(opcion == 'true'){
        prod_eliminado();
    }
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
        <li><a onclick="abrir_lista_producto()">Lista de producto</a></li>
        <li><a class="active" style="color:black">Productos Eliminado</a></li>
    </ol> 

    <div class="row">
        <div class="col-lg-6">
            <h5 style="color:black">Productos Eliminado</h5>
        </div>
        
        <div class="col-lg-3">
            <h5 style="color:black; text-align:right">Buscar:</h5>
            
        </div>

        <div class="col-lg-3">
            
            <input type="text" id="formulario3" class="form-control ">
        </div>

    </div> 
    <button id="generatereport">Download Report</button> 

    <div id="lppresults">
    <table  class="table display DataTables" class="table table-bordered order-table" class="card-header" style="color: white">

        <thead style="background-color:#ddac1b; color:black" align="center">
            <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Modelo</th>
            <th>Imagen</th>
            <th>Opciones</th>
            </tr>
        </thead>

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
    
    var intro = document.getElementById('tamaño2');
    
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
        n5=0;
        const texto = formulario3.value.toLowerCase();

        for (var i=0; i<productos_eliminado.length;i++) { 
                
                let id = productos_eliminado[i].id.toString().toLowerCase();
                let nombre = productos_eliminado[i].nombre.toLowerCase();
                let precio = productos_eliminado[i].precio.toString().toLowerCase();
                let cantidad = productos_eliminado[i].cantidad.toString().toLowerCase();
                let modelo = productos_eliminado[i].modelo.toLowerCase();
                
        
                if( (id.indexOf(texto) !== -1) || (nombre.indexOf(texto) !== -1) || (precio.indexOf(texto) !== -1) || (cantidad.indexOf(texto) !== -1) || (modelo.indexOf(texto) !== -1) ){ 
                    
                    prod3[n5] = { id: productos_eliminado[i].id, nombre: productos_eliminado[i].nombre, precio:productos_eliminado[i].precio, cantidad: productos_eliminado[i].cantidad, modelo: productos_eliminado[i].modelo, imagen: productos_eliminado[i].imagen};
                    n5 +=1;
                    
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
                   
                    for (var n = 0; n < producto.length; n++) {
                         productos[n] = { id: producto[n].id, nombre: producto[n].nombre, precio:producto[n].precio, cantidad: producto[n].cantidad, modelo: producto[n].modelo, imagen:producto[n].imagen};
                    }
    
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
                     
                    for (var n = 0; n < producto.length; n++) {
                         productos[n] = { id: producto[n].id, nombre: producto[n].nombre, precio:producto[n].precio, cantidad: producto[n].cantidad, modelo: producto[n].modelo, imagen:producto[n].imagen};
                         
                    }
    
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
          url:"/agregar_modelo/"+id_administrador,
          data: datos,
          success:function(r){
              if(r==1){
                  alert("agregado con exito");
              }else{
                  alert("Fallo del servidor");
              }
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
                productos = [];
                for (var n = 0; n < producto.length; n++) {
                     productos[n] = { id: producto[n].id, nombre: producto[n].nombre, precio:producto[n].precio, cantidad: producto[n].cantidad, modelo: producto[n].modelo, imagen:producto[n].imagen};
                }
            
        }
        
    }); 
    prod=productos;
    eliminado();
    if(prod2.length != 0){
        filtrar2('elimino');
    }
    filtrar('elimino');
}


function consulta_Real_Modelo(){
    $.ajax({
        type:"POST",
        url:"/administrador/modelo",
        async: true,
        success:function(modelo){
                // console.log(modelo);
                const modelo1 = document.querySelector('#selectModelo');

                for(let n = modelo.length-1; n >= 0; n--) {
                    let opcion = document.createElement('option');
                    opcion.value = modelo[n].modelo;
                    opcion.innerText = modelo[n].modelo;
                    modelo1.appendChild(opcion);
                }
                
        }
        
    });

   
}

function agregar_administrador(){
    var datos=$('#administrador_signup').serialize();
        
    $.ajax({
        type:"POST",
        url:"administrador_signup",
        data: datos,
        async: true,
        success:function(administrador){
                console.log(administrador);
                
        }
        
    });
    cerrar();
    guardado();
}

function agregar_cliente(){
    var datos=$('#cliente_signup').serialize();
        
    $.ajax({
        type:"POST",
        url:"cliente_signup",
        data: datos,
        async: true,
        success:function(administrador){
                console.log(administrador);
                
        }
        
    });
    cerrar();
    guardado();
}

function activar_producto(id){
    var a=0;
    var b=0;
    $.ajax({
        type:"POST",
        url:"/administrador/activar_producto",
        data: {id : id},
        async: false,
        success:function(producto){
                // console.log(producto);
                productos = [];
                productos_eliminado = [];
                for (var n = 0; n < producto.length; n++) {
                    if(producto[n].estado == 'A'){
                        productos[a] = { id: producto[n].id, nombre: producto[n].nombre, precio:producto[n].precio, cantidad: producto[n].cantidad, modelo: producto[n].modelo, imagen:producto[n].imagen};
                        a+=1;
                    }

                    if(producto[n].estado == 'I'){
                        productos_eliminado[b] = { id: producto[n].id, nombre: producto[n].nombre, precio:producto[n].precio, cantidad: producto[n].cantidad, modelo: producto[n].modelo, imagen:producto[n].imagen};
                        b+=1;
                    }
                     
                }
            
        }
        
    }); 

    activado();
    prod = productos;
    filtrar3('activo');
    // valor(0);
    // paginacion();
}