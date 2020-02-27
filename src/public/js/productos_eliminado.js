function productos_eliminado(){
    const ventana = document.querySelector('#vent');
    ventana.innerHTML = `
    
    <div class="row">
        <h5 style="color:black; text-align: start">Buscar Producto</h5>
        <div class="col-lg-4">
            
            <input type="text" id="formulario" class="form-control ">
        </div>

    </div>

    <h1 style="color:black">Productos Eliminado</h1>
    <table id="lppresults" class="table display DataTables" class="table table-bordered order-table" class="card-header" style="color: white">
    
        <thead style="background-color:#ddac1b; color:black" align="center">
            <tr>
            <th>Cantidad</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Imagen</th>
            <th>Modelo</th>
            <th>Opciones</th>
            </tr>
        </thead>

        <tbody id="lista" style="color:black" align="center" class="card-header">

        </tbody>
    

    </table>
    
` 
const lista = document.querySelector('#resultado');

for(i=eliminado.length-1; i>=0 ;i--){

     lista.innerHTML += `
            <td>${eliminado[i].cantidad}</td> <td>${eliminado[i].nombre}</td> <td>${eliminado[i].precio}</td> 
            <td> <a onclick="imagenes('${eliminado[i].imagen}')"><img height="50" width="50" src="/imagen1/${eliminado[i].imagen}"></a></td>
            <td>${eliminado[i].modelo}</td>
            <td> 
                    <a class="btn btn-warning mx-1" onclick="abrir(${eliminado[i].id},'${eliminado[i].imagen}','${eliminado[i].nombre}',${eliminado[i].precio}, ${eliminado[i].cant_disp})">
                    <img height="25" width="20" src="/img/editar2.png"></a>
            
                    <a class="btn btn-danger" onclick="lista_borrar(${eliminado[i].id},${eliminado[i].precio},${eliminado[i].cantidad})"> 
                    <img height="25" width="20" src="/img/borrar.png"></a> 
                    
            </td>
            `
           
    

}

var intro = document.getElementById('tamaño');
var intro1 = document.getElementById ('openModal');

intro.style.width="75%";  
intro1.style.top= "-45px";
}