function esNumeroValido(valor) {
  return !isNaN(valor) && valor !== '';
}

document.getElementById('btnFunN').addEventListener('click', function () {
   let numero1 = parseInt(document.getElementById("numero1").value);
   let numero2 = parseInt(document.getElementById("numero2").value);


  if (!esNumeroValido(numero1) || !esNumeroValido(numero2)) {
    Swal.fire({
      icon: 'error',
      text: 'Por favor ingrese numeros en ambos campos.',
    });
    return;
  }


  numero2 = parseInt(numero2);

  function sumar() {
    return numero1 + numero2;
  }

  Swal.fire({
    icon: 'info',
    text: 'Resultado de function normal: ' + sumar(),
  });
});

document.getElementById('btnFunA').addEventListener('click', function () {
   let numero1 = parseInt(document.getElementById("numero1").value);
   let numero2 = parseInt(document.getElementById("numero2").value);

  if (!esNumeroValido(numero1) || !esNumeroValido(numero2)) {
    Swal.fire({
      icon: 'error',
      text: 'Por favor ingrese numeros en ambos campos.',
    });
    return;
  }


  const suma = (a, b) => a + b;

  Swal.fire({
    icon: 'info',
    text: 'Resultado de function arrow: ' + suma(numero1, numero2),
  });
});

document.getElementById('btnCam1P').addEventListener('click', function () {
   let numero1 = parseInt(document.getElementById("numero1").value);


  if (!esNumeroValido(numero1)) {
    Swal.fire({
      icon: 'error',
      text: 'Por favor ingresa un número válido en el campo 1.',
    });
    return;
  }



  function esPar(num) {
    return num % 2 === 0;
  }

  Swal.fire({
    icon: 'info',
    text: esPar(numero1)
      ? 'Resultado: el número del campo 1 es par.'
      : 'Resultado: el número del campo 1 no es par.',
  });
});

document.getElementById('btnCam2P').addEventListener('click', function () {

   let numero2 = parseInt(document.getElementById("numero2").value);

  if (!esNumeroValido(numero2)) {
    Swal.fire({
      icon: 'error',
      text: 'Por favor ingresa un número válido en el campo 2.',
    });
    return;
  }



  function esPar(num) {
    return num % 2 === 0;
  }

  Swal.fire({
    icon: 'info',
    text: esPar(numero2)
      ? 'Resultado: el número del campo 2 es par.'
      : 'Resultado: el número del campo 2 no es par.',
  });
});
