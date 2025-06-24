
const USUARIO_VALIDO ="admin";
const CONTRASEÑA_VALIDA = "1234";

function validar() {
  const usuario = document.getElementById("usuario").value;
  const contrasena = document.getElementById("contrasena").value;
  const mensajeError = document.getElementById("mensaje-error");



  if (usuario === USUARIO_VALIDO && contrasena === CONTRASEÑA_VALIDA) { 
   window.location.href = "index.html"
  } else {
    Swal.fire({
      title: "Error!",
      icon: "error",
      text: "Credenciales Invalidas",
      draggable: true
    });
    mensajeError.textContent = "Credenciales Invalidad."
  }
}

document.getElementById("form-login").onsubmit = function(e) {
  e.preventDefault();  
  validar();
}
