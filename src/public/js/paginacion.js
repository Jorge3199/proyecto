var prod = [];
var n10 = 0;

////////////////////////BAJO_DE_PAGINACION//////////////////////////////////////////
/* <script>	 */
var numero=0;
function paginacion(){
    console.log(prod);
    const paginacion = document.querySelector('#paginacion');
    numero=0;
    if(prod.length > 8){
        
        paginacion.innerHTML = ``;
        paginacion.innerHTML += `
            <li class="disabled" ><a onclick="anterior()" >&laquo;</a></li>

            `  
        for (var n = 0; n < prod.length; n+=8) {
            numero+=1;
            if(numero == 1){
                paginacion.innerHTML += `
            
                <li ><a id="${numero}" class="selected" onclick="numero1(${numero}) " >${numero}</a></li>
                
                `  
            }

            if(numero != 1){
                paginacion.innerHTML += `
                
                <li ><a id="${numero}" class="selected${numero}" onclick="numero1(${numero})" >${numero}</a></li>
                
                `  
            }
        }; 
        paginacion.innerHTML += `
            <li class="disabled2"><a onclick="siguiente()" >&raquo;</a></li>

            `
        

    }
;
    if( (prod.length==0) || (prod.length<=8) ){
        paginacion.innerHTML = ``;
    }
}
   
// </script>
paginacion();

//////////////////////////////////////////////////////////////////////////////////////
function siguiente(){
    
    const id = [...document.querySelectorAll('#options1 .selected')].map(el => el.id);
    var a = parseInt(id);
  
    var p= a * 8; 
  
    if(p <= 8){
        const disabled1 = document.querySelector('#options1 .disabled');
        disabled1.classList.replace('disabled', 'disabled1'); 
    } 
   
    if(p < prod.length){
        const id2 = document.querySelector('#options1 .selected');
    
        id2.classList.replace('selected', 'selected'+id);
      
        
        var m= a+1;
        
        const num2 = document.querySelector('#options1 .selected'+m);
        num2.classList.replace('selected'+m, 'selected');
        
        valor(p);
    }
   
    var f = p + 8;
    if(f >= prod.length){
        const disabled2 = document.querySelector('#options1 .disabled2');
        disabled2.classList.replace('disabled2', 'disabled');
    }
};



function anterior(){
    const id = [...document.querySelectorAll('#options1 .selected')].map(el => el.id);
    var a = parseInt(id);
    var m= a;
    a-=1;
    var p= a * 8; 

    var f = p + 8;
    if(f >= prod.length){
        const disabled2 = document.querySelector('#options1 .disabled');
        disabled2.classList.replace('disabled', 'disabled2');
    }
    
    if(p <= 8){
        const disabled1 = document.querySelector('#options1 .disabled1');
        disabled1.classList.replace('disabled1', 'disabled'); 
    } 

    if(p < prod.length){
        const id2 = document.querySelector('#options1 .selected');
    
        id2.classList.replace('selected', 'selected'+m);
      
        
        // var m= a+1;
        
        const num2 = document.querySelector('#options1 .selected'+a);
        num2.classList.replace('selected'+a, 'selected');

        var p1= a - 1;
        p1 = p1 * 8;
        valor(p1);
    }
    
   
};

