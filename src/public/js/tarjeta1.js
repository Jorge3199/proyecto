const tarjeta = document.querySelector('#tarjeta');
const tarjeta1 = document.querySelector('#jorge');
const btnAbrirFormulario = document.querySelector('#btn-abrir-formulario');
const formulario = document.querySelector('#formulario-tarjeta');
const numeroTarjeta = document.querySelector('#tarjeta .numero');
const nombreTarjeta = document.querySelector('#tarjeta .nombre');
const logoMarca = document.querySelector('#logo-marca');
const firma = document.querySelector('#tarjeta .firma p');
const mesExpiracion = document.querySelector('#tarjeta .mes');
const anosExpiracion = document.querySelector('#tarjeta .anos');
const ccv = document.querySelector('#tarjeta .ccv');

const mostrarFrente = () => {
    if(tarjeta.classList.contains('active')){
        tarjeta.classList.remove('active');
    }
}


tarjeta1.addEventListener('click', () => {
    tarjeta.classList.toggle('active');
});

btnAbrirFormulario.addEventListener('click', () => {
    btnAbrirFormulario.classList.toggle('active');
    formulario.classList.toggle('active');
});

for(let i=1; i <= 12; i++){
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectMes.appendChild(opcion);
}

const anosActual = new Date().getFullYear();
for(let i=anosActual; i <= anosActual + 8; i++){
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectAnos.appendChild(opcion);
}

// Input numero de tarjeta
formulario.inputNumero.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    formulario.inputNumero.value = valorInput
    //Eliminamos espacios en blanco
    .replace(/\s/g, '')
    //Eliminar las letrar
    .replace(/\D/g, '')
    //ponemos espacio cada cuatro numeros
    .replace(/([0-9]{4})/g, '$1 ')
    //Elimina el ultimo espaciado
    .trim();

    numeroTarjeta.textContent = valorInput;

    if(valorInput == ''){
        numeroTarjeta.textContent = '#### #### #### ####';
        logoMarca.innerHTML =  '';
    }

    if(valorInput[0] == 4){
        logoMarca.innerHTML =  '';
        const imagen = document.createElement('img');
        imagen.src = 'img/logos/visa.png';
        logoMarca.appendChild(imagen);
    }else if(valorInput[0] == 5){
        logoMarca.innerHTML =  '';
        const imagen = document.createElement('img');
        imagen.src = 'img/logos/mastercard.png';
        logoMarca.appendChild(imagen); 
    }

    mostrarFrente();
});

// input nombre de tarjeta
formulario.inputNombre.addEventListener('keyup', (e) => {
   let valorInput = e.target.value;

   formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
   nombreTarjeta.textContent = valorInput;
   firma.textContent = valorInput;

   if(valorInput == ''){
       nombreTarjeta.textContent = 'Jorge Hidalgo';
   }

   mostrarFrente();
});

// select mes
formulario.selectMes.addEventListener('change', (e) => {
   mesExpiracion.textContent = e.target.value;
   mostrarFrente();
});

// select anos
formulario.selectAnos.addEventListener('change', (e) => {
    anosExpiracion.textContent = e.target.value.slice(2);
    mostrarFrente();
});

// ccv
formulario.inputCCV.addEventListener('keyup', () => {
    if(!tarjeta.classList.contains('active')){
        tarjeta.classList.toggle('active');
    }

    formulario.inputCCV.value = formulario.inputCCV.value
     //Eliminamos espacios en blanco
     .replace(/\s/g, '')
     //Eliminar las letrar
     .replace(/\D/g, '');

     ccv.textContent = formulario.inputCCV.value;
});

