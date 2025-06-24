function validar() {
  const mensajeError = document.getElementById('mensaje');
  mensajeError.textContent = "¡Botón Presionado!";
}

document.getElementById('clicker').addEventListener('click', function (e) {
  e.preventDefault();
  validar();
});
