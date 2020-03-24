function valor5(p){	
     
    const lista = document.querySelector('#lista');
    lista.innerHTML = '';
    const s= prod5.length - p;

    p = s - 1;
    if(s < 10){ 
        for (var n = 0; n < s; n++) { 
          
            lista.innerHTML += `
            <td>${prod5[p].nombre}</td> <td>${prod5[p].apellido}</td> <td>${prod5[p].sexo}</td>
           <td>${prod5[p].direccion}</td> <td>${prod5[p].telefono}</td> <td>${prod5[p].cedula}</td> <td>${prod5[p].correo}</td>
            <td> <a onclick="imagenes('${prod5[p].imagen}')"><img src="/imagen1/${prod5[p].imagen}" class='imgRedonda2'></a></td>
        
            <td> 
                <a class="btn btn-warning mx-1" onclick="abrir_factura(${prod5[p].id_cliente},'${prod5[p].nombre}','${prod5[p].apellido}','${prod5[p].direccion}',${prod5[p].telefono},${prod5[p].total},'${prod5[p].fecha_hora}')">
                <img height="25" width="20" src="/img/editar2.png"></a>  
                 
                <a class="btn btn-danger" onclick="confirmar5(${prod5[p].id})"> 
                <img height="25" width="20" src="/img/borrar.png"></a> 
            </td>
            `
            p--;
        }   
    }
    
    if(s >= 10){
        for (var n = 0; n < 10; n++) { 
           
            lista.innerHTML += `
            <td>${prod5[p].nombre}</td> <td>${prod5[p].apellido}</td> <td>${prod5[p].cedula}</td> 
            <td> <a onclick="imagenes('${prod5[p].imagen}')"><img src="/imagen1/${prod5[p].imagen}" class='imgRedonda2'></a></td>
            <td>${prod5[p].total}</td> <td>${fecha_hora[0]}</td> <td>${fecha_hora[1]}</td>
            <td> 
                <a class="btn btn-warning mx-1" onclick="abrir_factura(${prod5[p].id_cliente},'${prod5[p].nombre}','${prod5[p].apellido}','${prod5[p].direccion}',${prod5[p].telefono},${prod5[p].total},'${prod5[p].fecha_hora}')">
                <img height="25" width="20" src="/img/invoice.png"></a>  

                <a class="btn btn-success" onclick="confirmar5(${prod5[p].id_cliente},'${prod5[p].fecha_hora}')"> 
                <img height="25" width="20" src="/img/updated.png"></a> 
            </td>
            `
            p--;
        }  
    }
}    

