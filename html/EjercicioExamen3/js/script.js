document.getElementById('btnFor').addEventListener('click', function () {
  let secuencia = '';
  for (let numero1 = 1; numero1 <= 10; numero1++) {
    console.log(numero1);
    secuencia += numero1 + ' ';
  }
  Swal.fire('Resultado for', secuencia, 'info');
});

document.getElementById('btnWhile').addEventListener('click', function () {
  let numero = 2;
  let secuencia = '';
  while (numero <= 20) {
    console.log(numero);
    secuencia += numero + ' ';
    numero++;
  }
  Swal.fire('Resultado while', secuencia, 'info');
});

document.getElementById('btnForBreak').addEventListener('click', function () {
  let secuencia = '';
  for (let numero3 = 1; numero3 <= 100; numero3++) {
    console.log(numero3);
    secuencia += numero3 + ' ';
    if (numero3 === 5) {
      break;
    }
  }
  Swal.fire('Resultado for con break', secuencia, 'info');
});
