const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const telefono = document.querySelector('#telefono');

nombre.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
   
    nombre.value = valorInput

    //Elimina los numero
    .replace(/([0-9])/g, '')
    //Elimina el primer espaciado
    .replace(/^\s+/,"");
    
});    



apellido.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
   
    apellido.value = valorInput
    .replace(/([0-9])/g, '')   
    .replace(/^\s+/,"");
    
}); 

telefono.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
   
    telefono.value = valorInput
     
    //Eliminamos espacios en blanco
    .replace(/\s/g, '')
    //Eliminar las letrar
    .replace(/\D/g, '')

    .trim();
    
}); 