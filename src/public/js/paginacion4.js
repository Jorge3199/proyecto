
////////////////////////BAJO_DE_PAGINACION//////////////////////////////////////////
/* <script>	 */
var numero4=0;
function paginacion4(){
    
    const paginacion = document.querySelector('#paginacion4');
    numero4=0;
    if(prod4.length > 10){
        
        paginacion.innerHTML = ``;
        paginacion.innerHTML += `
            <li class="disabled" ><a onclick="anterior2()" >&laquo;</a></li>

            `  
        for (var n = 0; n < prod4.length; n+=10) {
            numero4+=1;
            if(numero4 == 1){
                paginacion.innerHTML += `
            
                <li ><a id="${numero4}" class="selected" onclick="numero12(${numero4}) " >${numero4}</a></li>
                
                `  
            }

            if(numero4 != 1){
                paginacion.innerHTML += `
                
                <li ><a id="${numero4}" class="selected${numero4}" onclick="numero12(${numero4})" >${numero4}</a></li>
                
                `  
            }
        }; 
        paginacion.innerHTML += `
            <li class="disabled2"><a onclick="siguiente2()" >&raquo;</a></li>

            `     
    }
    if( (prod4.length==0) || (prod4.length<=10) ){
        paginacion.innerHTML = ``;
    }
}
   
// </script>
// paginacion();
//////////////////////////////////////////////////////////////////////////////////////
function siguiente2(){
    
    const id = [...document.querySelectorAll('#options2 .selected')].map(el => el.id);
    var a = parseInt(id);
  
    var p= a * 10; 
  
    if(p <= 10){
        const disabled1 = document.querySelector('#options2 .disabled');
        disabled1.classList.replace('disabled', 'disabled1'); 
    } 
   
    if(p < prod4.length){
        const id2 = document.querySelector('#options2 .selected');
    
        id2.classList.replace('selected', 'selected'+id);
      
        
        var m= a+1;
        
        const num2 = document.querySelector('#options2 .selected'+m);
        num2.classList.replace('selected'+m, 'selected');
        
        valor4(p);
    }
   
    var f = p + 10;
    if(f >= prod4.length){
        const disabled2 = document.querySelector('#options2 .disabled2');
        disabled2.classList.replace('disabled2', 'disabled');
    }
};



function anterior2(){
    const id = [...document.querySelectorAll('#options2 .selected')].map(el => el.id);
    var a = parseInt(id);
    var m= a;
    a-=1;
    var p= a * 10; 

    var f = p + 10;
    
    if(f >= prod4.length){
        const disabled2 = document.querySelector('#options2 .disabled');
        disabled2.classList.replace('disabled', 'disabled2');
    }
    
    if(p <= 10){
        const disabled1 = document.querySelector('#options2 .disabled1');
        disabled1.classList.replace('disabled1', 'disabled'); 
    } 

    if(p < prod4.length){
        const id2 = document.querySelector('#options2 .selected');
    
        id2.classList.replace('selected', 'selected'+m);
      
        
        // var m= a+1;
        
        const num2 = document.querySelector('#options2 .selected'+a);
        num2.classList.replace('selected'+a, 'selected');

        var p1= a - 1;
        p1 = p1 * 10;
        valor4(p1);
    }
    
   
};

function numero12(n){

    const id = [...document.querySelectorAll('#options2 .selected')].map(el => el.id);
    // var x = n * 10;
    if(n == 1){
        if(id == numero4){
            const disabled2 = document.querySelector('#options2 .disabled');
            disabled2.classList.replace('disabled', 'disabled2'); 
        }
        const disabled1 = document.querySelector('#options2 .disabled1');
        disabled1.classList.replace('disabled1', 'disabled'); 

        const num1 = document.querySelector('#options2 .selected');
        num1.classList.replace('selected', 'selected'+id); 

        const num2 = document.querySelector('#options2 .selected'+n);
        num2.classList.replace('selected'+n, 'selected'); 
        
        var p = n - 1;
        valor4(p);
    }
   
    if( (n != 1) && (n != numero4) ){
        if(id == 1){
            const disabled1 = document.querySelector('#options2 .disabled');
            disabled1.classList.replace('disabled', 'disabled1'); 
        }
        if(id == numero4){
            const disabled2 = document.querySelector('#options2 .disabled');
            disabled2.classList.replace('disabled', 'disabled2'); 
        }
        const num1 = document.querySelector('#options2 .selected');
        num1.classList.replace('selected', 'selected'+id); 

        const num2 = document.querySelector('#options2 .selected'+n);
        num2.classList.replace('selected'+n, 'selected'); 

        var p = n - 1;
        p= p * 10;
        valor4(p);
    }
    

    if(n == numero4){
        // const num1 = document.querySelector('#options2 .selected');
        if(id == 1){
            const disabled1 = document.querySelector('#options2 .disabled');
            disabled1.classList.replace('disabled', 'disabled1'); 
        }
       
        const disabled2 = document.querySelector('#options2 .disabled2');
        disabled2.classList.replace('disabled2', 'disabled'); 

        const num1 = document.querySelector('#options2 .selected');
        num1.classList.replace('selected', 'selected'+id); 

        const num2 = document.querySelector('#options2 .selected'+n);
        num2.classList.replace('selected'+n, 'selected'); 
        
        var p = n - 1;
        p= p * 10;
        valor4(p);
    }
   
} 

