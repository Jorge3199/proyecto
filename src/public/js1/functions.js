//Genera una cadena aleatoria según la longitud dada
function getRandomString(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

//Genera las previsualizaciones
function createPreview(id, file) {
    
    var imgCodified = URL.createObjectURL(file);
    if(guardar.length <= 2){
        contador+=1;
        var img = $('<div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-12" id="' + id + '"><div class="image-container"> <figure> <img src="' +  imgCodified + '" alt="Foto del usuario" > <div id="jorg' + contador + '"> <figcaption id="nomb' + id + '" class="imagen-menos"> <i class="icon-cross"></i> </figcaption> </figure> </div> </div></div>');
        $(img).insertBefore("#add-photo-container");
    }

    if(guardar.length == 3){
        const cambiar2 = document.querySelector('#jorg'+ contador);
        cambiar2.innerHTML =`<figcaption id="nomb${guardar[1].id}" class="imagen-mas"> <i class="icon-cross"></i> </figcaption> </figure>`; 
    }  
}

function createPreview1(id, imagen) {

    if(guardar.length <= 2){
        contador+=1;
        var img = $('<div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-12" id="' + id + '"><div class="image-container"> <figure> <img src="imagen1/' +  imagen + '" alt="Foto del usuario" > <div id="jorg' + contador + '"> <figcaption id="nomb' + id + '" class="imagen-menos"> <i class="icon-cross"></i> </figcaption> </figure> </div> </div></div>');
        $(img).insertBefore("#add-photo-container");
    }

    if(guardar.length == 3){
        const cambiar2 = document.querySelector('#jorg'+ contador);
        cambiar2.innerHTML =`<figcaption id="nomb${guardar[1].id}" class="imagen-mas"> <i class="icon-cross"></i> </figcaption> </figure>`; 
    }  
}

function editar_Preview(){
    // alert('fd');
    const cambiar2 = document.querySelector('#jorg'+ contador);
    cambiar2.innerHTML =`<figcaption id="nomb${guardar[0].id}" class="imagen-menos"> <i class="icon-cross"></i> </figcaption> </figure>`; 
    contador+=1;
    var imgCodified = URL.createObjectURL(guardar[1].element);
    if(guardar.length != 2){
        var img = $('<div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-12" id="' + guardar[1].id + '"><div class="image-container"> <figure> <img src="' +  imgCodified + '" alt="Foto del usuario"> <div id="jorg' + contador + '"> <figcaption id="nomb' + guardar[1].id + '" class="imagen-mas"> <i class="icon-cross"></i> </figcaption> </figure> </div> </div></div>');
        $(img).insertBefore("#add-photo-container");
    }

    if(guardar.length == 2){
        var img = $('<div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-12" id="' + guardar[1].id + '"><div class="image-container"> <figure> <img src="' +  imgCodified + '" alt="Foto del usuario"> <div id="jorg' + contador + '"> <figcaption id="nomb' + guardar[1].id + '" class="imagen-menos"> <i class="icon-cross"></i> </figcaption> </figure> </div> </div></div>');
        $(img).insertBefore("#add-photo-container");
    }   
}

function editar_Preview1(){
    const cambiar2 = document.querySelector('#jorg'+ contador);
    cambiar2.innerHTML =`<figcaption id="nomb${guardar[0].id}" class="imagen-menos"> <i class="icon-cross"></i> </figcaption> </figure>`; 
    contador+=1;
   
    if(guardar.length != 2 && imagen.length > 1){
        var imgCodified = guardar[1].element;
        var img = $('<div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-12" id="' + guardar[1].id + '"><div class="image-container"> <figure> <img src="imagen1/' +  imgCodified + '" alt="Foto del usuario"> <div id="jorg' + contador + '"> <figcaption id="nomb' + guardar[1].id + '" class="imagen-mas"> <i class="icon-cross"></i> </figcaption> </figure> </div> </div></div>');
        $(img).insertBefore("#add-photo-container");
    }

    if(guardar.length != 2 && imagen.length <= 1){
        var imgCodified = URL.createObjectURL(guardar[1].element);
        var img = $('<div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-12" id="' + guardar[1].id + '"><div class="image-container"> <figure> <img src="' +  imgCodified + '" alt="Foto del usuario"> <div id="jorg' + contador + '"> <figcaption id="nomb' + guardar[1].id + '" class="imagen-mas"> <i class="icon-cross"></i> </figcaption> </figure> </div> </div></div>');
        $(img).insertBefore("#add-photo-container");
    }
     
    // //  var a =  guardar[1].id.toString();

    if(guardar.length == 2 && imagen.length > 1){
        var imgCodified = guardar[1].element;
        var img = $('<div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-12" id="' + guardar[1].id + '"><div class="image-container"> <figure> <img src="imagen1/' +  imgCodified + '" alt="Foto del usuario"> <div id="jorg' + contador + '"> <figcaption id="nomb' + guardar[1].id + '" class="imagen-menos"> <i class="icon-cross"></i> </figcaption> </figure> </div> </div></div>');
        $(img).insertBefore("#add-photo-container");
    } 
    
    if(guardar.length == 2 && imagen.length <= 1){
        var imgCodified = URL.createObjectURL(guardar[1].element);
        var img = $('<div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-12" id="' + guardar[1].id + '"><div class="image-container"> <figure> <img src="' +  imgCodified + '" alt="Foto del usuario"> <div id="jorg' + contador + '"> <figcaption id="nomb' + guardar[1].id + '" class="imagen-menos"> <i class="icon-cross"></i> </figcaption> </figure> </div> </div></div>');
        $(img).insertBefore("#add-photo-container");
    }
}

function galeria_Preview(id, file){
    if(id.length <= 2){
        var imgCodified = file;
        var img = $('<div class="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-xs-12" id="' + id + 'd"><div class="image-container galeria"> <figure> <img src="imagen1/' +  imgCodified + '" alt="Foto del usuario" > <figcaption class="imagen-menos"> <i class="icon-cross"></i> </figcaption> </figure> </div> <br /></div>');
        $(img).insertBefore("#add-photo-container1");
    }

    if(id.length > 2){
        var imgCodified = URL.createObjectURL(file);
        var img = $('<div class="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-xs-12" id="' + id + 'd"><div class="image-container galeria"> <figure> <img src="' +  imgCodified + '" alt="Foto del usuario" > <figcaption class="imagen-menos"> <i class="icon-cross"></i> </figcaption> </figure> </div> <br /></div>');
        $(img).insertBefore("#add-photo-container1");
    }
}