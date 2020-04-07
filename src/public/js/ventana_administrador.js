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
                    
                    prod[prod.length] = { id: productos[i].id, nombre: productos[i].nombre, precio:productos[i].precio, cantidad: productos[i].cantidad, modelo: modelo, fecha_hora: productos[i].fecha_hora, imagen: productos[i].imagen};
                    
                    
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
    
    if(prod.length == 0){
        const resultado = document.querySelector('#resultado');
        resultado.innerHTML += `
        <h1 style="color: white">Producto no encontrado...</h1>
        `
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
                <a><img height="75" width="100" src="/img/AA-Motor.png"><h2 style="position: absolute; top:-2px; left: 120px; color:black;">AGREGAR PRODUCTO</h2></a> 
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
                <a><img height="75" width="100" src="/img/AA-Motor.png"><h2 style="position: absolute; top:-2px; left: 120px; color:black;">EDITAR PRODUCTO</h2></a> 
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
    if(typeof opcion === "undefined"){
        prod2=[];
        prod3=[];
        prod03=[];
     }
   

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




function abrir_modelo(opcion, mode, id){
   
    if(typeof mode === "undefined"){
        mode='';
    }
   
    const ventana = document.querySelector('#vent');
    ventana.innerHTML = ` 
        <div class="row">

        <div class="col-lg-12 mx-auto">
        <div class="card text-center">
            <div class="card-header" id="editar">
               <h3 style="color:black">Agregar Modelo</h3>
            </div>
        
            <div class="card-header">
            <form id="agregar_modelo" method="POST">
                <img height="200" width="250" src="/images/super_gato.png" class="center ms">

                <div class="inputWithIcon jorge">
                    <input type="text" id="modelo" name="modelo" placeholder="Ingrese nuevo modelo" class="form-control" value="${mode}" required autofocus>
                    <i class="icon-cogs" aria-hidden="true"></i>
                </div>
                
               
                <div class="row" >
                    <div class="modelo">
                        <div class="col-lg-5" >
                            <a class="btn btn-warning btn-block" onclick="validar_modelo('${opcion}',${id})"> Guardar </a>
                        </div> 
                        <div class="col-lg-5">
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
   
    if(mode !== ""){
        const titul = document.querySelector('#editar');
        titul.innerHTML = `<h3 style="color:black">Editar Modelo</h3> `
    }

    abrir();

    var intro = document.getElementById('tamaño');
     intro.style.width="40%";
     intro.style.top="-3%";
}

function abrir_lista_modelo(){

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
            <h5 class="letra2">Lista De Modelo</h5>
        </div>     
        
        <div class="modelo1">
            <button class="btn btn-warning" onclick="abrir_modelo('${"opcion2"}')">Agregar modelo</button>
        </div>
       
        <div class="col-lg-3">
            <h5 class="letra2" style="text-align:right">Buscar:</h5>
            
        </div>

        <div class="col-lg-3">
            
            <input type="text" id="form_mod" class="form-control ">

        </div>

    </div> 
 
    <table class="table display DataTables" class="table table-bordered order-table" class="card-header" style="color: white">

        <tbody style="background-color:#ddac1b; color:black" align="center">
            <tr> 
            <td>Nombre</td>
            <td>Opciones</td>
            <td>Nombre</td>
            <td>Opciones</td>
            </tr>
        </tbody>

        <tbody id="lista_modelo" style="color:black" align="center" class="card-header">

        </tbody>
         
        

    </table>
    `

    
    form_mod.addEventListener('keyup', filtrar_modelo);
    filtrar_modelo();
   

    var intro = document.getElementById('tamañ2');
    
    intro.style.width="50%";
    intro.style.top="-15%";
    body2='true';
 
    abrir2();
}  

function filtrar_modelo(){
    const modelo1 = document.querySelector('#lista_modelo');
    modelo1.innerHTML = '';

    const formulario =  document.querySelector('#form_mod');
    const texto = formulario.value.toLowerCase();
    var categoria1 = [];
     
    for(var n=0; n<categoria.length; n++){
        let modelo = categoria[n].modelo.toLowerCase();

        if(modelo.indexOf(texto) !== -1){ 

            if(modelo.indexOf(texto) !== -1){
                categoria1[categoria1.length]= categoria[n];
            }

        }
    }  
    
    for(var n=1; n<=categoria1.length; n+=2){
        if(n != categoria1.length){
            modelo1.innerHTML += `
            <td>${categoria1[n-1].modelo}</td> 
            <td> 
                <a class="btn btn-warning mx-1" onclick="abrir_modelo('${"opcion2"}','${categoria1[n-1].modelo}',${categoria1[n-1].id})">
                <img height="25" width="20" src="/img/editar2.png"></a>  
                
            </td>
            
            <td>${categoria1[n].modelo}</td> 
            <td> 
                <a class="btn btn-warning mx-1" onclick="abrir_modelo('${"opcion2"}','${categoria1[n].modelo}',${categoria1[n].id})">
                <img height="25" width="20" src="/img/editar2.png"></a>  
                
            </td>`
        }

        if(n == categoria1.length && categoria1.length%2 == 0){
            modelo1.innerHTML += `
            <td>${categoria1[n-1].modelo}</td> 
            <td> 
                <a class="btn btn-warning mx-1" onclick="abrir_modelo('${"opcion2"}','${categoria1[n-1].modelo}',${categoria1[n-1].id})">
                <img height="25" width="20" src="/img/editar2.png"></a>  
                
            </td>
            
            <td>${categoria1[n].modelo}</td> 
            <td> 
                <a class="btn btn-warning mx-1" onclick="abrir_modelo('${"opcion2"}','${categoria1[n].modelo}',${categoria1[n].id})">
                <img height="25" width="20" src="/img/editar2.png"></a>  
                
            </td>`
        }

        if(n == categoria1.length && categoria1.length%2 != 0){
            modelo1.innerHTML += `
            <td>${categoria1[n-1].modelo}</td> 
            <td> 
                <a class="btn btn-warning mx-1" onclick="abrir_modelo('${"opcion2"}','${categoria1[n-1].modelo}',${categoria1[n-1].id})">
                <img height="25" width="20" src="/img/editar2.png"></a>  
                
            </td>
            <td></td> 
            <td></td>`
            
        } 
    }

    if(categoria1.length == 0){
        modelo1.innerHTML += `
        <td>Modelo no encontrado..</td>`
    }  
}
////////////////////////////////////////////////////
function abrir_cliente(){
   
    const ventana = document.querySelector('#vent');
    ventana.innerHTML = `
        <div class="row">
        <div class="col-md-12 mx-auto" >
            <div class="card ">
        
            <div class="card-header" id=titulo>
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

               
                    
                <div id="boton_contrasena" class="boton_contrasena">
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
                           
                        </select>
                        <i class="icon-man-woman" aria-hidden="true"></i>
                    </div>
                    </div>
    
                
                    <div class="col-lg-6">
                    <h3 class="negro">Nacimiento<span style="color:red">*</span></h3>
                    <div class="inputWithIcon jorge3">
                        <input type="date" id="nacimiento" name="nacimiento" placeholder="Nacimiento" class="form-control">
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
                            
                        </select>
                        <i class="icon-location" aria-hidden="true"></i>
                    </div>
                    </div>
    
                
                    <div class="col-lg-6">
                    <h3 class="negro">Teléfono<span style="color:red">*</span></h3>
                    <div class="inputWithIcon jorge">
                        <input type="text" id="telefono" name="telefono" placeholder="Telefono" class="form-control">
                        <i class="icon-phone" aria-hidden="true"></i>
                    </div>
                    </div>
    
                </div>
    
                <div class="row">

                    <div class="col-lg-6">
                    <h3 class="negro">Cédula<span style="color:red">*</span></h3>
                    <div class="inputWithIcon jorge">
                        <input type="text" id="cedula" name="cedula" placeholder="Cedula" class="form-control" >
                        <i class="icon-contact_mail" aria-hidden="true"></i>
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
                 
                <div class="row" >
        
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
                        <a class="negro" style="position: relative; left: -20px;">Acepto ternimos y condiciones </a>
                    </div>
                    
                </div>

                <div class="row">
                    <div class="col-lg-3">
                    <a id="check" class="btn btn-warning btn-block my-3" onclick="validar_registro(1)">
                        Registrar
                    </a>
                    
                    </div>
    
                    <div class="col-lg-3" id="cancelar">
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

    selecionar();
    
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

    validar_input();
}

function selecionar(sexo, direccion){
    var Provincia= ['Azua','Bahoruco','Barahona','Dajabón','Distrito Nacional','San Francisco de Macorís',
    'El Seibo','Elías Piña','Moca','Hato Mayor','Salcedo','Jimaní','Higüey','La Romana','La Vega',
    'Nagua','Bonao','Monte Cristi','Monte Plata','Pedernales','Baní','Puerto Plata','Samaná',
     'San Cristóbal','San José de Ocoa','San Juan','San Pedro de Macorís','Cotuí','Santiago',
    'Santiago Rodríguez','Santo Domingo','Valverde'];
   
    const direccion1 = document.querySelector('#direccion');
    const sexo1 = document.querySelector('#sexo');
   
    if( sexo == 'M' ){
        sexo1.innerHTML += `
         <option value="F">Femenino</option> 
         <option value="M" selected>Masculino</option> 
        `;
    }

    if( sexo == 'F' ){
        sexo1.innerHTML += `
         <option value="F" selected>Femenino</option> 
         <option value="M">Masculino</option> 
        `;
    }

    if(typeof sexo === "undefined"){
        sexo1.innerHTML += `
        <option value="F">Femenino</option> 
        <option value="M">Masculino</option> 
       `;
    }
   

    for (var n=0; n < Provincia.length; n++){
        if( direccion != Provincia[n] ){
            direccion1.innerHTML += `
            <option value="${Provincia[n]}">${Provincia[n]}</option> 
            `;
        }

        if(direccion == Provincia[n] ){
            direccion1.innerHTML += `
            <option value="${Provincia[n]}" selected>${Provincia[n]}</option> 
            `;
        }
    }
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

                <div id="boton_contrasena" class="boton_contrasena">
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
                    <h3 class="negro">Cédula<span style="color:red">*</span></h3>
                    <div class="inputWithIcon jorge">
                        <input type="text" id="cedula" name="cedula" placeholder="Cedula" class="form-control" >
                        <i class="icon-contact_mail" aria-hidden="true"></i>
                    </div>
                    </div>
    
                    <div class="col-lg-6">
                    <h3 class="negro">Correo<span style="color:red">*</span></h3>
                    <div class="inputWithIcon jorge4">
                        <input type="email" id="correo" name="correo" placeholder="Correo" class="form-control">
                        <i class="icon-email" aria-hidden="true"></i>
                    </div>
                    </div>
    
                </div>
    
             

                <div class="row" >
        
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
                        <a class="negro" style="position: relative; left: -20px;">Acepto ternimos y condiciones </a>
                    </div>
                </div>

                <div class="row">
    
                    <div class="col-lg-3">
                    <a id="check" class="btn btn-warning btn-block my-3" onclick="validar_registro(2)">
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

    selecionar();
    
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

    validar_input();

    
}

////////////////////////////////////////////////////////////////////////
function abrir_informacion(id,nombre,apellido,sexo,nacimiento,direccion,telefono,cedula,correo,imagen,opcion){
    
    const ventana = document.querySelector('#vent');
    ventana.innerHTML = `
        <div class="row">
        <div class="col-md-12 mx-auto">
            <div class="card ">
            
            <div class="card-header" id=titulo>
                <h2 align="center" style="color:black">Editar Cliente</h2>
            </div>

            <hr color="black" size=3>
            <div class="card-body">
                <form id="enviar" method="POST" >
                 
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

                <div id="boton_contrasena" class="boton_contrasena">
               
                    <ul class="nav">
                        <li><a class="opcion">Opciones</a>
                            <ul>
                                <li class="cursor"><a onclick="abrir_contrasena(${id},'${imagen}',${opcion})">Cambiar Contraseña</a></li>
                                <li class="cursor"><a onclick="eliminacion_foto(${id},${opcion})">Eliminar Fotos</a></li>
                            
                            </ul>
                        </li>
                    </ul>
            
                </div>

                <hr color="black" size=3>

                <div class="row">
    
                    <div class="col-lg-6">
                    <h3 class="negro">Nombre<span style="color:red">*</span></h3>
                    <div class="inputWithIcon jorge">
                        <input type="text" id="nombre" name="nombre" placeholder="Nombre" class="form-control" value="${nombre}" required autofocus>
                        <i class="icon-user" aria-hidden="true"></i>
                    </div>
                    </div>
    
                
                    <div class="col-lg-6">
                    <h3 class="negro">Apellido<span style="color:red">*</span></h3>
                    <div class="inputWithIcon jorge">
                        <input type="text" id="apellido" name="apellido" placeholder="Apellido" value="${apellido}" class="form-control" >
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
    
                        </select>
                        <i class="icon-man-woman" aria-hidden="true"></i>
                    </div>
                    </div>
    
                
                    <div class="col-lg-6">
                    <h3 class="negro">Nacimiento<span style="color:red">*</span></h3>
                    <div class="inputWithIcon jorge3">
                        <input type="date" id="nacimiento" name="nacimiento" placeholder="Nacimiento" class="form-control" value="${nacimiento}">
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
                           
                        </select>
                        <i class="icon-location" aria-hidden="true"></i>
                    </div>
                    </div>
    
                
                    <div class="col-lg-6">
                    <h3 class="negro">Teléfono<span style="color:red">*</span></h3>
                    <div class="inputWithIcon jorge">
                        <input type="text" id="telefono" name="telefono" placeholder="Telefono" class="form-control" value="${telefono}">
                        <i class="icon-phone" aria-hidden="true"></i>
                    </div>
                    </div>
    
                </div>
    
                <div class="row">

                    <div class="col-lg-6">
                    <h3 class="negro">Cédula<span style="color:red">*</span></h3>
                    <div class="inputWithIcon jorge">
                        <input type="text" id="cedula" name="cedula" placeholder="Cedula" class="form-control" value="${cedula}" >
                        <i class="icon-contact_mail" aria-hidden="true"></i>
                    </div>
                    </div>
    
                    <div class="col-lg-6">
                    <h3 class="negro">Correo<span style="color:red">*</span></h3>
                    <div class="inputWithIcon jorge4">
                        <input type="email" id="correo" name="correo" placeholder="Correo" class="form-control" value="${correo}">
                        <i class="icon-email" aria-hidden="true"></i>
                    </div>
                    </div>
    
                </div>
    

                <div class="row">
    
                    <div class="col-lg-3">
                    <a id="check" class="btn btn-warning btn-block my-3" onclick="validar_registro2(${id},${opcion})">
                        Guardar
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

    if(opcion == 2){
        const titulo = document.querySelector('#titulo');
        titulo.innerHTML = `
            <h2 align="center" style="color:black">Editar Perfil</h2>
        `
    
        const boton_contrasena = document.querySelector('#boton_contrasena');
        boton_contrasena.innerHTML = `
        <ul class="nav">
            <li><a class="opcion">Opciones</a>
                <ul>
                    <li class="cursor"><a onclick="abrir_contrasena2(${id},'${imagen}',${opcion})">Cambiar Contraseña</a></li>
                    <li class="cursor"><a onclick="eliminacion_foto(${id},${opcion})">Eliminar Fotos</a></li>
                
                </ul>
            </li>
        </ul>
        `
    }

    selecionar(sexo, direccion);

    $('#imagenPreview').html("<img src='/imagen1/"+imagen+"' class='imgRedonda'/>");
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

    var intro = document.getElementById('tamaño');
    intro.style.width="60%";
    intro.style.top="-15%";

    abrir();
    validar_input();
}
/////////////////////////////////////////////////////////////////////
function validar_input(){
    const nombre1 = document.querySelector('#nombre');
    const apellido1 = document.querySelector('#apellido');
    const telefono1 = document.querySelector('#telefono');
    const cedula1 = document.querySelector('#cedula');

    nombre1.addEventListener('keyup', (e) => {
        let valorInput = e.target.value;
    
        nombre1.value = valorInput

        //Elimina los numero
        .replace(/([0-9])/g, '')
        //Elimina el primer espaciado
        .replace(/^\s+/,"");
        
    });    



    apellido1.addEventListener('keyup', (e) => {
        let valorInput = e.target.value;
    
        apellido1.value = valorInput
        .replace(/([0-9])/g, '')   
        .replace(/^\s+/,"");
        
    }); 

    telefono1.addEventListener('keyup', (e) => {
        let valorInput = e.target.value;
      
        telefono1.value = valorInput
         //Eliminamos espacios en blanco
        .replace(/\s/g, '')
         //Eliminar las letrar
        .replace(/\D/g, '')
        //Mascara
        .replace(/^(\d{3})(\d{3})(\d{4}).*/, '($1) $2-$3');

        // .trim();
        
    });

    cedula1.addEventListener('keyup', (e) => {
        let valorInput = e.target.value;
      
        cedula1.value = valorInput
         //Eliminamos espacios en blanco
        .replace(/\s/g, '')
         //Eliminar las letrar
        .replace(/\D/g, '')
        //Mascara
        .replace(/^(\d{3})(\d{7})(\d{1}).*/, '$1-$2-$3');

        // .trim();
        
    });
}
///////////////////////////////////////////////////////////////

var prod2 = [];
var prod3 = [];
var prod03 = [];
function abrir_lista_producto(){
    prod3= [];
    prod03 = [];
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
    
    if(prod2.length == 0){
        const lista = document.querySelector('#lista');
        lista.innerHTML += `
        <td>Producto no encontrado..</td>`
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
function producto_eliminado(){

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
    prod03= [];
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
    
    if(prod3.length == 0){
        const lista = document.querySelector('#lista');
        lista.innerHTML += `
        <td>Producto no encontrado..</td>`
    }  

}

function editar_producto(id){
  

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
    
    
    editado();
    if(prod2.length != 0){
        filtrar2('edito');
    }
    if(prod3.length != 0){
        producto_eliminado();
        filtrar3('edito');
    }

    if(prod03.length != 0){
       // producto_eliminado();
        filtrar03('edito');
    }

    filtrar('edito');
    
}

function agregar_modelo(opcion){
    var datos=$('#agregar_modelo').serialize();
    
    $(document).ready(function(){
        $.ajax({
            type:"POST",
            url:"/administrador/agregar_modelo",
            data: datos,
            async: false,
            success:function(categoria1){
                categoria=categoria1;
            }
        }); 
        
    });

  cerrar(opcion);
  guardado();

  if(typeof opcion !== "undefined"){
     filtrar_modelo();
  }
  
}

function editar_modelo(id){
    var datos=$('#agregar_modelo').serialize();
    
    $(document).ready(function(){
        $.ajax({
            type:"POST",
            url:"/administrador/editar_modelo/"+id,
            data: datos,
            async: false,
            success:function(categoria1){
                categoria=categoria1;
            }
        }); 
        
    });

    $.ajax({
        type:"POST",
        url:"/administrador/todos_producto",
        async: false,
        data: {id : id},
        success:function(products1){
              
            productos = products1;
               
        }
        
    });

    cerrar('opcion2');
    filtrar('edito');
    filtrar_modelo();
    editado();
 
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

function activar_producto(id, opcion){
   
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
                    if(producto[n].estado == 'A' || producto[n].estado == 'P'){

                        for (i = 0; i < categoria.length; i++){
                            if(producto[n].id_modelo == categoria[i].id){
                                 modelo = categoria[i].modelo.toLowerCase();
                            }
                        }

                        prod[prod.length] = { id: producto[n].id, nombre: producto[n].nombre, precio:producto[n].precio, cantidad: producto[n].cantidad, modelo: modelo, fecha_hora: producto[n].fecha_hora, imagen:producto[n].imagen};
                        productos[productos.length] = producto[n];
                    }

                    if(producto[n].estado == 'I'){
                        productos_eliminado[productos_eliminado.length] = producto[n];
                       
                    }
                     
                }
            
        }
        
    }); 

    activado();
    if(typeof opcion !== "undefined"){
        filtrar03('activo');
    }
  
    if(typeof opcion === "undefined"){
        filtrar3('activo');
    }
    
  
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
            <div class="cursor" style="position: relative; left: -100px;">
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
            <td>Telefono</td>
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

var prod4 =[];
var venta = [];
var products = [];
const filtrar4 = (llamar)=>{
 
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
                let telefono = venta[i].telefono.toLowerCase();
                let telefono1 = venta[i].telefono.replace("(", '').replace(")", '').replace(" ", '').replace("-", '');
                let cedula1 = venta[i].cedula.replace("-", '').replace("-", '');
              
              
                
        
                if( (nombre.indexOf(texto) !== -1) || (apellido.indexOf(texto) !== -1) || (cedula.indexOf(texto) !== -1) || (cedula1.indexOf(texto) !== -1) ||
                  (total.indexOf(texto) !== -1) || (telefono1.indexOf(texto) !== -1) || (telefono.indexOf(texto) !== -1) || (fecha_hora[0].indexOf(texto) !== -1) || (fecha_hora[1].indexOf(texto) !== -1) ){ 
                    
                    prod4[prod4.length] = venta[i];
                   
                    
                }
                    
        } 
        


    if( (llamar != 'edito') && (llamar != 'elimino') ){
  
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
    
    if(prod4.length == 0){
        const lista = document.querySelector('#lista');
        lista.innerHTML += `
        <td>Venta no encontrado..</td>`
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
    <h3 class="titulo5">Compañia AA Motor</h3>
    <p class="encambezado">Santo Domingo, Km 11/2</p>
    <p class="encambezado" style="top: -49px">Tel(s):809-573-3711</p>
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
            <td>Telefono</td>
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
    
    intro.style.width="80%";
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
                let telefono = venta_desp[i].telefono.toLowerCase();
                let telefono1 = venta_desp[i].telefono.replace("(", '').replace(")", '').replace(" ", '').replace("-", '');
                let cedula1 = venta_desp[i].cedula.replace("-", '').replace("-", '');
 
                if( (nombre.indexOf(texto) !== -1) || (apellido.indexOf(texto) !== -1) || (telefono1.indexOf(texto) !== -1) ||
                   (telefono.indexOf(texto) !== -1) ||(cedula1.indexOf(texto) !== -1) || (cedula.indexOf(texto) !== -1) || (total.indexOf(texto) !== -1) || (fecha_hora[0].indexOf(texto) !== -1) || (fecha_hora[1].indexOf(texto) !== -1) ){ 
                    
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
    
    if(prod4.length == 0){
        const lista = document.querySelector('#lista');
        lista.innerHTML += `
        <td>Venta no encontrado..</td>`
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
            <div class="cursor" style="position: relative; left: -120px;">
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
    
    intro.style.width="90%";
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
    if( (llamar != 'elimino') && (llamar != 'edito')){
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
                let telefono1 = cliente[i].telefono.replace("(", '').replace(")", '').replace(" ", '').replace("-", '');
                let cedula1 = cliente[i].cedula.replace("-", '').replace("-", '');

                if( (nombre.indexOf(texto) !== -1) || (apellido.indexOf(texto) !== -1) ||
                 (sexo.indexOf(texto) !== -1) || (nacimiento.indexOf(texto) !== -1) || 
                 (direccion.indexOf(texto) !== -1) || (telefono1.indexOf(texto) !== -1) || (telefono.indexOf(texto) !== -1) ||
                 (cedula.indexOf(texto) !== -1) || (cedula1.indexOf(texto) !== -1) || (correo.indexOf(texto) !== -1) ){ 
                   
                    prod5[prod5.length] = cliente[i];
                   
                    
                }
                    
        } 
        


    if( (llamar != 'edito') && (llamar != 'elimino') ){
        valor5(0);
		paginacion4();
	}
		


    const id = [...document.querySelectorAll('#options2 .selected')].map(el => el.id);
	if(llamar == 'edito'){
        valor5(0);
		paginacion4();
		paginacion_editar5(id); 
	}

	if(llamar == 'elimino'){
	    paginacion4();
        paginacion_eliminar5(id);
    }
    
    if(prod5.length == 0){
        const lista = document.querySelector('#lista');
        lista.innerHTML += `
        <td>Cliente no encontrado..</td>`
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
    
    intro.style.width="90%";
    intro.style.top="-15%";
    body2='true';
 
    abrir2();

}


//const boton = document.querySelector('#boton');


const filtrar05 = (llamar)=>{
    if( (llamar != 'activo') && (llamar != 'edito') ){
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
                let telefono1 = cliente[i].telefono.replace("(", '').replace(")", '').replace(" ", '').replace("-", '');
                let cedula1 = cliente[i].cedula.replace("-", '').replace("-", '');
               

                if( (nombre.indexOf(texto) !== -1) || (apellido.indexOf(texto) !== -1) ||
                 (sexo.indexOf(texto) !== -1) || (nacimiento.indexOf(texto) !== -1) || 
                 (direccion.indexOf(texto) !== -1) || (telefono1.indexOf(texto) !== -1) || (telefono.indexOf(texto) !== -1) ||
                 (cedula.indexOf(texto) !== -1) || (cedula1.indexOf(texto) !== -1) || (correo.indexOf(texto) !== -1) ){ 
                    
                    prod5[prod5.length] = cliente[i];
                   
                    
                }
                    
        } 
        


    if( (llamar != 'edito') && (llamar != 'activo') ){
        valor05(0);
		paginacion4();
	}
		


    const id = [...document.querySelectorAll('#options2 .selected')].map(el => el.id);
	if(llamar == 'edito'){
        valor05(0);
		paginacion4();
		paginacion_editar5(id, 2); 
	}

	if(llamar == 'activo'){
	    paginacion4();
        paginacion_eliminar5(id, 2);
    }
    
    if(prod5.length == 0){
        const lista = document.querySelector('#lista');
        lista.innerHTML += `
        <td>Cliente no encontrado..</td>`
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

function eliminar_foto(id, opcion){
    $.ajax({
        type:"POST",
        url:"/administrador/eliminar_foto",
        data: {id : id, opcion : opcion},
        async: false,
        success:function(datos){
            
            for(var n=0; n<datos.length; n++){
                if(id == datos[n].id){
                   
                    if(opcion == 1){
                        filtrar5();
                        abrir_informacion(datos[n].id,datos[n].nombre,datos[n].apellido,datos[n].sexo,datos[n].nacimiento,
                        datos[n].direccion,datos[n].telefono,datos[n].cedula,datos[n].correo,datos[n].imagen,'1');
                        eliminado();
                    }

                    if(opcion == 10){
                        filtrar05();
                        abrir_informacion(datos[n].id,datos[n].nombre,datos[n].apellido,datos[n].sexo,datos[n].nacimiento,
                        datos[n].direccion,datos[n].telefono,datos[n].cedula,datos[n].correo,datos[n].imagen,'10');
                        eliminado();
                    }

                    if(opcion == 2){
                        const admin = document.querySelector('#admin');
                        admin.innerHTML = `
                        <a  onclick="abrir_informacion(${datos[0].id},'${datos[0].nombre}','${datos[0].apellido}','${datos[0].sexo}','${datos[0].nacimiento}',
                        '${datos[0].direccion}','${datos[0].telefono}','${datos[0].cedula}','${datos[0].correo}','${datos[0].imagen}','2')">Editar informacion</a>
                        `
                        const admin2 = document.querySelector('#admin2');
                        admin2.innerHTML = `
                        <a onclick="abrir_contrasena(${datos[0].id},'${datos[0].imagen}','2','true')">Cambiar Contraseña</a>
                        `
    
                        const link01 = document.querySelector('#link01');
                        link01.innerHTML = `
                        <img src='/imagen1/${datos[0].imagen}' class='imgRedonda2'/>
                        `
                        abrir_informacion(datos[n].id,datos[n].nombre,datos[n].apellido,datos[n].sexo,datos[n].nacimiento,
                        datos[n].direccion,datos[n].telefono,datos[n].cedula,datos[n].correo,datos[n].imagen,'2');
                        eliminado();
                    }
                   
                }
            }
            
     
        }
        
    });
    
   
}

///////////////////////editar_cliente/////////////////////////////
function editar_informacion(id, opcion){
    
    var datos = new FormData(document.getElementById("enviar"));
    
    $.ajax({
        type:"POST",
        url:"/administrador/editar_informacion/"+id+"/"+opcion,
        data: datos,
        async: false,
        processData: false,
        contentType: false,
        success:function(datos){
                    
            if(opcion == 1) {
                cliente=datos;
                filtrar5('edito');
                cerrar('opcion2');
            } 
            
            if(opcion == 10){
                cliente=datos;
                filtrar05('edito');
                cerrar('opcion2');
            }
            
            if(opcion == 2){
                const perfil_unico = document.querySelector('#perfil_unico');
                perfil_unico.innerHTML = `
                <a class="site-logo scroll" onclick="abrir_informacion(${datos[0].id},'${datos[0].nombre}','${datos[0].apellido}','${datos[0].sexo}','${datos[0].nacimiento}',
                '${datos[0].direccion}','${datos[0].telefono}','${datos[0].cedula}','${datos[0].correo}','${datos[0].imagen}','2')">${datos[0].nombre} ${datos[0].apellido}</a>`
               
                const admin = document.querySelector('#admin');
                admin.innerHTML = `
                <a  onclick="abrir_informacion(${datos[0].id},'${datos[0].nombre}','${datos[0].apellido}','${datos[0].sexo}','${datos[0].nacimiento}',
                '${datos[0].direccion}','${datos[0].telefono}','${datos[0].cedula}','${datos[0].correo}','${datos[0].imagen}','2')">Editar informacion</a>
                `
                const admin2 = document.querySelector('#admin2');
                admin2.innerHTML = `
                <a onclick="abrir_contrasena(${datos[0].id},'${datos[0].imagen}','2','true')">Cambiar Contraseña</a>
                `

                const link01 = document.querySelector('#link01');
                link01.innerHTML = `
                <img src='/imagen1/${datos[0].imagen}' class='imgRedonda2'/>
                `
                cerrar();
            }
            editado();

        }
        
        
    });
    
}

function abrir_contrasena(id,imagen,opcion,true1){

    const ventana = document.querySelector('#vent3');
    ventana.innerHTML = `
    <div class="row">
        <div class="col-sm-12 col-md-12 col-sx-12 col-lg-12 mx-auto">

           <div class="col-md-12 col-lg-12">
                <a><img height="75" width="100" src="/imagen1/${imagen}" class='imgRedonda3'></a>
                <h4 class="titulo2"> CAMBIAR CONTRASEÑA</h4> 
            </div> 

            <form id="cambiar_contrasena"  method="POST" onsubmit="return validar_contrasena();">
                <div class="row">
                    <div class="col-lg-12">
                        <h5 class="nombre3">Nueva contraseña<span style="color:red">*</span></h5>
                        <div class="inputWithIcon jorge5">
                        <input type="password" id="contrasena" name="contrasena" placeholder="Ingrese contraseña" class="form-control" required autofocus>
                        <i class="icon-lock" aria-hidden="true"></i>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-lg-12">
                        <h5 class="nombre3">Confirmar contraseña<span style="color:red">*</span></h5>
                        <div class="inputWithIcon jorge5">
                        <input type="password" id="confirmar" name="confirmar" placeholder="Ingrese de nuevo su contraseña" class="form-control"  required >
                        <i class="icon-key" aria-hidden="true"></i>
                        </div>
                    </div>

                </div>

                <br>
                
                <div class="row">
                    <div class="col-lg-6">
                        <a class="btn btn-warning btn-block" onclick="validar_contrasena(${id},${opcion})">Guardar</a>
                    </div>

                    <div class="col-lg-6">
                        <a class="btn btn-danger btn-block" onclick="span3()">Cancelar</a>
                    </div>
 
                </div>


            </form>

        </div>

    </div>`;

    var intro = document.getElementById('tamañ3');
    
    intro.style.width="35%";
    intro.style.top="-5%";
    abrir3('true');
    if(typeof true1 === "undefined"){
        body3='true';
    }if(typeof true1 !== "undefined"){
        body3='false';
    }

}

function abrir_contrasena2(id,imagen,opcion,true1){

    const ventana = document.querySelector('#vent3');
    ventana.innerHTML = `
    <div class="row">
        <div class="col-sm-12 col-md-12 col-sx-12 col-lg-12 mx-auto">

           <div class="col-md-12 col-lg-12">
                <a><img height="75" width="100" src="/imagen1/${imagen}" class='imgRedonda3'></a>
                <h4 class="titulo2"> CAMBIAR CONTRASEÑA</h4> 
            </div> 

            <form id="cambiar_contrasena2"  method="POST" onsubmit="return validar_contrasena();">
                <div class="row">
                    <div class="col-lg-12">
                        <h5 class="nombre3">Contraseña actual<span style="color:red">*</span></h5>
                        <div class="inputWithIcon jorge5">
                        <input type="password" id="actual" name="actual" placeholder="Contraseña actual" class="form-control" required autofocus>
                        <i class="icon-pencil" aria-hidden="true"></i>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <h5 class="nombre3">Nueva contraseña<span style="color:red">*</span></h5>
                        <div class="inputWithIcon jorge5">
                        <input type="password" id="contrasena" name="contrasena" placeholder="Ingrese contraseña" class="form-control" required autofocus>
                        <i class="icon-lock" aria-hidden="true"></i>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-lg-12">
                        <h5 class="nombre3">Confirmar contraseña<span style="color:red">*</span></h5>
                        <div class="inputWithIcon jorge5">
                        <input type="password" id="confirmar" name="confirmar" placeholder="Ingrese de nuevo su contraseña" class="form-control"  required >
                        <i class="icon-key" aria-hidden="true"></i>
                        </div>
                    </div>

                </div>

                <br>
                
                <div class="row">
                    <div class="col-lg-6">
                        <a class="btn btn-warning btn-block" onclick="validar_contrasena(${id},${opcion})">Guardar</a>
                    </div>

                    <div class="col-lg-6">
                        <a class="btn btn-danger btn-block" onclick="span3()">Cancelar</a>
                    </div>
 
                </div>


            </form>

        </div>

    </div>`;

    var intro = document.getElementById('tamañ3');
    
    intro.style.width="35%";
    intro.style.top="-5%";
    abrir3('true');
    if(typeof true1 === "undefined"){
        body3='true';
    }if(typeof true1 !== "undefined"){
        body3='false';
    }

}

function cambiar_contrasena(id,opcion){
   
    if(opcion == 2){
        var datos=$('#cambiar_contrasena2').serialize();
    } else{
        var datos=$('#cambiar_contrasena').serialize();
    }
    
    $.ajax({
        type:"POST",
        url:"/administrador/cambiar_contrasena/"+id+"/"+opcion,
        data: datos,
        async: false,
        success:function(opcion1){

            if(opcion1 == 'confirmacion'){
                span3();
                cambio();
            }

            if(opcion1 == 'invalido'){ 
                error('Contraseña actual incorrecto!');
                return  false;
            }

        }
        
    });
  
}

//////////////////////////////////////////////////
function abrir_lista_pedido(){
    prod2= [];
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
            <h5 class="letra2">Productos Pedido</h5>
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
    
    formulario3.addEventListener('keyup', filtrar03);
    filtrar03();
    
    var intro = document.getElementById('tamañ2');
    
    intro.style.width="65%";
    intro.style.top="-15%";
    body2='true';
 
    abrir2();

}

var pedidos = [];
const filtrar03 = (llamar)=>{
    $.ajax({
        type:"POST",
        url:"/administrador/productos_pedido",
        async: false,
        success:function(producto){
              
            pedidos = producto;

        }
        
    });

    const lista = document.querySelector('#lista');

    const formulario3 =  document.querySelector('#formulario3');
        lista.innerHTML = '';
        prod03 = [];
        var modelo;

        const texto = formulario3.value.toLowerCase();

        for (var i=0; i<pedidos.length;i++) { 
                
                let id = pedidos[i].id.toString().toLowerCase();
                let nombre = pedidos[i].nombre.toLowerCase();
                let precio = pedidos[i].precio.toString().toLowerCase();
                let cantidad = pedidos[i].cantidad.toString().toLowerCase();
                for (n = 0; n < categoria.length; n++){
                    if(pedidos[i].id_modelo == categoria[n].id){
                         modelo = categoria[n].modelo.toLowerCase();
                    }
                }
                
        
                if( (id.indexOf(texto) !== -1) || (nombre.indexOf(texto) !== -1) || (precio.indexOf(texto) !== -1) || (cantidad.indexOf(texto) !== -1) || (modelo.indexOf(texto) !== -1) ){ 
                    
                    prod03[prod03.length] = { id: pedidos[i].id, nombre: pedidos[i].nombre, precio:pedidos[i].precio, cantidad: pedidos[i].cantidad, modelo: modelo, imagen: pedidos[i].imagen};
                    
                }
                    
        } 
        


    if( (llamar != 'edito') && (llamar != 'activo') ){
        valor03(0);
		paginacion03();
	}
		


    const id = [...document.querySelectorAll('#options3 .selected')].map(el => el.id);
	if(llamar == 'edito'){
		paginacion03();
		paginacion_editar03(id); 
	}

	if(llamar == 'activo'){
	    paginacion03();
        paginacion_eliminar03(id);
        valor(0);
        paginacion();
    }
    
    if(prod03.length == 0){
        const lista = document.querySelector('#lista');
        lista.innerHTML += `
        <td>Pedido no encontrado..</td>`
    }  

}

