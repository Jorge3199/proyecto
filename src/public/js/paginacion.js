
////////////////////////BAJO_DE_PAGINACION//////////////////////////////////////////
/* <script>	 */
var numero=0;
function paginacion(){
    if(productos.length > 4){
        
        const paginacion = document.querySelector('#paginacion');
        paginacion.innerHTML = ``;
        numero=0;
        paginacion.innerHTML += `
            <li class="disabled" ><a onclick="anterior()" >&laquo;</a></li>

            `  
        for (var n = 0; n < productos.length; n+=4) {
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
}
   
// </script>
paginacion();
//////////////////////////////////////////////////////////////////////////////////////
function siguiente(){
    
    const id = [...document.querySelectorAll('#options1 .selected')].map(el => el.id);
    var a = parseInt(id);
  
    var p= a * 4; 
  
    if(p <= 4){
        const disabled1 = document.querySelector('#options1 .disabled');
        disabled1.classList.replace('disabled', 'disabled1'); 
    } 
   
    if(p < productos.length){
        const id2 = document.querySelector('#options1 .selected');
    
        id2.classList.replace('selected', 'selected'+id);
      
        
        var m= a+1;
        
        const num2 = document.querySelector('#options1 .selected'+m);
        num2.classList.replace('selected'+m, 'selected');
        
        valor(p);
    }
   
    var f = p + 4;
    if(f >= productos.length){
        const disabled2 = document.querySelector('#options1 .disabled2');
        disabled2.classList.replace('disabled2', 'disabled');
    }
};



function anterior(){
    const id = [...document.querySelectorAll('#options1 .selected')].map(el => el.id);
    var a = parseInt(id);
    var m= a;
    a-=1;
    var p= a * 4; 

    var f = p + 4;
    if(f >= productos.length){
        const disabled2 = document.querySelector('#options1 .disabled');
        disabled2.classList.replace('disabled', 'disabled2');
    }
    
    if(p <= 4){
        const disabled1 = document.querySelector('#options1 .disabled1');
        disabled1.classList.replace('disabled1', 'disabled'); 
    } 

    if(p < productos.length){
        const id2 = document.querySelector('#options1 .selected');
    
        id2.classList.replace('selected', 'selected'+m);
      
        
        // var m= a+1;
        
        const num2 = document.querySelector('#options1 .selected'+a);
        num2.classList.replace('selected'+a, 'selected');

        var p1= a - 1;
        p1 = p1 * 4;
        valor(p1);
    }
    
   
};

function numero1(n){
    
    const id = [...document.querySelectorAll('#options1 .selected')].map(el => el.id);
    // var x = n * 4;
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
        p= p * 4;
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
        p= p * 4;
        valor(p);
    }
   
} 

