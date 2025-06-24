

document.getElementById("formulario").onsubmit = function (e) {
  e.preventDefault();

  let numero1 = parseInt(document.getElementById("numero1").value);
  let numero2 = parseInt(document.getElementById("numero2").value);

  if (isNaN(numero1) && isNaN(numero2)) {
    Swal.fire({
        icon: 'error',
        text: 'Por favor ingresa valores numéricos válidos en ambos campos.',
        draggable: true
      });
  
    return;
  } else if (isNaN(numero1)) {
    Swal.fire({
        icon: 'error',
        text: 'Por favor ingresa valores numéricos válidos en el campo 1',
        draggable: true
      });
    return;
  } else if (isNaN(numero2)) {
    Swal.fire({
        icon: 'error',
        text: 'Por favor ingresa valores numéricos válidos en el campo 2.',
        draggable: true
      });
 
    return;
  }

  if (numero1>numero2) {
    Swal.fire({
        icon: 'info',
        text: "El número ingresado en el campo 1 es "+numero1+" y es mayor al número ingresado en el campo 2, que es "+numero2,
        draggable: true
      });
  } else if (numero1===numero2) {
    Swal.fire({
        icon: 'info',
        text: "El número ingresado en el campo 1 es " + numero1 + " y es igual al número ingresado en el campo 2, que es " + numero2 + ".",
        draggable: true
      });

  }

  function operaciones(num1, num2) {
    let sumar = num1 + num2;
    let resta = num1 - num2;
    let multiplicar = num1 * num2;
    let dividir = num2 !== 0 ? (num1 / num2) : "No se puede dividir por cero";
    return { sumar, resta, multiplicar, dividir };
  }

  const resultados = operaciones(numero1, numero2);


  Swal.fire({
        icon: 'success',
        text:  "La suma es: " + resultados.sumar +
    " || La resta es: " + resultados.resta +
    " || La multiplicación es: " + resultados.multiplicar +
    " || La división es: " + resultados.dividir,
        draggable: true
      });

};

