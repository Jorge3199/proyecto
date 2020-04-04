var lista1 = [];
const formulario1 =  document.querySelector('#formulario1');
var n5;       
const filtrar1 = ()=>{
   
    prod = [];
    var modelo;

    const texto = formulario1.value.toLowerCase();

    for (var i=0; i<productos.length;i++) { 
            
            let nombre = productos[i].nombre.toLowerCase();
            let precio = productos[i].precio.toString().toLowerCase();
            let cantidad = productos[i].cantidad.toString().toLowerCase();
            for (n = 0; n < categoria.length; n++){
                if(productos[i].id_modelo == categoria[n].id){
                        modelo = categoria[n].modelo.toLowerCase();
                }
            }
            
    
            if( (nombre.indexOf(texto) !== -1) || (precio.indexOf(texto) !== -1) || (cantidad.indexOf(texto) !== -1) || (modelo.indexOf(texto) !== -1) ){ 
                
                prod[prod.length] = { id: productos[i].id, nombre: productos[i].nombre, precio:productos[i].precio, cantidad: productos[i].cantidad, modelo: modelo, fecha_hora: productos[i].fecha_hora, imagen: productos[i].imagen};
                
                
            }
                
    } 

    valor(0);
    paginacion();

    if(prod.length == 0){
        const resultado = document.querySelector('#resultado');
        resultado.innerHTML += `
        <h1 style="color: white">Producto no encontrado...</h1>
        `
    }  
        
}
     
formulario1.addEventListener('keyup', filtrar1);
filtrar1();
///////////////////////////////////////////////////////////


function abrir_compra(id, imagen, nombre, precio, modelo, cantidad){
    const ventana = document.querySelector('#vent');
    ventana.innerHTML = `

        <div class="row">
            <div class="col-lg-5">
                <div class="col-md-5" style="top:60px">	
                <img height="210" width="240" src="imagen1/${imagen}" >
                </div>
            </div>

            <div class="col-lg-7">
                <div class="row">
                    <div class="col-md-3">
                        <p class="texto" >Nombre:</p>
                    </div>	

                    <div class="col-md-9">
                        <p class="texto1" >${nombre}</p>
                    </div>	 
                </div>
                <div class="row">
                    <div class="col-md-3">
                        <p class="texto" >Precio:</p>
                    </div>	

                    <div class="col-md-9">
                        <p class="texto1">${precio}</p>
                    </div> 
                </div> 
                <div class="row">
                    <div class="col-md-3">
                        <p class="texto" >Modelo:</p>
                    </div>	

                    <div class="col-md-9">
                        <p class="texto1" >${modelo}</p>
                    </div>	 
                </div>
                <div class="row">
                    <div class="col-md-7" >
                        <p class="texto">Cantidad Disponible:</p>
                    </div>	

                    <div class="col-md-2">
                        <p class="texto1">${cantidad}</p>
                    </div> 
                </div>

                <div class="row">
                    <div class="col-md-7" >
                        <p class="texto">Cantidad De Comprar:</p>
                    </div>	

                    <div class="col-md-2" >
                        <input type="text" id="comprar" name="comprar" class="form-control" required autofocus>
                    </div> 
                </div>
                <div class="row">
                    <div class="col-md-4" >
                        <button class="btn btn-warning btn-block" onclick="compra(${id},'${nombre}',${precio},'${modelo}',${cantidad},'${imagen}')">Comprar</button>
                    </div>
                </div>
                
            </div>	
        </div>
    `
    
    abrir();

    var intro = document.getElementById('tamaño');
    intro.style.width="50%";

    const comprar = document.querySelector('#comprar');


    comprar.addEventListener('keyup', (e) => {
        let valorInput = e.target.value;

        if(valorInput[0] == 0){
           
           valorInput= valorInput.replace(0, '');
        }
    
        comprar.value = valorInput

        //Eliminamos espacios en blanco
        .replace(/\s/g, '')
        //Eliminar las letrar
        .replace(/\D/g, '')

        .trim();
        
    });

    
}



