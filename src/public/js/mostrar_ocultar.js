function mostrar(){
    $show=document.getElementById('pass');
    $show.type='text';
    const resultado = document.querySelector('#b1');
    resultado.innerHTML = `
    <span class="input-group-text b1" onclick="ocultar()"><i class="icon-eye-blocked"></i></span>
    `
}

function ocultar(){
    $show=document.getElementById('pass');
    $show.type='password';
    const resultado = document.querySelector('#b1');
    resultado.innerHTML = `
    <span class="input-group-text b1"  onclick="mostrar()"><i id="b11" class="icon-eye"></i></span>
    `
}
