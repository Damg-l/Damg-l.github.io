let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/kirby-html.jpg') {
      miImage.setAttribute('src','images/kirby-con-pajarito.png');
    } else {
      miImage.setAttribute('src', 'images/kirby-html.jpg');
    }
}
let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');
function estableceNombreUsuario() {
  let miNombre = prompt('Por favor, ingresa tu nombre.');
  localStorage.setItem('nombre', miNombre);
  miTitulo.textContent = 'Kirby saluda a ' + miNombre;
}
if (!localStorage.getItem('nombre')) {
  estableceNombreUsuario();
}
else {
  let nombreAlmacenado = localStorage.getItem('nombre');
  miTitulo.textContent = 'Kirby saluda a ' + nombreAlmacenado;
}
miBoton.onclick = function() {
  estableceNombreUsuario();
}
function estableceNombreUsuario() {
  let miNombre = prompt('Introduzca su nombre.');
  if(!miNombre) {
    estableceNombreUsuario();
  } else {
    localStorage.setItem('nombre', miNombre);
    miTitulo.innerHTML = 'Kirby saluda a ' + miNombre;
  }
}