function numero1(n){
    
    const id = [...document.querySelectorAll('#options1 .selected')].map(el => el.id);
    // var x = n * 8;
    if(n == 1){
        if(id == numero){
            const disabled2 = document.querySelector('#options1 .disabled');
            disabled2.classList.replace('disabled', 'disabled2'); 
        }
        const disabled1 = document.querySelector('#options1 .disabled1');
        disabled1.classList.replace('disabled1', 'disabled'); 

        const num1 = document.querySelector('#options1 .selected');
        num1.classList.replace('selected', 'selected'+id); 

        const num2 = document.querySelector('#options1 .selected'+n);
        num2.classList.replace('selected'+n, 'selected'); 
        
        var p = n - 1;
        valor(p);
    }
   
    if( (n != 1) && (n != numero) ){
        if(id == 1){
            const disabled1 = document.querySelector('#options1 .disabled');
            disabled1.classList.replace('disabled', 'disabled1'); 
        }
        if(id == numero){
            const disabled2 = document.querySelector('#options1 .disabled');
            disabled2.classList.replace('disabled', 'disabled2'); 
        }
        const num1 = document.querySelector('#options1 .selected');
        num1.classList.replace('selected', 'selected'+id); 

        const num2 = document.querySelector('#options1 .selected'+n);
        num2.classList.replace('selected'+n, 'selected'); 

        var p = n - 1;
        p= p * 8;
        valor(p);
    }
    
    if(n == numero){
        // const num1 = document.querySelector('#options1 .selected');
        if(id == 1){
            const disabled1 = document.querySelector('#options1 .disabled');
            disabled1.classList.replace('disabled', 'disabled1'); 
        }
       
        const disabled2 = document.querySelector('#options1 .disabled2');
        disabled2.classList.replace('disabled2', 'disabled'); 

        const num1 = document.querySelector('#options1 .selected');
        num1.classList.replace('selected', 'selected'+id); 

        const num2 = document.querySelector('#options1 .selected'+n);
        num2.classList.replace('selected'+n, 'selected'); 
        
        var p = n - 1;
        p= p * 8;
        valor(p);
    }
   
} 
////////////////////////////////////////////////
function paginacion_eliminar(id){
  
    if(prod.length > 8){
        if(id!=1){
            const id2 = document.querySelector('#options1 .selected');
            id2.classList.replace('selected', 'selected'+1);
            const disabled1 = document.querySelector('#options1 .disabled');
            disabled1.classList.replace('disabled', 'disabled1');   
        }

        if(id==numero){
            const id3 = document.querySelector('#options1 .selected'+id);
            id3.classList.replace('selected'+id, 'selected');
            const disabled2 = document.querySelector('#options1 .disabled2');
            disabled2.classList.replace('disabled2', 'disabled');
            var p= (id-1) * 8;
            valor(p);
        }

        if(id<numero && id!=1){
            const id3 = document.querySelector('#options1 .selected'+id);
            id3.classList.replace('selected'+id, 'selected');
            var p= (id-1) * 8;
            valor(p);
        }
        
        if(id>numero){
            const id3 = document.querySelector('#options1 .selected'+(id-1));
            id3.classList.replace('selected'+(id-1), 'selected');
            const disabled2 = document.querySelector('#options1 .disabled2');
            disabled2.classList.replace('disabled2', 'disabled');
            var p= (id-2) * 8;
            valor(p);
        }

        if(id==1){
            var p= (id-1) * 8;
            valor(p);
        }
    }

    if(prod.length <= 8){
        valor(0);
    }
}

function paginacion_editar(id){
    if( (id==numero) && (numero!=0) ){
        const id1 = document.querySelector('#options1 .selected');
        id1.classList.replace('selected', 'selected'+1);
        const disabled1 = document.querySelector('#options1 .disabled');
        disabled1.classList.replace('disabled', 'disabled1');
        const id2 = document.querySelector('#options1 .selected'+id);
        id2.classList.replace('selected'+id, 'selected');
        const disabled2 = document.querySelector('#options1 .disabled2');
        disabled2.classList.replace('disabled2', 'disabled');
        var p= (id-1) * 8;
        valor(p);   
    }

    if( (id!=numero) && (id!=1) && (numero!=1) && (numero!=0) ){
        const id1 = document.querySelector('#options1 .selected');
        id1.classList.replace('selected', 'selected'+1);
        const disabled1 = document.querySelector('#options1 .disabled');
        disabled1.classList.replace('disabled', 'disabled1');
        const id2 = document.querySelector('#options1 .selected'+id);
        id2.classList.replace('selected'+id, 'selected');
         var p= (id-1) * 8;
        valor(p);
    }
     
    if( (numero==0) || (id==1) ){
        valor(0);
    }
}