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
                                <select name="modelo" id="selectModelo" placeholder="Modelo" class="form-control">
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
function abrir_editacion_productos(id, imagen, nombre, precio, modelo, cantidad){
    
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
                                <select name="modelo" id="selectModelo" placeholder="Modelo" class="form-control" value="${modelo}">
                                    <option disabled selected>Modelo</option>
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
                                <a class="btn btn-warning btn-block" onclick="validar_formulario_editar(${id})" >Guardar</a>
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
                    <input type="text" id="modelo" name="modelo" placeholder="Ingrese el nuevo modelo" class="form-control" >
                    <i class="icon-cogs" aria-hidden="true"></i>
                </div>
                
                <div class="row">
                    <div class="col-lg-6">
                        <a class="btn btn-warning btn-block" href="#close" onclick="modelo()"> Guardar </a>
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
                <form id="signup" onsubmit="return validar_administrador();">
    
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
                    <a id="check" class="btn btn-warning btn-block my-3" onclick="validar_administrador()">
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
    // var intro1 = document.getElementById ('openModal');
   
    // intro1.style.top= "-70px";
    intro.style.width="65%";
    intro.style.top="-15%";
}

function abrir_lista_producto(){
    abrir();
    const ventana = document.querySelector('#vent');
    ventana.innerHTML = `
    <div class="row">
        <div class="col-lg-6">
            <h5 style="color:black">Lista De Productos</h5>
        </div>
        
        <div class="col-lg-3">
            <h5 style="color:black; text-align:right">Buscar:</h5>
            
        </div>

        <div class="col-lg-3">
            
            <input type="text" id="formulario" class="form-control ">
        </div>

    </div> 

    <table id="lppresults" class="table display DataTables" class="table table-bordered order-table" class="card-header" style="color: white">

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
    `
    const lista = document.querySelector('#lista');

    const formulario =  document.querySelector('#formulario');
    //const boton = document.querySelector('#boton');
    

const filtrar = ()=>{

    lista.innerHTML = '';

    const texto = formulario.value.toLowerCase();
      

            for (j=0;j<productos.length;j++) { 
                
               
                    
                    let nombre = productos[j].nombre.toLowerCase();
                   
                    let modelo = productos[j].modelo.toLowerCase();
                    if( (nombre.indexOf(texto) !== -1) || (modelo.indexOf(texto) !== -1) ){   
                        lista.innerHTML += `
                        <td>${productos[j].cantidad}</td> <td>${productos[j].nombre}</td> <td>${productos[j].precio}</td> <td>${productos[j].modelo}</td>
                        <td> <a onclick="imagenes('${productos[j].imagen}')"><img height="50" width="50" src="/imagen1/${productos[j].imagen}"></a></td> 
                        <td> 
                            <a class="btn btn-warning mx-1" onclick="abrir(${productos[j].id},'${productos[j].imagen}','${productos[j].nombre}',${productos[j].precio},'${productos[j].modelo}',${productos[j].cantidad})">
                            <img height="25" width="20" src="/img/carrito.png"></a>  

                            <a class="btn btn-danger" onclick="borrar_favorito(${productos[j].id})"> 
                            <img height="25" width="20" src="/img/borrar.png"></a> 
                        </td>
                        `
                    }
                        
                

                // document.write("|" + i + ":" + j + "| ");
            } 
            // document.write("<BR>");
        
        

      

    }


    // boton.addEventListener('click', filtrar)
    formulario.addEventListener('keyup', filtrar)

    filtrar();
    

    var intro = document.getElementById('tamaño');
    
    intro.style.width="65%";
    intro.style.top="-15%";
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
                     productos[n] = { id: producto[n].id, nombre: producto[n].nombre, precio:producto[n].precio, cantidad: producto[n].cantidad, imagen:producto[n].imagen};
                }
                valor(0);
                paginacion();
        }
        
    }); 
    // console.log(form);
}

function editar_producto(id){
  
    var imagen = document.getElementById("imagen").value;

    if(imagen == ''){
        var datos=$('#editar_producto').serialize();
        
        $.ajax({
            type:"POST",
            url:"/administrador/edit/"+id,
            data: datos,
            async: true,
            success:function(producto){
                    // console.log(producto);
                    for (var n = 0; n < producto.length; n++) {
                         productos[n] = { id: producto[n].id, nombre: producto[n].nombre, precio:producto[n].precio, cantidad: producto[n].cantidad, imagen:producto[n].imagen};
                    }
                    valor(0);
                    paginacion();
            }
            
        });
    }
    if(imagen != ''){
        var datos = new FormData(document.getElementById("editar_producto"));
        $.ajax({
            type:"POST",
            url:"/administrador/editar/"+id,
            data: datos,
            async: true,
            processData: false,
            contentType: false,
            success:function(producto){
                    // console.log(producto);
                    for (var n = 0; n < producto.length; n++) {
                         productos[n] = { id: producto[n].id, nombre: producto[n].nombre, precio:producto[n].precio, cantidad: producto[n].cantidad, imagen:producto[n].imagen};
                    }
                    valor(0);
                    paginacion();
            }
            
        });
    }
     
    
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

  
}

function eliminar_producto(id){
    $.ajax({
        type:"POST",
        url:"/administrador/delete",
        data: {id : id},
        async: true,
        success:function(producto){
                // console.log(producto);
                productos = [];
                for (var n = 0; n < producto.length; n++) {
                     productos[n] = { id: producto[n].id, nombre: producto[n].nombre, precio:producto[n].precio, cantidad: producto[n].cantidad, imagen:producto[n].imagen};
                }
                valor(0);
                paginacion();
        }
        
    }); 
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
    var datos=$('#signup').serialize();
        
    $.ajax({
        type:"POST",
        url:"signup",
        data: datos,
        async: true,
        success:function(administrador){
                console.log(administrador);
                
        }
        
    });
    cerrar();
}