var lista_comprar = [];
var total_compra=0;
var mult;
function compra(id,nombre,precio,modelo,cantidad,imagen){
    comprar = document.getElementById("comprar").value;
    if(comprar <= 0){
        Swal.fire({
            type: 'error',
            title: 'Error',
            text: 'El digito ingresado es incorrecto',   
        })
        return  false;
    }
    if(comprar > cantidad){
        Swal.fire({
            type: 'error',
            title: 'Error',
            text: 'La cantidad disponible de este producto es de '+ cantidad,   
        })
        return  false;
    }
    
    
    if(comprar <= cantidad){
        var encontrado = 0;
        for(var i=0; i < lista_comprar.length; i++){
            if(lista_comprar[i].id == id){
                encontrado=1;
                mult= lista_comprar[i].cantidad * precio;
                total_compra-= mult;
                lista_comprar[i]= { id: id, nombre: nombre, precio: precio, modelo: modelo, cantidad: comprar, imagen: imagen, cant_disp: cantidad};
            }
        }

        if(encontrado==0){
        
            lista_comprar[lista_comprar.length]= { id: id, nombre: nombre, precio: precio, modelo: modelo, cantidad: comprar, imagen: imagen, cant_disp: cantidad};
        }
        
        const cantidad_producto = document.querySelector('#cantidad_producto');
        cantidad_producto.innerHTML = `
        ${lista_comprar.length}
        `

        mult= comprar * precio;
        total_compra+= mult;
        const total = document.querySelector('#total');
        total.innerHTML = `
        ${total_compra.toFixed(2)}
        `
  
    }

    if(body2!='true' && body2!='true1'){
        agrego_carrito();
        cerrar();
    }


    if(body2=='true'){
        editado();
        cerrar('opcion2');
        filtrar2('edito');
    }

    if(body2=='true1'){
        agrego_carrito();
        cerrar('opcion2');
    }
    
}

