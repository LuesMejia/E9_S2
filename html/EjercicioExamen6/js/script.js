/*
Ejercicio 10 semana 2
Luesbelin Julieth Mejia Garcia
*/



document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");


  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const dia = document.getElementById("dia").value;
    switch (dia) {
      case "Domingo":

        Swal.fire({
          icon: 'info',
          text: 'El día Domingo es día de fin de semana',
        });
        break;

      case "Lunes":
         Swal.fire({
          icon: 'info',
          text: 'El día Lunes es día laboral',
        });
     
        break;

      case "Martes":
          Swal.fire({
          icon: 'info',
          text: 'El día Martes es día laboral',
        });
        break;

      case "Miercoles":
       Swal.fire({
          icon: 'info',
          text: 'El día Miercoles es día laboral',
        });
        break;

      case "Jueves":
          Swal.fire({
          icon: 'info',
          text: 'El día Jueves es día laboral',
        });
        break;

      case "Viernes":
      Swal.fire({
          icon: 'info',
          text: 'El día Viernes es día laboral',
        });
        break;

      case "Sabado":
        Swal.fire({
          icon: 'info',
          text: 'El día Sabado es día de fin de semana',
        });
        break;

      default:
          Swal.fire({
          icon: 'info',
          text: 'Este no es un dia de semana',
        });
        break;
    }

  });
});