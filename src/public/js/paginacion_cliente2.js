
////////////////////////BAJO_DE_PAGINACION//////////////////////////////////////////
/* <script>	 */
var numero2=0;
function paginacion2(){
    
    const paginacion = document.querySelector('#paginacion2');
    numero2=0;
    if(prod2.length > 5){
        
        paginacion.innerHTML = ``;
        paginacion.innerHTML += `
            <li class="disabled" ><a onclick="anterior2()" >&laquo;</a></li>

            `  
        for (var n = 0; n < prod2.length; n+=5) {
            numero2+=1;
            if(numero2 == 1){
                paginacion.innerHTML += `
            
                <li ><a id="${numero2}" class="selected" onclick="numero12(${numero2}) " >${numero2}</a></li>
                
                `  
            }

            if(numero2 != 1){
                paginacion.innerHTML += `
                
                <li ><a id="${numero2}" class="selected${numero2}" onclick="numero12(${numero2})" >${numero2}</a></li>
                
                `  
            }
        }; 
        paginacion.innerHTML += `
            <li class="disabled2"><a onclick="siguiente2()" >&raquo;</a></li>

            `     
    }
    if( (prod2.length==0) || (prod2.length<=5) ){
        paginacion.innerHTML = ``;
    }
}
   
// </script>
// paginacion();
//////////////////////////////////////////////////////////////////////////////////////
function siguiente2(){
    
    const id = [...document.querySelectorAll('#options2 .selected')].map(el => el.id);
    var a = parseInt(id);
  
    var p= a * 5; 
  
    if(p <= 5){
        const disabled1 = document.querySelector('#options2 .disabled');
        disabled1.classList.replace('disabled', 'disabled1'); 
    } 
   
    if(p < prod2.length){
        const id2 = document.querySelector('#options2 .selected');
    
        id2.classList.replace('selected', 'selected'+id);
      
        
        var m= a+1;
        
        const num2 = document.querySelector('#options2 .selected'+m);
        num2.classList.replace('selected'+m, 'selected');
        
        valor2(p);
    }
   
    var f = p + 5;
    if(f >= prod2.length){
        const disabled2 = document.querySelector('#options2 .disabled2');
        disabled2.classList.replace('disabled2', 'disabled');
    }
};



function anterior2(){
    const id = [...document.querySelectorAll('#options2 .selected')].map(el => el.id);
    var a = parseInt(id);
    var m= a;
    a-=1;
    var p= a * 5; 

    var f = p + 5;
    
    if(f >= prod2.length){
        const disabled2 = document.querySelector('#options2 .disabled');
        disabled2.classList.replace('disabled', 'disabled2');
    }
    
    if(p <= 5){
        const disabled1 = document.querySelector('#options2 .disabled1');
        disabled1.classList.replace('disabled1', 'disabled'); 
    } 

    if(p < prod2.length){
        const id2 = document.querySelector('#options2 .selected');
    
        id2.classList.replace('selected', 'selected'+m);
      
        
        // var m= a+1;
        
        const num2 = document.querySelector('#options2 .selected'+a);
        num2.classList.replace('selected'+a, 'selected');

        var p1= a - 1;
        p1 = p1 * 5;
        valor2(p1);
    }
    
   
};

