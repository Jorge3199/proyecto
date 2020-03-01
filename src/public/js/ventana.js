var modal = document.getElementById("tvesModal");
var btn = document.getElementById("btnModal");
var span = document.getElementsByClassName("close1")[0];
var body = document.getElementsByTagName("body")[0];


span.onclick = function() {
    modal.style.display = "none";

    body.style.position = "inherit";
    body.style.height = "auto";
    body.style.overflow = "visible";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }
}

function abrir(){
    modal.style.display = "block";

    body.style.position = "static";
    body.style.height = "100%";
    body.style.overflow = "hidden";
}

function cerrar(){
    modal.style.display = "none";

    body.style.position = "inherit";
    body.style.height = "auto";
    body.style.overflow = "visible";
}

///////////////////////////////////////////
var modal2 = document.getElementById("tvesModal2");
var btn2 = document.getElementById("btnModal2");
var span2 = document.getElementsByClassName("close2")[0];
var body2 = document.getElementsByTagName("body")[0];

function abrir2(){
    modal2.style.display = "block";
   
    body2.style.position = "static";
    body2.style.height = "100%";
    body2.style.overflow = "hidden";
}

span2.onclick = function() {
    modal2.style.display = "none";

    body2.style.position = "inherit";
    body2.style.height = "auto";
    body2.style.overflow = "visible";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";

        body2.style.position = "inherit";
        body2.style.height = "auto";
        body2.style.overflow = "visible";
    }
}

function cerrar2(){
    modal2.style.display = "none";

    body2.style.position = "inherit";
    body2.style.height = "auto";
    body2.style.overflow = "visible";
}