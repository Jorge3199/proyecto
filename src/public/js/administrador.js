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
				<a class="btn btn-warning mx-1"  onclick="abrir_editacion_productos(${productos[n].id},'${productos[n].imagen}','${productos[n].nombre}',${productos[n].precio},'${productos[n].modelo}',${productos[n].cantidad})"> <img height="30" width="25" src="/img/editar2.png"></a>
				<a class="btn btn-danger" onclick="confirmar(${productos[n].id})"> <img height="30" width="25" src="/img/borrar.png"></a>
			</div>
		</a>

		<div id='tamaño${n}' class="fondo" style="width:96.5%; " >
			<div class="row" >
			
				<div class="col-lg-6">
					<h7 class="texto3">Nombre:</h7> 
				</div>
				<div class="col-lg-6">
					<h7 class="texto4">${productos[n].nombre}</h7> 
				</div>
			
			</div>	

			<div class="row">
				<div class="col-lg-6">
					<h7 class="texto3">Precio:</h7> 
				</div>
				<div class="col-lg-6">	 
					<h8 class="texto4" style="left: -70px;">${productos[n].precio}</h8>
				</div>	
			</div> 

			<div class="row">
				<div class="col-lg-6">
					<h7 class="texto3">Cantidad:</h7> 
				</div>
				<div class="col-lg-6">	 
					<h8 class="texto4" style="left: -50px;">${productos[n].cantidad}</h8>
				</div>	
			</div>

			<div class="row">
				<div class="col-lg-6">
					<h7 class="texto3">Modelo:</h7> 
				</div>
				<div class="col-lg-6">	 
					<h8 class="texto4" style="left: -60px;">${productos[n].modelo}</h8>
				</div>	
			</div>
		
		
		</div>
		
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
		<div class="item four columns illustration" onmouseover="bigImg(${n})" onmouseout="normalImg(${n})">
		
		<a href="project-1.html" class="expander">
			<img height="200" width="270" src="imagen1/${productos[n].imagen}" alt="" />
			<div class="mask"></div>
			<div class="icon">
				<a class="btn btn-success mx-1" onclick="imagenes('${productos[n].imagen}')"> <img height="30" width="25" src="/img/imagen.png"></a>
				<a class="btn btn-warning mx-1" onclick="abrir_editacion_productos(${productos[n].id},'${productos[n].imagen}','${productos[n].nombre}',${productos[n].precio},'${productos[n].modelo}',${productos[n].cantidad})"> <img height="30" width="25" src="/img/editar2.png"></a>
				<a class="btn btn-danger" onclick="confirmar(${productos[n].id})"> <img height="30" width="25" src="/img/borrar.png"></a>
			</div>
		</a>	
		<div id='tamaño${n}' class="fondo" style="width:96.5%; " >
			<div class="row">
				<div class="col-lg-12">	 
					<h8 class="tiempo">${productos[n].tiempo}</h8>
				</div>	
			</div> 
		    <div class="row">
				<div class="col-lg-6">
					<h7 class="texto3">ID:</h7> 
				</div>
				<div class="col-lg-6">	 
					<h8 class="texto4" style="left: -103px;">${productos[n].id}</h8>
				</div>	
			</div> 
			<div class="row" >
			
				<div class="col-lg-6">
					<h7 class="texto3">Nombre:</h7> 
				</div>
				<div class="col-lg-6">
					<h7 class="texto4">${productos[n].nombre}</h7> 
				</div>
			
			</div>	

			<div class="row">
				<div class="col-lg-6">
					<h7 class="texto3">Precio:</h7> 
				</div>
				<div class="col-lg-6">	 
					<h8 class="texto4" style="left: -70px;">${productos[n].precio}</h8>
				</div>	
			</div> 

			<div class="row">
				<div class="col-lg-6">
					<h7 class="texto3">Cantidad:</h7> 
				</div>
				<div class="col-lg-6">	 
					<h8 class="texto4" style="left: -50px;">${productos[n].cantidad}</h8>
				</div>	
			</div>

			<div class="row">
				<div class="col-lg-6">
					<h7 class="texto3">Modelo:</h7> 
				</div>
				<div class="col-lg-6">	 
					<h8 class="texto4" style="left: -60px;">${productos[n].modelo}</h8>
				</div>	
			</div>
		
		
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
					<a class="btn btn-warning mx-1" onclick="abrir_editacion_productos(${prod[p].id},'${prod[p].imagen}','${prod[p].nombre}',${prod[p].precio},'${prod[p].modelo}',${prod[p].cantidad})"> <img height="30" width="25" src="/img/editar2.png"></a>
					<a class="btn btn-danger" onclick="confirmar(${prod[p].id})"> <img height="30" width="25" src="/img/borrar.png"></a>
				</div>
			</a>

			<div id='tamaño5${n}' class="fondo" style="width:96.5%; " >
			<div class="row">
				<div class="col-lg-6">
					<h7 class="texto3">ID:</h7> 
				</div>
				<div class="col-lg-6">	 
					<h8 class="texto4" style="left: -103px;">${prod[p].id}</h8>
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
					<a class="btn btn-warning mx-1" onclick="abrir_editacion_productos(${prod[p].id},'${prod[p].imagen}','${prod[p].nombre}',${prod[p].precio},'${prod[p].modelo}',${prod[p].cantidad})"> <img height="30" width="25" src="/img/editar2.png"></a>
					<a class="btn btn-danger" onclick="confirmar(${prod[p].id})"> <img height="30" width="25" src="/img/borrar.png"></a>
				</div>
			</a>

			<div id='tamaño5${n}' class="fondo" style="width:96.5%; " >
			<div class="row">
				<div class="col-lg-6">
					<h7 class="texto3">ID:</h7> 
				</div>
				<div class="col-lg-6">	 
					<h8 class="texto4" style="left: -103px;">${prod[p].id}</h8>
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