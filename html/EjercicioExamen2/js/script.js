document.getElementById("formulario").onsubmit = function (e) {
  e.preventDefault();

  let edad = parseInt(document.getElementById("edad").value);

  if (!isNaN(edad)) {
    if (edad >= 18) {
      Swal.fire({
        icon: 'success',
        text: 'Puede conducir',
        draggable: true
      });
    } else if (edad < 18 && edad >= 0) {
      Swal.fire({
        icon: 'warning',
        text: 'No puede conducir',
        draggable: true
      });
    } 
  } else {
    Swal.fire({
      icon: 'error',
      text: 'Por favor ingrese una edad válida',
      draggable: true
    });
  }
};

