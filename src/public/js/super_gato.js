function login(){
    // alert('jorge');
    window.location = 'http://localhost:4000/cliente_signin';
}


const resultado = document.querySelector('#resultado');
resultado.innerHTML = `
 <div class="portfolio-items">
      <div id="resultado10">
                         
        </div>
`
const resultado10 = document.querySelector('#resultado10');
var n, r;  
var k=(productos.length-5);
for (n = productos.length-1; n > k ; n--) {   
    
    resultado10.innerHTML += `
     <div class="item four columns illustration22" >
       
        <a href="project-1.html" class="expander">
            <img height="200" width="270" src="imagen1/${productos[n].imagen}" alt="" />
            <div class="mask"></div>
            <div class="icon">
                <a class="btn btn-success mx-1" onclick="imagenes('${productos[n].imagen}')"> <img height="30" width="25" src="/img/imagen.png"></a>
                <a class="btn btn-warning mx-1"  onclick="login()"> <img height="30" width="25" src="/img/carrito.png"></a>
                <a class="btn btn-danger"  onclick="login()"> <img height="30" width="25" src="/img/heart1.png"></a>
            </div>
            <h5>${productos[n].nombre}</h5> 
            <h6>${productos[n].precio}</h6>
        </a>
        
     </div>
    

    ` 
};	
    

// </script>

/* <script>  */

const resultado22 = document.querySelector('#resultado22');
resultado22.innerHTML = `
 <div class="portfolio-items">
      <div id="resultado11">
                         
        </div>
`
const resultado11 = document.querySelector('#resultado11');
var n, r;  
for (n = 0; n < 4; n++) {
    
    
    resultado11.innerHTML += `
     <div class="item four columns illustration" >
       
        <a href="project-1.html" class="expander">
            <img height="200" width="270" src="imagen1/${productos[n].imagen}" alt="" />
            <div class="mask"></div>
            <div class="icon">
                <a class="btn btn-success mx-1" onclick="imagenes('${productos[n].imagen}')"> <img height="30" width="25" src="/img/imagen.png"></a>
                <a class="btn btn-warning mx-1" onclick="login()"> <img height="30" width="25" src="/img/carrito.png"></a>
                <a class="btn btn-danger" onclick="login()"> <img height="30" width="25" src="/img/heart1.png"></a>
            </div>
            <h5>${productos[n].nombre}</h5> 
            <h6>${productos[n].precio}</h6>
        </a>
        
     </div>
     

    ` 
};	
    

// </script>



/* <script> */



function valor(p){	
const resultado = document.querySelector('#resultado');
resultado.innerHTML = `
 <div class="portfolio-items">
      <div id="resultado10">
                         
        </div>
 </div>		
`
const resultado10 = document.querySelector('#resultado10');	
const s= productos.length - p;
p = s - 1;
if(s < 4){
    var n;
    for (n = 0; n < s; n++) {
        
    
        resultado10.innerHTML += `
        <div class="item four columns illustration" >
        
            <a href="project-1.html" class="expander">
                <img height="200" width="270" src="imagen1/${productos[p].imagen}" alt="" />
                <div class="mask"></div>
                <div class="icon">
                    <a class="btn btn-success mx-1" onclick="imagenes('${productos[p].imagen}')"> <img height="30" width="25" src="/img/imagen.png"></a>
                    <a class="btn btn-warning mx-1" onclick="login()"> <img height="30" width="25" src="/img/carrito.png"></a>
                    <a class="btn btn-danger" onclick="login()"> <img height="30" width="25" src="/img/heart1.png"></a>
                </div>
                <h5>${productos[p].nombre}</h5> 
                <h6>${productos[p].precio}</h6>
            </a>
            
        </div>

        `  
        p--;
    }; 
}

if(s >= 4){
    var n;
    for (n = 0; n < 4; n++) {
        
    
        resultado10.innerHTML += `
        <div class="item four columns illustration" >
        
            <a href="project-1.html" class="expander">
                <img height="200" width="270" src="imagen1/${productos[p].imagen}" alt="" />
                <div class="mask"></div>
                <div class="icon">
                    <a class="btn btn-success mx-1" onclick="imagenes('${productos[p].imagen}')"> <img height="30" width="25" src="/img/imagen.png"></a>
                    <a class="btn btn-warning mx-1" onclick="login()"> <img height="30" width="25" src="/img/carrito.png"></a>
                    <a class="btn btn-danger" onclick="login()"> <img height="30" width="25" src="/img/heart1.png"></a>
                </div>
                <h5>${productos[p].nombre}</h5> 
                <h6>${productos[p].precio}</h6>
            </a>
            
        </div>

        `  
        p--;
    }; 
}




}