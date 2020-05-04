
$(document).ready(function(){

    // Modal

    // $(".modal").on("click", function (e) {
    //     console.log(e);
    //     if (($(e.target).hasClass("modal-main") || $(e.target).hasClass("close-modal")) && $("#loading").css("display") == "none") {
    //         closeModal();
    //     }
    // });

    // -> Modal

    // Abrir el inspector de archivos
    
    $(document).on("click", "#add-photo", function(){
        $("#imagen").click();
    });
    
    // -> Abrir el inspector de archivos
    // Cachamos el evento change
    
    $(document).on("change", "#imagen", function () {
    
        // console.log(this.files);
        var files = this.files;
        var element;
        var supportedImages = ["image/jpeg", "image/png", "image/gif"];
        var seEncontraronElementoNoValidos = false;
       

        for (var i = 0; i < files.length; i++) {
            element = files[i];
            
            if (supportedImages.indexOf(element.type) != -1) {
                var id = getRandomString(7);
                // createPreview(id, element);
                guardar[guardar.length] = { id, element};
                
                if(guardar.length <= 3){
                    createPreview(id, element);
                }

                if(vs == "true"){
                    galeria_Preview(id, element);
                }
 
                formData.append(id, element); 
                
            }
            else {
                seEncontraronElementoNoValidos = true;
            }
        }

      
        // console.log('---------------------------------------------');
        // for (var pair of formData.entries()){
        //     console.log(pair[0]);
        //     console.log(pair[1])
        // }

        if (seEncontraronElementoNoValidos) {
            archivo('error','Se encontraron archivos no validos.');
            // showMessage("Se encontraron archivos no validos.");
        }
        else {
            archivo('success','Todos los archivos se subieron correctamente.');
            // showMessage("Todos los archivos se subieron correctamente.");
        }
    
    });
    
    // -> Cachamos el evento change

    // Eliminar previsualizaciones
    
    $(document).on("click", "#Images .image-container", function(e){
        var parent = $(this).parent();
        var id = $(parent).attr("id");

        
      

        if(vs != 'true'){
            var item = document.getElementById('nomb'+id);
            if(item.classList == "imagen-mas"){
                galeria_imagen();

                return false;
            }

        }
        if(vs == 'true'){
           
            id = id.substring(0, id.length - 1);
            datos=[];
            for (var n = 0; n < imagen.length; n++) {

                if(imagen[n].id != id){
                    datos[datos.length]=imagen[n];
                   
                }
                
            }

            imagen= datos;
            // alert(id);
            // alert(guardar[1].id);

            $('#'+id).remove();
            
            if( guardar.length > 2){
                if(id == guardar[1].id){

                    $(parent).remove();
                    if(imagen.length >= 2){
    
                        var imgCodified = guardar[2].element;
                        if(guardar.length == 3){
                            var img = $('<div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-12" id="' + guardar[2].id + '"><div class="image-container"> <figure> <img src="imagen1/' +  imgCodified + '" alt="Foto del usuario" > <div id="jorg' + contador + '"> <figcaption id="nomb' + guardar[2].id + '" class="imagen-menos"> <i class="icon-cross"></i> </figcaption> </figure> </div> </div></div>');
                            $(img).insertBefore("#add-photo-container");
                        
                        }else{
                            var img = $('<div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-12" id="' + guardar[2].id + '"><div class="image-container"> <figure> <img src="imagen1/' +  imgCodified + '" alt="Foto del usuario" > <div id="jorg' + contador + '"> <figcaption id="nomb' + guardar[2].id + '" class="imagen-mas"> <i class="icon-cross"></i> </figcaption> </figure> </div> </div></div>');
                            $(img).insertBefore("#add-photo-container");
                        }
                    }

                    if(imagen.length < 2){
            
                        var imgCodified = URL.createObjectURL(guardar[2].element);
                        if(guardar.length == 3){
                            var img = $('<div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-12" id="' + guardar[2].id + '"><div class="image-container"> <figure> <img src="' +  imgCodified + '" alt="Foto del usuario" > <div id="jorg' + contador + '"> <figcaption id="nomb' + guardar[2].id + '" class="imagen-menos"> <i class="icon-cross"></i> </figcaption> </figure> </div> </div></div>');
                            $(img).insertBefore("#add-photo-container");
                        
                        }else{
                            var img = $('<div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-12" id="' + guardar[2].id + '"><div class="image-container"> <figure> <img src="' +  imgCodified + '" alt="Foto del usuario" > <div id="jorg' + contador + '"> <figcaption id="nomb' + guardar[2].id + '" class="imagen-mas"> <i class="icon-cross"></i> </figcaption> </figure> </div> </div></div>');
                            $(img).insertBefore("#add-photo-container");
                        }
                    }
                    
                    var datos=[];
                    for (var i = 0; i < guardar.length; i++) {
                        if(guardar[i].id != id){
                            datos[datos.length]=guardar[i];
                        }
                        
                    }
                    guardar= datos;
                
                    return false;
                }

                if(id != guardar[0].id && id != guardar[1].id){

                    $(parent).remove();

                    var datos=[];
                    for (var i = 0; i < guardar.length; i++) {
                        if(guardar[i].id != id){
                            datos[datos.length]=guardar[i];
                        }
                        
                    }
                    guardar= datos;

                    if(guardar.length == 2){
                        const cambiar2 = document.querySelector('#jorg'+ contador);
                        cambiar2.innerHTML =`<figcaption id="nomb${guardar[1].id}" class="imagen-menos"> <i class="icon-cross"></i> </figcaption> </figure>`; 
                    }
                    return false;
                }
            }

            // return false;
        }
        // alert('hola1');
       
        var datos=[];
        for (var i = 0; i < guardar.length; i++) {
            if(guardar[i].id != id){
                datos[datos.length]=guardar[i];
            }
            
        }
        guardar= datos;
        
        
        if(id.length <= 2  ){
           
        
            datos=[];
            for (var n = 0; n < imagen.length; n++) {

                if(imagen[n].id != id){
                    datos[datos.length]=imagen[n];
                   
                }
                
            }

            imagen= datos;
           
            // imagen[id] = 'imagen_eliminada'; 
            if(guardar.length >= 2){
                editar_Preview1();
            }
           
         }
         if(id.length > 2 ){
          
            
            formData.delete(id);
            if(guardar.length >= 2){
                editar_Preview();
            }

         }

        if(guardar.length == 0){
            guardar=[];
            formData = new FormData();
        }
       

       
       
        
        $(parent).remove();
      

        // console.log('---------------------------------------------');
        // for (var pair of formData.entries()){
        //     console.log(pair[0]);
        //     console.log(pair[1])
        // }
    });
    
    // -> Eliminar previsualizaciones

});