function carrito(){
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
                <h5 class="letra2">Carrito</h5>
            </div>

            <div class="col-lg-3">
                <div class="pagar2">
                   <button class="btn btn-warning" onclick="abrir3()">Pagar</button>
                </div>  
            </div>
            
            <div class="col-lg-3">
                <h5 class="letra2" style="text-align:right">Buscar:</h5>
                
            </div>

            <div class="col-lg-3">
                
                <input type="text" id="formulario" class="form-control ">
            </div>

        </div> 
        
        <table id="lppresults" class="table display DataTables" class="table table-bordered order-table" class="card-header" style="color: white">
        
            <tbody style="background-color:#ddac1b; color:black" align="center">
                <tr>
                <td>Cantidad</td>
                <td>Nombre</td>
                <td>Precio</td>
                <td>Modelo</td>
                <td>Imagen</td>
                <td>Total</td>
                <td>Opciones</td>
                </tr>
            </tbody>

            <tbody id="lista" style="color:black" align="center" class="card-header">

            </tbody>
        

        </table>

        <section class="paginacion">
            <div id="options2" class="filter-menu">
                    <ul class="option-set" >
                        <ul id="paginacion2" class="pagination pagination-md">
                            
                        </ul>	
                    </ul>
            </div>
        
        </section>
        
    ` 

    

    const formulario =  document.querySelector('#formulario');
    //const boton = document.querySelector('#boton');
    

    
    formulario.addEventListener('keyup', filtrar2);

    filtrar2();
    var intro = document.getElementById('tamaño2');
    intro.style.width="75%"; 
    intro.style.top="-15%";
    body2='true';
    abrir2();
  
}

var prod2 = [];
const filtrar2 = (llamar)=>{
    const lista = document.querySelector('#lista');
    lista.innerHTML = '';

    prod2 = [];
    n5=0;
    const texto = formulario.value.toLowerCase();

    for(var i=0; i<lista_comprar.length;i++){
       
            let cantidad = lista_comprar[i].cantidad.toLowerCase();
            let nombre = lista_comprar[i].nombre.toLowerCase();
            let precio = lista_comprar[i].precio.toString().toLowerCase();
            let modelo = lista_comprar[i].modelo.toLowerCase();
            let total = (lista_comprar[i].cantidad*lista_comprar[i].precio).toString().toLowerCase();
        
            if( (cantidad.indexOf(texto) !== -1) || (nombre.indexOf(texto) !== -1) || (precio.indexOf(texto) !== -1) || (modelo.indexOf(texto) !== -1) || (total.indexOf(texto) !== -1) ){
                prod2[prod2.length] = { id: lista_comprar[i].id, nombre: lista_comprar[i].nombre, precio: lista_comprar[i].precio, modelo: lista_comprar[i].modelo, cantidad: lista_comprar[i].cantidad, imagen: lista_comprar[i].imagen, cant_disp: lista_comprar[i].cant_disp};
                
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
        eliminado();
	    paginacion2();
        paginacion_eliminar2(id);
	}

    if(lista.innerHTML === ''){
        lista.innerHTML += `
        <td>Producto no encontrado..</td>
        `
    }

    lista.innerHTML += `
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <th style="text-align:right">TOTAL RD$</th>
    <th>${total_compra.toFixed(2)}</th>
    <td></td>
    `
}


function lista_borrar(id,precio,cantidad){
                
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
        lista1 = [];
        
        for(var n=0; n < lista_comprar.length; n++){
            if(lista_comprar[n].id != id){
                lista1[lista1.length]= { id: lista_comprar[n].id, nombre: lista_comprar[n].nombre, precio: lista_comprar[n].precio, modelo: lista_comprar[n].modelo, cantidad: lista_comprar[n].cantidad, imagen: lista_comprar[n].imagen, cant_disp: lista_comprar[n].cant_disp};
                
            }
        }
       // console.log(lista1);
        lista_comprar = lista1;

        const cantidad_producto = document.querySelector('#cantidad_producto');
        cantidad_producto.innerHTML = `
            ${lista_comprar.length}
        `

        mult= cantidad * precio;
        total_compra-= mult;
        const total = document.querySelector('#total');
        total.innerHTML = `
            ${total_compra}
        `
        filtrar2('elimino');
    }

    })
    
} 

/////////////////////////////////PRODUCTO_FAVORITO///////////////////////////////
// var favorito = []
function lista_favoritos(id){
    var encontrado=0;
    for (i=0;i<favorito.length;i++){
        if(favorito[i].id_producto==id){
            encontrado=1;
        
        }
        
    }
    if(encontrado==1){
        Swal.fire({
            type: 'warning',
            title: 'Este producto ya estaba en la lista de favorito'
             
        })
    
    }
    if(encontrado==0){
        agregar_favorito(id);
    
    }
    
    
   
}

function tabla_favorito(){
    const tamano = document.querySelector('#tamaño');
    tamano.innerHTML = `
        <span class="close1" onclick="span('${"true1"}')">×</span>

        <div id="vent">
            
        </div>
    `

    const ventana = document.querySelector('#vent2');
    ventana.innerHTML = `  
        <div class="row">
            <div class="col-lg-6">
                <h5 class="letra2">Producto favorito</h5>
            </div>
            
            <div class="col-lg-3">
                <h5 class="letra2" style="text-align:right">Buscar:</h5>
                
            </div>

            <div class="col-lg-3">
                
                <input type="text" id="formulario" class="form-control ">
            </div>

        </div>
        

        
        <table id="lppresults" class="table display DataTables" style="color: white">
        
            <tbody style="background-color:#ddac1b; color:black;  text-align: center !important">
                <tr>
                <td>Cantidad</td>
                <td>Nombre</td>
                <td>Precio</td>
                <td>Modelo</td>
                <td>Imagen</td>
                <td>Opciones</td>
                </tr>
            </tbody>

            <tbody id="lista" style="color:black" align="center" class="card-header">

            </tbody>
        

        </table>

        <section class="paginacion">
            <div id="options3" class="filter-menu">
                <ul class="option-set" >
                    <ul id="paginacion3" class="pagination pagination-md">
                        
                    </ul>	
                </ul>
            </div>
        
        </section>
        
    ` 
    
   

    const formulario =  document.querySelector('#formulario');
    //const boton = document.querySelector('#boton');

    // boton.addEventListener('click', filtrar)
    formulario.addEventListener('keyup', filtrar3)

    filtrar3();
    
    var intro = document.getElementById('tamaño2');
    intro.style.width="75%"; 
    intro.style.top="-15%";
    body2='true1';
    abrir2();
}

var prod3 = [];
const filtrar3 = (llamar)=>{
    const lista = document.querySelector('#lista'); 
    lista.innerHTML = '';

    prod3 = [];
    var modelo;

    const texto = formulario.value.toLowerCase();

    for (var i = 0; i < favorito.length; i++){ 

        for (j=0;j<productos.length;j++) { 
            
            if(productos[j].id==favorito[i].id_producto){
                let cantidad = productos[j].cantidad.toLowerCase();
                let nombre = productos[j].nombre.toLowerCase();
                let precio = productos[j].precio.toLowerCase();
                for (n = 0; n < categoria.length; n++){
                    if(productos[j].id_modelo == categoria[n].id){
                         modelo = categoria[n].modelo.toLowerCase();
                    }
                }

                if( (cantidad.indexOf(texto) !== -1) || (nombre.indexOf(texto) !== -1) || (precio.indexOf(texto) !== -1) || (modelo.indexOf(texto) !== -1) ){   
                    prod3[prod3.length] = { id: productos[j].id , nombre: productos[j].nombre, precio: productos[j].precio, modelo: modelo, cantidad: productos[j].cantidad, imagen: productos[j].imagen};
                    
                }
                    
            }

            // document.write("|" + i + ":" + j + "| ");
        } 
        // document.write("<BR>");
    
    }

    if( (llamar != 'edito') && (llamar != 'elimino') ){
        valor3(0);
		paginacion3();
    }
    
    const id = [...document.querySelectorAll('#options3 .selected')].map(el => el.id);

	if(llamar == 'elimino'){
        eliminado();
	    paginacion3();
        paginacion_eliminar3(id);
	}

    if(lista.innerHTML === ''){
        lista.innerHTML += `
        <td>Producto no encontrado..</td>
        `
    }

}

function agregar_favorito(id){
                
    $.ajax({
        type:"POST",
        url:"agregar_favorito",
        data: {id_producto: id},
        async: false,
        success:function(favorit){
                
                favorito = favorit;
                agrego_favorito();
   
        }
        
    });
  
}

function borrar_favorito(id){
                
    $.ajax({
        type:"POST",
        url:"delete_favorito",
        data: {id_producto: id},
        async: false,
        success:function(favorit){
                
                favorito = favorit;
                
                filtrar3('elimino');
   
        }
        
    });
  
}
/////////////////////////////////////////////////////////  
function pago(token){
    cerrar3();
   var comprar = JSON.stringify(lista_comprar);
   
    $.ajax({
        type:"POST",
        url:"pago",
        data: {stripeToken : token.id, total_compra: total_compra, comprar},
        async: false,
        success:function(producto){

            lista_comprar = [];
            const cantidad_producto = document.querySelector('#cantidad_producto');
            cantidad_producto.innerHTML = `
                ${lista_comprar.length}
            `

            total_compra= 0;
            const total = document.querySelector('#total');
            total.innerHTML = `
                ${total_compra.toFixed(2)}
            `
            cerrar2();
            if(producto != 1){
                productos=producto;
                filtrar1();
                alert_compra();
            }

            if(producto == 1 || producto == 0){

                $.ajax({
                    type:"POST",
                    url:"todos_productos",
                    async: false,
                    success:function(products){
                        productos=products;
                        filtrar1();
                        if(producto == 0){
                            alert_compra0(); 
                        }
                        if(producto == 1){
                            alert_compra1();
                        }
                        
                       
                            
               
                    }
                    
                });
                
            }
           
            
        }
        
    });
}

// function factura(){
  
//     $.ajax({
//         type:"POST",
//         url:"factura",
//         async: false,
//         success:function(pago){
//                 console.log(pago);
               
            
//         }
        
//     });
// }

function abrir_contrasena(imagen){
    
    const ventana = document.querySelector('#vent');
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
                        <a class="btn btn-warning btn-block" onclick="validar_contrasena()">Guardar</a>
                    </div>

                    <div class="col-lg-6">
                        <a class="btn btn-danger btn-block" onclick="cerrar()">Cancelar</a>
                    </div>
 
                </div>


            </form>

        </div>

    </div>`;

    var intro = document.getElementById('tamaño');
    
    intro.style.width="35%";
    intro.style.top="-5%";
    abrir();

}
////////////////////////////////////////////////////
function abrir_informacion(telefono,correo,imagen){
    
    const ventana = document.querySelector('#vent');
    ventana.innerHTML = `
    <div class="row">
        <div class="col-sm-12 col-md-12 col-sx-12 col-lg-12 mx-auto">

           <div class="col-md-12 col-lg-12">
                <a><img height="75" width="100" src="/imagen1/${imagen}" class='imgRedonda3'></a>
                <h4 class="titulo2"> EDITAR INFORMACION</h4> 
            </div> 

            <form id="editar_informacion"  method="POST" onsubmit="return validar_contrasena();">
                <div class="row">

                    <div class="col-lg-12">
                        <h5 class="nombre3">Teléfono<span style="color:red">*</span></h5>
                        <div class="inputWithIcon jorge">
                        <input type="text" id="telefono" name="telefono" placeholder="Telefono" class="form-control" value="${telefono}">
                        <i class="icon-phone" aria-hidden="true"></i>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-lg-12">
                    <h5 class="nombre3">Correo<span style="color:red">*</span></h5>
                    <div class="inputWithIcon jorge4">
                    <input type="email" id="correo" name="correo" placeholder="Correo" class="form-control" value="${correo}">
                    <i class="icon-email" aria-hidden="true"></i>
                    </div>
                    </div>

                </div>

                <br>
                
                <div class="row">
                    <div class="col-lg-6">
                        <a class="btn btn-warning btn-block" onclick="validar_informacion()">Guardar</a>
                    </div>

                    <div class="col-lg-6">
                        <a class="btn btn-danger btn-block" onclick="cerrar()">Cancelar</a>
                    </div>
 
                </div>


            </form>

        </div>

    </div>`;

    var intro = document.getElementById('tamaño');
    
    intro.style.width="35%";
    intro.style.top="-5%";
    abrir();

}
////////////////////////////////////////////////////
function abrir_imagen(imagen){
   
    const ventana = document.querySelector('#vent');
    ventana.innerHTML = `
        <div class="row">
        <div class="col-md-12 mx-auto" >
            
        
        <div class="card-header" id=titulo>
            <h2 align="center" style="color:black">Editar Imagen</h2>
        </div>
                
        <hr style="color:black" size=3>
    
        <form id="cambiar_imagen"  method="POST" >

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
         
        <div class="contras">
           <a class="btn btn-warning btn-block my-3" onclick="eliminacion_foto()">Eliminar Fotos</a>
        </div>
       
        <div class="row">
            <div class="bont">

                <div class="col-lg-4">
                    <a class="btn btn-warning btn-block my-3" onclick="validar_imagen()">
                        Guardar
                    </a>
                </div>

                <div class="col-lg-4" >
                    <a class="btn btn-danger btn-block my-3" onclick="cerrar()">
                        Cancelar
                    </a>
                </div>
            
            </div>

        </div>

        </div>
        </form>
           
    </div>
    </div>
    
    `

    

   
    
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

    abrir();

    var intro = document.getElementById('tamaño');

    intro.style.width="60%";
    intro.style.top="-15%";

   
    const telefono1 = document.querySelector('#telefono');

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

}

