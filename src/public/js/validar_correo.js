
function validar_correo() {
    var  correo, expresion;

    correo = document.getElementById("correo").value;
  
    expresion = /\w+@\w+\.+[a-z]/;

   

    if(!expresion.test(correo)){
        alert("El correo no es valido");
        return false;
    }

   

      
}