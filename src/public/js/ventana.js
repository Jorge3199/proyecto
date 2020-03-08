var modal = document.getElementById("tvesModal");
var btn = document.getElementById("btnModal");
// var span = document.getElementsByClassName("close1")[0];

var body = document.getElementsByTagName("body")[0];

var body2= "false";
/////////////////////////
var modal3 = document.getElementById("tvesModal3");
function span3(){
    modal3.style.display = "none";

    body.style.position = "inherit";
    body.style.height = "auto";


}

function abrir3(){
    modal3.style.display = "block";

    body.style.position = "static";
    body.style.height = "100%";
    body.style.overflow = "hidden";
}

function cerrar3(){
    modal3.style.display = "none";

    body.style.position = "inherit";
    body.style.height = "auto";


}
/////////////////////////

function span(opcion){
    modal.style.display = "none";

    body.style.position = "inherit";
    body.style.height = "auto";

    if(opcion != 'true' && opcion != 'true1'){
        body.style.overflow = "visible";
        body2="false";
    }
}
// span.onclick = function() {
//     modal.style.display = "none";

//     body.style.position = "inherit";
//     body.style.height = "auto";
//     body.style.overflow = "visible";
// }


function abrir(){
    modal.style.display = "block";

    body.style.position = "static";
    body.style.height = "100%";
    body.style.overflow = "hidden";
}

function cerrar(opcion){
    modal.style.display = "none";

    body.style.position = "inherit";
    body.style.height = "auto";

    if(opcion != 'opcion2'){
        body.style.overflow = "visible";
    }

    // if(opcion == 'opcion2'){
    //     const spano = document.querySelector('#tamaño .close11');
    //     spano.classList.replace('close11', 'close1');
    // }
   
}

///////////////////////////////////////////
var modal2 = document.getElementById("tvesModal2");
var btn2 = document.getElementById("btnModal2");
var span2 = document.getElementsByClassName("close2")[0];


function abrir2(){
    modal2.style.display = "block";
   
    body.style.position = "static";
    body.style.height = "100%";
    body.style.overflow = "hidden";
}

span2.onclick = function() {
    modal2.style.display = "none";

    body.style.position = "inherit";
    body.style.height = "auto";
    body.style.overflow = "visible";

    body2="false";
    const tamano = document.querySelector('#tamaño');
    tamano.innerHTML = `
        <span class="close1" onclick="span()">×</span>

        <div id="vent">
            
        </div>
    `
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";

        if(body2 == 'false'){
            body.style.overflow = "visible"; 
        }
    }

    if (event.target == modal3) {
        modal3.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";

        if(body2 == 'false'){
            body.style.overflow = "visible"; 
        }
    }

    if (event.target == modal2) {
        modal2.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";

        body2='false';
        const tamano = document.querySelector('#tamaño');
        tamano.innerHTML = `
            <span class="close1" onclick="span()">×</span>

            <div id="vent">
                
            </div>
        `
    }
}

function bigImg(n) {
	var intro = document.getElementById('tamaño'+n);
	intro.style.width="100%";
	intro.style.transition= "all .1s ease";
}

function normalImg(n) {
	var intro = document.getElementById('tamaño'+n);
	intro.style.width="96.5%";
	intro.style.transition= "all .1s ease";
}

function bigImg5(n) {
	var intro = document.getElementById('tamaño5'+n);
	intro.style.width="100%";
	intro.style.transition= "all .1s ease";
}

function normalImg5(n) {
	var intro = document.getElementById('tamaño5'+n);
	intro.style.width="96.5%";
	intro.style.transition= "all .1s ease";
}