function valor4(p){	
     
    const lista = document.querySelector('#lista');
    lista.innerHTML = '';
    const s= prod4.length - p;

    p = s - 1;
    if(s < 10){ 
        for (var n = 0; n < s; n++) { 
            let fecha_hora = prod4[p].fecha_hora.split(" ");
            lista.innerHTML += `
            <td>${prod4[p].nombre}</td> <td>${prod4[p].apellido}</td> <td>${prod4[p].cedula}</td> 
            <td> <a onclick="imagenes('${prod4[p].imagen}')"><img src="/imagen1/${prod4[p].imagen}" class='imgRedonda2'></a></td>
            <td>${prod4[p].total}</td> <td>${fecha_hora[0]}</td> <td>${fecha_hora[1]}</td>
            <td> 
                <a class="btn btn-warning mx-1" onclick="abrir_factura(${prod4[p].id_cliente},'${prod4[p].nombre}','${prod4[p].apellido}','${prod4[p].direccion}',${prod4[p].telefono},${prod4[p].total},'${prod4[p].fecha_hora}')">
                <img height="25" width="20" src="/img/bill.png"></a>  

                <a class="btn btn-success" onclick="confirmar4(${prod4[p].id_cliente},'${prod4[p].fecha_hora}')"> 
                <img height="25" width="20" src="/img/updated.png"></a> 
            </td>
            `
            p--;
        }   
    }
    
    if(s >= 10){
        for (var n = 0; n < 10; n++) { 
            let fecha_hora = prod4[p].fecha_hora.split(" ");
            lista.innerHTML += `
            <td>${prod4[p].nombre}</td> <td>${prod4[p].apellido}</td> <td>${prod4[p].cedula}</td> 
            <td> <a onclick="imagenes('${prod4[p].imagen}')"><img src="/imagen1/${prod4[p].imagen}" class='imgRedonda2'></a></td>
            <td>${prod4[p].total}</td> <td>${fecha_hora[0]}</td> <td>${fecha_hora[1]}</td>
            <td> 
                <a class="btn btn-warning mx-1" onclick="abrir_factura(${prod4[p].id_cliente},'${prod4[p].nombre}','${prod4[p].apellido}','${prod4[p].direccion}',${prod4[p].telefono},${prod4[p].total},'${prod4[p].fecha_hora}')">
                <img height="25" width="20" src="/img/bill.png"></a>  

                <a class="btn btn-success" onclick="confirmar4(${prod4[p].id_cliente},'${prod4[p].fecha_hora}')"> 
                <img height="25" width="20" src="/img/updated.png"></a> 
            </td>
            `
            p--;
        }  
    }
}    