function cambiar_imagen(){
   
    var datos = new FormData(document.getElementById("cambiar_imagen"));
      
    $.ajax({
        type:"POST",
        url:"cambiar_imagen",
        data: datos,
        async: false,
        processData: false,
        contentType: false,
        success:function(datos){
           
            cambiar(datos);

        }    
    });
}

function editar_informacion(){
    var datos=$('#editar_informacion').serialize();

    $.ajax({
        type:"POST",
        url:"editar_informacion",
        data: datos,
        async: false,
        success:function(datos){
            
            cambiar(datos);    
   
        }
        
    });
}

function cambiar_contrasena(){
    var datos=$('#cambiar_contrasena').serialize();

    $.ajax({
        type:"POST",
        url:"cambiar_contrasena",
        data: datos,
        async: false,
        success:function(opcion){
            
            if(opcion == 'confirmacion'){
                cambio();
                cerrar();
            }

            if(opcion == 'invalido'){
                error("Contraseña actual incorrecto!");
                return  false;
            }    
   
        }
        
    });

}

function eliminar_foto(){
    $.ajax({
        type:"POST",
        url:"eliminar_foto",
        async: false,
        success:function(datos){
            
            cambiar(datos,1);
            eliminado();    
   
        }
        
    });
}

function cambiar(datos,uno){
    const admin = document.querySelector('#admin');
    admin.innerHTML = `
    <li class="cursor"><a  onclick="abrir_imagen('${datos[0].imagen}')">Editar imagen</a></li>
    <li class="cursor"><a  onclick="abrir_informacion('${datos[0].telefono}','${datos[0].correo}','${datos[0].imagen}')">Editar informacion</a></li>
    <li class="cursor"><a onclick="abrir_contrasena('${datos[0].imagen}')">Cambiar Contraseña</a></li>
    <li class="cursor"><a onclick="tabla_favorito()">Lista de favorito</a></li>
    <li><a href="/cliente_logout">Cerrar Sesion</a></li>
    `
    const link01 = document.querySelector('#link01');
    link01.innerHTML = `
    <img src='/imagen1/${datos[0].imagen}' class='imgRedonda2'/>
    `
    if(uno != 1){
        editado();
    }
    cerrar();
}