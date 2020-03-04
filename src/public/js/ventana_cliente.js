const formulario1 =  document.querySelector('#formulario1');
var n10;       
const filtrar1 = ()=>{
   
        prod = [];
        n10=0;
    
        const texto = formulario1.value.toLowerCase();

        for (var i=0; i<productos.length;i++) { 
                
                let nombre = productos[i].nombre.toLowerCase();
                let precio = productos[i].precio.toString().toLowerCase();
                let cantidad = productos[i].cantidad.toString().toLowerCase();
                let modelo = productos[i].modelo.toLowerCase();
                
        
                if( (nombre.indexOf(texto) !== -1) || (precio.indexOf(texto) !== -1) || (cantidad.indexOf(texto) !== -1) || (modelo.indexOf(texto) !== -1) ){ 
                    
                    prod[n10] = { id: productos[i].id, nombre: productos[i].nombre, precio:productos[i].precio, cantidad: productos[i].cantidad, modelo: productos[i].modelo, imagen: productos[i].imagen};
                    n10 +=1;
                    
                }
                    
        } 

        valor(0);
		paginacion();
		 

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

    
}



const lista_comprar = []
var total_compra=0;
var mult;
var nulo=0;
function compra(id,nombre,precio,modelo,cantidad,imagen){
    comprar = document.getElementById("comprar").value;
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
            n1=lista_comprar.length;
            lista_comprar[n1]= { id: id, nombre: nombre, precio: precio, modelo: modelo, cantidad: comprar, imagen: imagen, cant_disp: cantidad};
        }
        
        const cantidad_producto = document.querySelector('#cantidad_producto');
        cantidad_producto.innerHTML = `
        ${lista_comprar.length - nulo}
        `

        mult= comprar * precio;
        total_compra+= mult;
        const total = document.querySelector('#total');
        total.innerHTML = `
        ${total_compra}
        `
  
    }
    cerrar();
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
            <div class="col-lg-6">
                <h5 style="color:black">Carrito</h5>
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
                <th>Cantidad</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Modelo</th>
                <th>Imagen</th>
                <th>Total</th>
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
    
        for(i=lista_comprar.length-1; i>=0 ;i--){

            if(lista_comprar[i].id != ''){
                
                let cantidad = lista_comprar[i].cantidad.toLowerCase();
                let nombre = lista_comprar[i].nombre.toLowerCase();
                let precio = lista_comprar[i].precio.toString().toLowerCase();
                let modelo = lista_comprar[i].modelo.toLowerCase();
                let total = (lista_comprar[i].cantidad*lista_comprar[i].precio).toString().toLowerCase();
            
                if( (cantidad.indexOf(texto) !== -1) || (nombre.indexOf(texto) !== -1) || (precio.indexOf(texto) !== -1) || (modelo.indexOf(texto) !== -1) || (total.indexOf(texto) !== -1) ){
                    lista.innerHTML += `
                    <td>${lista_comprar[i].cantidad}</td> <td>${lista_comprar[i].nombre}</td> <td>${lista_comprar[i].precio}</td> <td>${lista_comprar[i].modelo}</td>
                    <td> <a onclick="imagenes('${lista_comprar[i].imagen}')"><img height="50" width="50" src="/imagen1/${lista_comprar[i].imagen}"></a></td>
                    <td>${lista_comprar[i].cantidad * lista_comprar[i].precio}</td>
                    <td> 
                            <a class="btn btn-warning mx-1" onclick="abrir_compra(${lista_comprar[i].id},'${lista_comprar[i].imagen}','${lista_comprar[i].nombre}',${lista_comprar[i].precio},'${lista_comprar[i].modelo}',${lista_comprar[i].cant_disp})">
                            <img height="25" width="20" src="/img/editar2.png"></a>
                    
                            <a class="btn btn-danger" onclick="lista_borrar(${lista_comprar[i].id},${lista_comprar[i].precio},${lista_comprar[i].cantidad})"> 
                            <img height="25" width="20" src="/img/borrar.png"></a> 
                            
                    </td>
                    `
                }    
            }
        
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
        <td>TOTAL RD$</td>
        <td>${total_compra}</td>
        <td></td>
        `
    }
    formulario.addEventListener('keyup', filtrar)

    filtrar();
     body2='true';
    abrir2();
    var intro = document.getElementById('tamaño2');
  
    intro.style.width="75%";  

  
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
        for(var n=0; n < lista_comprar.length; n++){
            if(lista_comprar[n].id == id){
                lista_comprar[n].id='';
            }
        }
        
        nulo+=1;
        const cantidad_producto = document.querySelector('#cantidad_producto');
        cantidad_producto.innerHTML = `
            ${lista_comprar.length - nulo}
        `

        mult= cantidad * precio;
        total_compra-= mult;
        const total = document.querySelector('#total');
        total.innerHTML = `
            ${total_compra}
        `
        carrito();
    }

    })
    
} 

/////////////////////////////////PRODUCTO_FAVORITO///////////////////////////////
const favorito = []
function lista_favoritos(id){
    var encontrado=0;
    for (i=0;i<favorito.length;i++){
        if(favorito[i]==id){
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
        favorito[favorito.length]=id;
    
        var id_producto = id;
        $(document).ready(function(){
            $.ajax({
                type:"POST",
                url:"/lista_favorito/"+id_cliente+"/"+id_producto,
                data: id_producto,
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
    
    const ventana = document.querySelector('#vent');
    ventana.innerHTML = `  
        <div class="row">
            <div class="col-lg-6">
                <h5 style="color:black">Producto favorito</h5>
            </div>
            
            <div class="col-lg-3">
                <h5 style="color:black; text-align:right">Buscar:</h5>
                
            </div>

            <div class="col-lg-3">
                
                <input type="text" id="formulario" class="form-control ">
            </div>

        </div>
        

        
        <table id="lppresults" class="table display DataTables" style="color: white">
        
            <thead style="background-color:#ddac1b; color:black;  text-align: center !important">
                <tr>
                <th>Cantidad</th>
                <th>Nombre</th>
                <th>Precio</th>
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

        for (i=favorito.length;i>=0;i--){ 

            for (j=0;j<productos.length;j++) { 
                
                if(productos[j].id==favorito[i]){
                    let cantidad = productos[j].cantidad.toLowerCase();
                    let nombre = productos[j].nombre.toLowerCase();
                    let precio = productos[j].precio.toLowerCase();
                    let modelo = productos[j].modelo.toLowerCase();
                    if( (cantidad.indexOf(texto) !== -1) || (nombre.indexOf(texto) !== -1) || (precio.indexOf(texto) !== -1) || (modelo.indexOf(texto) !== -1) ){   
                        lista.innerHTML += `
                        <td>${productos[j].cantidad}</td> <td>${productos[j].nombre}</td> <td>${productos[j].precio}</td> <td>${productos[j].modelo}</td>
                        <td> <a onclick="imagenes('${productos[j].imagen}')"><img height="50" width="50" src="/imagen1/${productos[j].imagen}"></a></td> 
                        <td> 
                            <a class="btn btn-warning mx-1" onclick="abrir_compra(${productos[j].id},'${productos[j].imagen}','${productos[j].nombre}',${productos[j].precio},'${productos[j].modelo}',${productos[j].cantidad})">
                            <img height="25" width="20" src="/img/carrito.png"></a>  

                            <a class="btn btn-danger" onclick="borrar_favorito(${productos[j].id})"> 
                            <img height="25" width="20" src="/img/borrar.png"></a> 
                        </td>
                        `
                    }
                        
                }

                // document.write("|" + i + ":" + j + "| ");
            } 
            // document.write("<BR>");
        
        }

        if(lista.innerHTML === ''){
            lista.innerHTML += `
            <td>Producto no encontrado..</td>
            `
        }

    }


    // boton.addEventListener('click', filtrar)
    formulario.addEventListener('keyup', filtrar)

    filtrar();
    
    
     abrir();
    var intro = document.getElementById('tamaño');
   
   
    intro.style.width="75%";
}


function borrar_favorito(id){
                
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
        for(var n=0; n < favorito.length; n++){
            if(favorito[n] == id){
                favorito[n] = '';
            }
        }
        
        lista_favoritos();
    }

    })
    
}
    