function valor04(p){	
     
    const lista = document.querySelector('#lista');
    lista.innerHTML = '';
    const s= prod4.length - p;

    p = s - 1;
    if(s < 10){ 
        for (var n = 0; n < s; n++) { 
            let fecha_hora = prod4[p].fecha_hora.split(" ");
            lista.innerHTML += `
            <td>${prod4[p].nombre}</td> <td>${prod4[p].apellido}</td> <td>${prod4[p].cedula}</td> 
            <td> <a onclick="imagenes('${prod4[p].imagen}')"><img src="/imagen1/${prod4[p].imagen}" class='imgRedonda2'></a></td>
            <td>${prod4[p].total}</td> <td>${fecha_hora[0]}</td> <td>${fecha_hora[1]}</td>
            <td> 
                <a class="btn btn-warning mx-1" onclick="abrir_factura(${prod4[p].id_cliente},'${prod4[p].nombre}','${prod4[p].apellido}','${prod4[p].direccion}',${prod4[p].telefono},${prod4[p].total},'${prod4[p].fecha_hora}')">
                <img height="25" width="20" src="/img/bill.png"></a>  

                <a class="btn btn-success" onclick="confirmar04(${prod4[p].id_cliente},'${prod4[p].fecha_hora}')"> 
                <img height="25" width="20" src="/img/share.png"></a> 
            </td>
            `
            p--;
        }   
    }
    
    if(s >= 10){
        for (var n = 0; n < 10; n++) { 
            let fecha_hora = prod4[p].fecha_hora.split(" ");
            lista.innerHTML += `
            <td>${prod4[p].nombre}</td> <td>${prod4[p].apellido}</td> <td>${prod4[p].cedula}</td> 
            <td> <a onclick="imagenes('${prod4[p].imagen}')"><img src="/imagen1/${prod4[p].imagen}" class='imgRedonda2'></a></td>
            <td>${prod4[p].total}</td> <td>${fecha_hora[0]}</td> <td>${fecha_hora[1]}</td>
            <td> 
                <a class="btn btn-warning mx-1" onclick="abrir_factura(${prod4[p].id_cliente},'${prod4[p].nombre}','${prod4[p].apellido}','${prod4[p].direccion}',${prod4[p].telefono},${prod4[p].total},'${prod4[p].fecha_hora}')">
                <img height="25" width="20" src="/img/bill.png"></a>  

                <a class="btn btn-success" onclick="confirmar04(${prod4[p].id_cliente},'${prod4[p].fecha_hora}')"> 
                <img height="25" width="20" src="/img/share.png"></a> 
            </td>
            `
            p--;
        }  
    }
} 

////////////////////////////////////////////////
function paginacion_eliminar4(id, dos){
  
    if(prod4.length > 10){
        if(id!=1){
            const id2 = document.querySelector('#options2 .selected');
            id2.classList.replace('selected', 'selected'+1);
            const disabled1 = document.querySelector('#options2 .disabled');
            disabled1.classList.replace('disabled', 'disabled1');   
        }

        if(id==numero4){
            const id3 = document.querySelector('#options2 .selected'+id);
            id3.classList.replace('selected'+id, 'selected');
            const disabled2 = document.querySelector('#options2 .disabled2');
            disabled2.classList.replace('disabled2', 'disabled');
            var p= (id-1) * 10;
            if(dos != 2){
                valor4(p);
            }
            if(dos == 2){
                valor04(p);
            }
         
        }

        if(id<numero4 && id!=1){
            const id3 = document.querySelector('#options2 .selected'+id);
            id3.classList.replace('selected'+id, 'selected');
            var p= (id-1) * 10;
            if(dos != 2){
                valor4(p);
            }
            if(dos == 2){
                valor04(p);
            }
        }
        
        if(id>numero4){
            const id3 = document.querySelector('#options2 .selected'+(id-1));
            id3.classList.replace('selected'+(id-1), 'selected');
            const disabled2 = document.querySelector('#options2 .disabled2');
            disabled2.classList.replace('disabled2', 'disabled');
            var p= (id-2) * 10;
            if(dos != 2){
                valor4(p);
            }
            if(dos == 2){
                valor04(p);
            }
           
        }

        if(id==1){
            var p= (id-1) * 10;
            if(dos != 2){
                valor4(p);
            }
            if(dos == 2){
                valor04(p);
            }
        }
    }

    if(prod4.length <= 10){
        if(dos != 2){
            valor4(0);
        }
        if(dos == 2){
            valor04(0);
        }
    }
}

function paginacion_editar4(id){
    if( (id==numero4) && (numero4!=0) ){
        const id1 = document.querySelector('#options2 .selected');
        id1.classList.replace('selected', 'selected'+1);
        const disabled1 = document.querySelector('#options2 .disabled');
        disabled1.classList.replace('disabled', 'disabled1');
        const id2 = document.querySelector('#options2 .selected'+id);
        id2.classList.replace('selected'+id, 'selected');
        const disabled2 = document.querySelector('#options2 .disabled2');
        disabled2.classList.replace('disabled2', 'disabled');
        var p= (id-1) * 10;
        valor4(p);   
    }

    if( (id!=numero4) && (id!=1) && (numero4!=1) && (numero4!=0) ){
        const id1 = document.querySelector('#options2 .selected');
        id1.classList.replace('selected', 'selected'+1);
        const disabled1 = document.querySelector('#options2 .disabled');
        disabled1.classList.replace('disabled', 'disabled1');
        const id2 = document.querySelector('#options2 .selected'+id);
        id2.classList.replace('selected'+id, 'selected');
         var p= (id-1) * 10;
        valor4(p);
    }
     
    if( (numero4==0) || (id==1) ){
        valor4(0);
    }
}