function numero12(n){

    const id = [...document.querySelectorAll('#options2 .selected')].map(el => el.id);
    // var x = n * 5;
    if(n == 1){
        if(id == numero2){
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
        valor2(p);
    }
   
    if( (n != 1) && (n != numero2) ){
        if(id == 1){
            const disabled1 = document.querySelector('#options2 .disabled');
            disabled1.classList.replace('disabled', 'disabled1'); 
        }
        if(id == numero2){
            const disabled2 = document.querySelector('#options2 .disabled');
            disabled2.classList.replace('disabled', 'disabled2'); 
        }
        const num1 = document.querySelector('#options2 .selected');
        num1.classList.replace('selected', 'selected'+id); 

        const num2 = document.querySelector('#options2 .selected'+n);
        num2.classList.replace('selected'+n, 'selected'); 

        var p = n - 1;
        p= p * 5;
        valor2(p);
    }
    

    if(n == numero2){
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
        p= p * 5;
        valor2(p);
    }
   
} 

function valor2(p){	
     
    const lista = document.querySelector('#lista');
    lista.innerHTML = '';
    const s= prod2.length - p;

    p = s - 1;
    if(s < 5){ 
        for (var n = 0; n < s; n++) { 
            lista.innerHTML += `
            <td>${prod2[p].cantidad}</td> <td>${prod2[p].nombre}</td> <td>${prod2[p].precio}</td> <td>${prod2[p].modelo}</td>
            <td> <a onclick="imagenes('${prod2[p].imagen}')"><img height="50" width="50" src="/imagen1/${prod2[p].imagen}"></a></td>
            <td>${prod2[p].cantidad * prod2[p].precio}</td>
            <td> 
                    <a class="btn btn-warning mx-1" onclick="abrir_compra(${prod2[p].id},'${prod2[p].imagen}','${prod2[p].nombre}',${prod2[p].precio},'${prod2[p].modelo}',${prod2[p].cant_disp})">
                    <img height="25" width="20" src="/img/editar2.png"></a>
            
                    <a class="btn btn-danger" onclick="lista_borrar(${prod2[p].id},${prod2[p].precio},${prod2[p].cantidad})"> 
                    <img height="25" width="20" src="/img/borrar.png"></a> 
                    
            </td>
            `
            p--;
        }   
    }
    
    if(s >= 5){
        for (var n = 0; n < 5; n++) { 
            lista.innerHTML += `
            <td>${prod2[p].cantidad}</td> <td>${prod2[p].nombre}</td> <td>${prod2[p].precio}</td> <td>${prod2[p].modelo}</td>
            <td> <a onclick="imagenes('${prod2[p].imagen}')"><img height="50" width="50" src="/imagen1/${prod2[p].imagen}"></a></td>
            <td>${prod2[p].cantidad * prod2[p].precio}</td>
            <td> 
                    <a class="btn btn-warning mx-1" onclick="abrir_compra(${prod2[p].id},'${prod2[p].imagen}','${prod2[p].nombre}',${prod2[p].precio},'${prod2[p].modelo}',${prod2[p].cant_disp})">
                    <img height="25" width="20" src="/img/editar2.png"></a>
            
                    <a class="btn btn-danger" onclick="lista_borrar(${prod2[p].id},${prod2[p].precio},${prod2[p].cantidad})"> 
                    <img height="25" width="20" src="/img/borrar.png"></a> 
                    
            </td>
            `
            p--;
        }  
    }
}    

////////////////////////////////////////////////
function paginacion_eliminar2(id){
  
    if(prod2.length > 5){
        if(id!=1){
            const id2 = document.querySelector('#options2 .selected');
            id2.classList.replace('selected', 'selected'+1);
            const disabled1 = document.querySelector('#options2 .disabled');
            disabled1.classList.replace('disabled', 'disabled1');   
        }

        if(id==numero2){
            const id3 = document.querySelector('#options2 .selected'+id);
            id3.classList.replace('selected'+id, 'selected');
            const disabled2 = document.querySelector('#options2 .disabled2');
            disabled2.classList.replace('disabled2', 'disabled');
            var p= (id-1) * 5;
            valor2(p);
        }

        if(id<numero2 && id!=1){
            const id3 = document.querySelector('#options2 .selected'+id);
            id3.classList.replace('selected'+id, 'selected');
            var p= (id-1) * 5;
            valor2(p);
        }
        
        if(id>numero2){
            const id3 = document.querySelector('#options2 .selected'+(id-1));
            id3.classList.replace('selected'+(id-1), 'selected');
            const disabled2 = document.querySelector('#options2 .disabled2');
            disabled2.classList.replace('disabled2', 'disabled');
            var p= (id-2) * 5;
            valor2(p);
        }

        if(id==1){
            var p= (id-1) * 5;
            valor2(p);
        }
    }

    if(prod2.length <= 5){
        valor2(0);
    }
}

function paginacion_editar2(id){
    if( (id==numero2) && (numero2!=0) ){
        const id1 = document.querySelector('#options2 .selected');
        id1.classList.replace('selected', 'selected'+1);
        const disabled1 = document.querySelector('#options2 .disabled');
        disabled1.classList.replace('disabled', 'disabled1');
        const id2 = document.querySelector('#options2 .selected'+id);
        id2.classList.replace('selected'+id, 'selected');
        const disabled2 = document.querySelector('#options2 .disabled2');
        disabled2.classList.replace('disabled2', 'disabled');
        var p= (id-1) * 5;
        valor2(p);   
    }

    if( (id!=numero2) && (id!=1) && (numero2!=1) && (numero2!=0) ){
        const id1 = document.querySelector('#options2 .selected');
        id1.classList.replace('selected', 'selected'+1);
        const disabled1 = document.querySelector('#options2 .disabled');
        disabled1.classList.replace('disabled', 'disabled1');
        const id2 = document.querySelector('#options2 .selected'+id);
        id2.classList.replace('selected'+id, 'selected');
         var p= (id-1) * 5;
        valor2(p);
    }
     
    if( (numero2==0) || (id==1) ){
        valor2(0);
    }
}
