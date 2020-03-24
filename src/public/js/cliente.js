// const hola1 = document.querySelector('.modalDialog');
// hola1.addEventListener('click', () => {
//    alert('jorge');
// });

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
                <a class="btn btn-warning mx-1" onclick="abrir_compra(${productos[n].id},'${productos[n].imagen}','${productos[n].nombre}',${productos[n].precio},'${productos[n].modelo}',${productos[n].cantidad})"> <img height="30" width="25" src="/img/carrito.png"></a>
                <a class="btn btn-danger" onclick="lista_favoritos(${productos[n].id})"> <img height="30" width="25" src="/img/heart1.png"></a>
            </div>
            <h5>${productos[n].nombre}</h5> 
            <h6>${productos[n].precio}</h6>
        </a>
        
     </div>
    

    ` 
};	
    

// </script>

/* <script>  */

// const resultado22 = document.querySelector('#resultado22');
// resultado22.innerHTML = `
//  <div class="portfolio-items">
//       <div id="resultado11">
                         
//         </div>
// `
// const resultado11 = document.querySelector('#resultado11');
// var n, r;  
// for (n = 0; n < 8; n++) {
    
    
//     resultado11.innerHTML += `
//      <div class="item four columns illustration" >
       
//         <a href="project-1.html" class="expander">
//             <img height="200" width="270" src="imagen1/${productos[n].imagen}" alt="" />
//             <div class="mask"></div>
//             <div class="icon">
//                 <a class="btn btn-success mx-1" onclick="imagenes('${productos[n].imagen}')"> <img height="30" width="25" src="/img/imagen.png"></a>
//                 <a class="btn btn-warning mx-1" onclick="abrir_compra(${productos[n].id},'${productos[n].imagen}','${productos[n].nombre}',${productos[n].precio},'${productos[n].modelo}',${productos[n].cantidad})"> <img height="30" width="25" src="/img/carrito.png"></a>
//                 <a class="btn btn-danger" onclick="lista_favoritos(${productos[n].id})"> <img height="30" width="25" src="/img/heart1.png"></a>
//             </div>
//             <h5>${productos[n].nombre}</h5> 
//             <h6>${productos[n].precio}</h6>
//         </a>
        
//      </div>
     

//     ` 
// };	
    

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
const s= prod.length - p;
p = s - 1;
if(s < 8){
    var n;
    for (n = 0; n < s; n++) {
    
        resultado10.innerHTML += `
        <div class="item four columns illustration" onmouseover="bigImg5(${n})" onmouseout="normalImg5(${n})">
        
            <a href="project-1.html" class="expander">
                <img height="200" width="270" src="imagen1/${prod[p].imagen}" alt="" />
                <div class="mask"></div>
                <div class="icon">
                    <a class="btn btn-success mx-1" onclick="imagenes('${prod[p].imagen}')"> <img height="30" width="25" src="/img/imagen.png"></a>
                    <a class="btn btn-warning mx-1" onclick="abrir_compra(${prod[p].id},'${prod[p].imagen}','${prod[p].nombre}',${prod[p].precio},'${prod[p].modelo}',${prod[p].cantidad})"> <img height="30" width="25" src="/img/carrito.png"></a>
                    <a class="btn btn-danger" onclick="lista_favoritos(${prod[p].id})"> <img height="30" width="25" src="/img/heart1.png"></a>
                </div>
              
            </a>

			<div id='tamaño5${n}' class="fondo" style="width:96.5%; " >
			<div class="row">
				<div class="col-lg-12">	 
					<h8 class="tiempo" >${prod[p].fecha_hora}</h8>
				</div>	
			</div> 

			<div class="row" >
			
				<div class="col-lg-6">
					<h7 class="texto3">Nombre:</h7> 
				</div>
				<div class="col-lg-6">
					<h7 class="texto4">${prod[p].nombre}</h7> 
				</div>
			
			</div>	

			<div class="row">
				<div class="col-lg-6">
					<h7 class="texto3">Precio:</h7> 
				</div>
				<div class="col-lg-6">	 
					<h8 class="texto4" style="left: -70px;">${prod[p].precio}</h8>
				</div>	
			</div> 

			<div class="row">
				<div class="col-lg-6">
					<h7 class="texto3">Cantidad:</h7> 
				</div>
				<div class="col-lg-6">	 
					<h8 class="texto4" style="left: -50px;">${prod[p].cantidad}</h8>
				</div>	
			</div>

			<div class="row">
				<div class="col-lg-6">
					<h7 class="texto3">Modelo:</h7> 
				</div>
				<div class="col-lg-6">	 
					<h8 class="texto4" style="left: -60px;">${prod[p].modelo}</h8>
				</div>	
			</div>
		
		
		</div>
            
        </div>

        `  
        p--;
    }; 
}

if(s >= 8){
    var n;
    for (n = 0; n < 8; n++) {
        
        resultado10.innerHTML += `
        <div class="item four columns illustration" onmouseover="bigImg5(${n})" onmouseout="normalImg5(${n})">
        
            <a href="project-1.html" class="expander">
                <img height="200" width="270" src="imagen1/${prod[p].imagen}" alt="" />
                <div class="mask"></div>
                <div class="icon">
                    <a class="btn btn-success mx-1" onclick="imagenes('${prod[p].imagen}')"> <img height="30" width="25" src="/img/imagen.png"></a>
                    <a class="btn btn-warning mx-1" onclick="abrir_compra(${prod[p].id},'${prod[p].imagen}','${prod[p].nombre}',${prod[p].precio},'${prod[p].modelo}',${prod[p].cantidad})"> <img height="30" width="25" src="/img/carrito.png"></a>
                    <a class="btn btn-danger" onclick="lista_favoritos(${prod[p].id})"> <img height="30" width="25" src="/img/heart1.png"></a>
                </div>
            </a>

			<div id='tamaño5${n}' class="fondo" style="width:96.5%; " >
			<div class="row">
				<div class="col-lg-12">	 
					<h8 class="tiempo" >${prod[p].fecha_hora}</h8>
				</div>	
			</div>
			
			<div class="row" >
			
				<div class="col-lg-6">
					<h7 class="texto3">Nombre:</h7> 
				</div>
				<div class="col-lg-6">
					<h7 class="texto4">${prod[p].nombre}</h7> 
				</div>
			
			</div>	

			<div class="row">
				<div class="col-lg-6">
					<h7 class="texto3">Precio:</h7> 
				</div>
				<div class="col-lg-6">	 
					<h8 class="texto4" style="left: -70px;">${prod[p].precio}</h8>
				</div>	
			</div> 

			<div class="row">
				<div class="col-lg-6">
					<h7 class="texto3">Cantidad:</h7> 
				</div>
				<div class="col-lg-6">	 
					<h8 class="texto4" style="left: -50px;">${prod[p].cantidad}</h8>
				</div>	
			</div>

			<div class="row">
				<div class="col-lg-6">
					<h7 class="texto3">Modelo:</h7> 
				</div>
				<div class="col-lg-6">	 
					<h8 class="texto4" style="left: -60px;">${prod[p].modelo}</h8>
				</div>	
			</div>
		
		
		</div>
            
        </div>

        `  
        p--;
    }; 
}




}