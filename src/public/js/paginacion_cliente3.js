
////////////////////////BAJO_DE_PAGINACION//////////////////////////////////////////
/* <script>	 */
var numero3=0;
function paginacion3(){
    
    const paginacion = document.querySelector('#paginacion3');
    numero3=0;
    if(prod3.length > 5){
        
        paginacion.innerHTML = ``;
        paginacion.innerHTML += `
            <li class="disabled" ><a onclick="anterior3()" >&laquo;</a></li>

            `  
        for (var n = 0; n < prod3.length; n+=5) {
            numero3+=1;
            if(numero3 == 1){
                paginacion.innerHTML += `
            
                <li ><a id="${numero3}" class="selected" onclick="numero13(${numero3}) " >${numero3}</a></li>
                
                `  
            }

            if(numero3 != 1){
                paginacion.innerHTML += `
                
                <li ><a id="${numero3}" class="selected${numero3}" onclick="numero13(${numero3})" >${numero3}</a></li>
                
                `  
            }
        }; 
        paginacion.innerHTML += `
            <li class="disabled2"><a onclick="siguiente3()" >&raquo;</a></li>

            `     
    }
    if( (prod3.length==0) || (prod3.length<=5) ){
        paginacion.innerHTML = ``;
    }
}
   
// </script>
// paginacion();
//////////////////////////////////////////////////////////////////////////////////////
function siguiente3(){
    
    const id = [...document.querySelectorAll('#options3 .selected')].map(el => el.id);
    var a = parseInt(id);
  
    var p= a * 5; 
  
    if(p <= 5){
        const disabled1 = document.querySelector('#options3 .disabled');
        disabled1.classList.replace('disabled', 'disabled1'); 
    } 
   
    if(p < prod3.length){
        const id2 = document.querySelector('#options3 .selected');
    
        id2.classList.replace('selected', 'selected'+id);
      
        
        var m= a+1;
        
        const num2 = document.querySelector('#options3 .selected'+m);
        num2.classList.replace('selected'+m, 'selected');
        
        valor3(p);
    }
   
    var f = p + 5;
    if(f >= prod3.length){
        const disabled2 = document.querySelector('#options3 .disabled2');
        disabled2.classList.replace('disabled2', 'disabled');
    }
};



function anterior3(){
    const id = [...document.querySelectorAll('#options3 .selected')].map(el => el.id);
    var a = parseInt(id);
    var m= a;
    a-=1;
    var p= a * 5; 

    var f = p + 5;
    
    if(f >= prod3.length){
        const disabled2 = document.querySelector('#options3 .disabled');
        disabled2.classList.replace('disabled', 'disabled2');
    }
    
    if(p <= 5){
        const disabled1 = document.querySelector('#options3 .disabled1');
        disabled1.classList.replace('disabled1', 'disabled'); 
    } 

    if(p < prod3.length){
        const id2 = document.querySelector('#options3 .selected');
    
        id2.classList.replace('selected', 'selected'+m);
      
        
        // var m= a+1;
        
        const num2 = document.querySelector('#options3 .selected'+a);
        num2.classList.replace('selected'+a, 'selected');

        var p1= a - 1;
        p1 = p1 * 5;
        valor3(p1);
    }
    
   
};

function numero13(n){

    const id = [...document.querySelectorAll('#options3 .selected')].map(el => el.id);
    // var x = n * 5;
    if(n == 1){
        if(id == numero3){
            const disabled2 = document.querySelector('#options3 .disabled');
            disabled2.classList.replace('disabled', 'disabled2'); 
        }
        const disabled1 = document.querySelector('#options3 .disabled1');
        disabled1.classList.replace('disabled1', 'disabled'); 

        const num1 = document.querySelector('#options3 .selected');
        num1.classList.replace('selected', 'selected'+id); 

        const num2 = document.querySelector('#options3 .selected'+n);
        num2.classList.replace('selected'+n, 'selected'); 
        
        var p = n - 1;
        valor3(p);
    }
   
    if( (n != 1) && (n != numero3) ){
        if(id == 1){
            const disabled1 = document.querySelector('#options3 .disabled');
            disabled1.classList.replace('disabled', 'disabled1'); 
        }
        if(id == numero3){
            const disabled2 = document.querySelector('#options3 .disabled');
            disabled2.classList.replace('disabled', 'disabled2'); 
        }
        const num1 = document.querySelector('#options3 .selected');
        num1.classList.replace('selected', 'selected'+id); 

        const num2 = document.querySelector('#options3 .selected'+n);
        num2.classList.replace('selected'+n, 'selected'); 

        var p = n - 1;
        p= p * 5;
        valor3(p);
    }
    

    if(n == numero3){
        // const num1 = document.querySelector('#options3 .selected');
        if(id == 1){
            const disabled1 = document.querySelector('#options3 .disabled');
            disabled1.classList.replace('disabled', 'disabled1'); 
        }
       
        const disabled2 = document.querySelector('#options3 .disabled2');
        disabled2.classList.replace('disabled2', 'disabled'); 

        const num1 = document.querySelector('#options3 .selected');
        num1.classList.replace('selected', 'selected'+id); 

        const num2 = document.querySelector('#options3 .selected'+n);
        num2.classList.replace('selected'+n, 'selected'); 
        
        var p = n - 1;
        p= p * 5;
        valor3(p);
    }
   
} 