////////////////////////////////////////////////
function valor05(p){	
    const lista = document.querySelector('#lista');
    lista.innerHTML = '';
    const s= prod5.length - p;
    p = s - 1;
    if(s < 10){
        for (var n = 0; n < s; n++) { 
          
            lista.innerHTML += `
            <td>${prod5[p].nombre}</td> <td>${prod5[p].apellido}</td> <td>${prod5[p].sexo}</td>
           <td>${prod5[p].direccion}</td> <td>${prod5[p].telefono}</td> <td>${prod5[p].cedula}</td> <td>${prod5[p].correo}</td>
            <td> <a onclick="imagenes('${prod5[p].imagen}')"><img src="/imagen1/${prod5[p].imagen}" class='imgRedonda2'></a></td>
        
            <td> 
                <a class="btn btn-warning mx-1" onclick="abrir_factura(${prod5[p].id_cliente},'${prod5[p].nombre}','${prod5[p].apellido}','${prod5[p].direccion}',${prod5[p].telefono},${prod5[p].total},'${prod5[p].fecha_hora}')">
                <img height="25" width="20" src="/img/editar2.png"></a>  
                 
                <a class="btn btn-success" onclick="confirmar05(${prod5[p].id})"> 
                <img height="25" width="20" src="/img/share.png"></a> 
            </td>
            `
            p--;
        }   
    }
    
    if(s >= 10){
        for (var n = 0; n < 10; n++) { 
           
            lista.innerHTML += `
            <td>${prod5[p].nombre}</td> <td>${prod5[p].apellido}</td> <td>${prod5[p].sexo}</td>
           <td>${prod5[p].direccion}</td> <td>${prod5[p].telefono}</td> <td>${prod5[p].cedula}</td> <td>${prod5[p].correo}</td>
            <td> <a onclick="imagenes('${prod5[p].imagen}')"><img src="/imagen1/${prod5[p].imagen}" class='imgRedonda2'></a></td>
        
            <td> 
                <a class="btn btn-warning mx-1" onclick="abrir_factura(${prod5[p].id_cliente},'${prod5[p].nombre}','${prod5[p].apellido}','${prod5[p].direccion}',${prod5[p].telefono},${prod5[p].total},'${prod5[p].fecha_hora}')">
                <img height="25" width="20" src="/img/editar2.png"></a>  
                 
                <a class="btn btn-success" onclick="confirmar05(${prod5[p].id})"> 
                <img height="25" width="20" src="/img/share.png"></a> 
            </td>
            `
            p--;
        }  
    }
} 
function paginacion_eliminar5(id, dos){
  
    if(prod5.length > 10){
        if(id!=1){
            const id2 = document.querySelector('#options2 .selected');
            id2.classList.replace('selected', 'selected'+1);
            const disabled1 = document.querySelector('#options2 .disabled');
            disabled1.classList.replace('disabled', 'disabled1');   
        }

        if(id==numero5){
            const id3 = document.querySelector('#options2 .selected'+id);
            id3.classList.replace('selected'+id, 'selected');
            const disabled2 = document.querySelector('#options2 .disabled2');
            disabled2.classList.replace('disabled2', 'disabled');
            var p= (id-1) * 10;
            if(dos != 2){
                valor5(p);
            }
            if(dos == 2){
                valor05(p);
            }
           
        }

        if(id<numero5 && id!=1){
            const id3 = document.querySelector('#options2 .selected'+id);
            id3.classList.replace('selected'+id, 'selected');
            var p= (id-1) * 10;
            if(dos != 2){
                valor5(p);
            }
            if(dos == 2){
                valor05(p);
            }
        }
        
        if(id>numero5){
            const id3 = document.querySelector('#options2 .selected'+(id-1));
            id3.classList.replace('selected'+(id-1), 'selected');
            const disabled2 = document.querySelector('#options2 .disabled2');
            disabled2.classList.replace('disabled2', 'disabled');
            var p= (id-2) * 10;
            if(dos != 2){
                valor5(p);
            }
            if(dos == 2){
                valor05(p);
            }
        }

        if(id==1){
            var p= (id-1) * 10;
            if(dos != 2){
                valor5(p);
            }
            if(dos == 2){
                valor05(p);
            }
        }
    }

    if(prod5.length <= 10){
        if(dos != 2){
            valor5(0);
        }
        if(dos == 2){
            valor05(0);
        }
    }
}

function paginacion_editar5(id){
    if( (id==numero5) && (numero5!=0) ){
        const id1 = document.querySelector('#options2 .selected');
        id1.classList.replace('selected', 'selected'+1);
        const disabled1 = document.querySelector('#options2 .disabled');
        disabled1.classList.replace('disabled', 'disabled1');
        const id2 = document.querySelector('#options2 .selected'+id);
        id2.classList.replace('selected'+id, 'selected');
        const disabled2 = document.querySelector('#options2 .disabled2');
        disabled2.classList.replace('disabled2', 'disabled');
        var p= (id-1) * 10;
        valor5(p);   
    }

    if( (id!=numero5) && (id!=1) && (numero5!=1) && (numero5!=0) ){
        const id1 = document.querySelector('#options2 .selected');
        id1.classList.replace('selected', 'selected'+1);
        const disabled1 = document.querySelector('#options2 .disabled');
        disabled1.classList.replace('disabled', 'disabled1');
        const id2 = document.querySelector('#options2 .selected'+id);
        id2.classList.replace('selected'+id, 'selected');
         var p= (id-1) * 10;
        valor5(p);
    }
     
    if( (numero5==0) || (id==1) ){
        valor5(0);
    }
}