function valor3(p){	
     
    const lista = document.querySelector('#lista');
    lista.innerHTML = '';
    const s= prod3.length - p;

    p = s - 1;
    if(s < 5){ 
        for (var n = 0; n < s; n++) { 
            lista.innerHTML += `
            <td>${prod3[p].cantidad}</td> <td>${prod3[p].nombre}</td> <td>${prod3[p].precio}</td> <td>${prod3[p].modelo}</td>
            <td> <a onclick="imagenes('${prod3[p].imagen}')"><img height="50" width="50" src="/imagen1/${prod3[p].imagen}"></a></td> 
            <td> 
                <a class="btn btn-warning mx-1" onclick="abrir_compra(${prod3[p].id},'${prod3[p].imagen}','${prod3[p].nombre}',${prod3[p].precio},'${prod3[p].modelo}',${prod3[p].cantidad})">
                <img height="25" width="20" src="/img/carrito.png"></a>  

                <a class="btn btn-danger" onclick="borrar_favorito(${prod3[p].id})"> 
                <img height="25" width="20" src="/img/borrar.png"></a> 
            </td>
            `
            p--;
        }   
    }
    
    if(s >= 5){
        for (var n = 0; n < 5; n++) { 
            lista.innerHTML += `
            <td>${prod3[p].cantidad}</td> <td>${prod3[p].nombre}</td> <td>${prod3[p].precio}</td> <td>${prod3[p].modelo}</td>
            <td> <a onclick="imagenes('${prod3[p].imagen}')"><img height="50" width="50" src="/imagen1/${prod3[p].imagen}"></a></td> 
            <td> 
                <a class="btn btn-warning mx-1" onclick="abrir_compra(${prod3[p].id},'${prod3[p].imagen}','${prod3[p].nombre}',${prod3[p].precio},'${prod3[p].modelo}',${prod3[p].cantidad})">
                <img height="25" width="20" src="/img/carrito.png"></a>  

                <a class="btn btn-danger" onclick="borrar_favorito(${prod3[p].id})"> 
                <img height="25" width="20" src="/img/borrar.png"></a> 
            </td>
            `
            p--;
        }  
    }
}    

////////////////////////////////////////////////
function paginacion_eliminar3(id){
  
    if(prod3.length > 5){
        if(id!=1){
            const id2 = document.querySelector('#options3 .selected');
            id2.classList.replace('selected', 'selected'+1);
            const disabled1 = document.querySelector('#options3 .disabled');
            disabled1.classList.replace('disabled', 'disabled1');   
        }

        if(id==numero3){
            const id3 = document.querySelector('#options3 .selected'+id);
            id3.classList.replace('selected'+id, 'selected');
            const disabled2 = document.querySelector('#options3 .disabled2');
            disabled2.classList.replace('disabled2', 'disabled');
            var p= (id-1) * 5;
            valor3(p);
        }

        if(id<numero3 && id!=1){
            const id3 = document.querySelector('#options3 .selected'+id);
            id3.classList.replace('selected'+id, 'selected');
            var p= (id-1) * 5;
            valor3(p);
        }
        
        if(id>numero3){
            const id3 = document.querySelector('#options3 .selected'+(id-1));
            id3.classList.replace('selected'+(id-1), 'selected');
            const disabled2 = document.querySelector('#options3 .disabled2');
            disabled2.classList.replace('disabled2', 'disabled');
            var p= (id-2) * 5;
            valor3(p);
        }

        if(id==1){
            var p= (id-1) * 5;
            valor3(p);
        }
    }

    if(prod3.length <= 5){
        valor3(0);
    }
}

function paginacion_editar3(id){
    if( (id==numero3) && (numero3!=0) ){
        const id1 = document.querySelector('#options3 .selected');
        id1.classList.replace('selected', 'selected'+1);
        const disabled1 = document.querySelector('#options3 .disabled');
        disabled1.classList.replace('disabled', 'disabled1');
        const id2 = document.querySelector('#options3 .selected'+id);
        id2.classList.replace('selected'+id, 'selected');
        const disabled2 = document.querySelector('#options3 .disabled2');
        disabled2.classList.replace('disabled2', 'disabled');
        var p= (id-1) * 5;
        valor3(p);   
    }

    if( (id!=numero3) && (id!=1) && (numero3!=1) && (numero3!=0) ){
        const id1 = document.querySelector('#options3 .selected');
        id1.classList.replace('selected', 'selected'+1);
        const disabled1 = document.querySelector('#options3 .disabled');
        disabled1.classList.replace('disabled', 'disabled1');
        const id2 = document.querySelector('#options3 .selected'+id);
        id2.classList.replace('selected'+id, 'selected');
         var p= (id-1) * 5;
        valor3(p);
    }
     
    if( (numero3==0) || (id==1) ){
        valor3(0);
    }
}
