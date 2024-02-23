document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('nombre').value = '';
    document.getElementById('edad').value = '';
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
});

function calcular() {
    // valores
    var nombre = document.getElementById("nombre").value;
    var edad = parseInt(document.getElementById("edad").value);
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);

    // Validar que los campos
    if (nombre === "" || isNaN(edad) || isNaN(peso) || isNaN(altura)) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Calcular
    var imc = peso / (altura * altura);

    // Clasificar
    var clasificacion;
    if (imc < 18.5) {
      clasificacion = "bajo peso";
    } else if (imc >= 18.5 && imc < 25) {
      clasificacion = "peso normal";
    } else if (imc >= 25 && imc < 30) {
      clasificacion = "sobrepeso";
    } else {
      clasificacion = "obesidad";
    }

    // Mostrar el resultado
    var resultado = "Resultado: " + nombre + " de " + edad + " años tiene " + imc.toFixed(2) + " de IMC y se clasifica como " + clasificacion;
    console.log(resultado);
    document.getElementById("resultado").innerText = resultado;
    alert(resultado)
  }

function calificarAlumnos() {
  // Cantidad de alumnos
  var alumnos = prompt("Cantidad de alumnos:");
  alumnos = parseInt(alumnos);

  // Validar que la cantidad
  if (isNaN(alumnos) || alumnos <= 0) {
    alert("Número no válido de alumnos, favor de intentar de nuevo.");
  } else {
    // Arreglos: nombres y calificaciones
    var nombres = [];
    var calificaciones = [];

    // Capturar datos
    for (var i = 0; i < alumnos; i++) {
      var nombre = prompt("Ingrese el nombre del alumno " + (i + 1) + ":");
      var calificacion1 = prompt("Ingrese la calificación (entre 0 y 10) 1 de " + nombre + ":");
      var calificacion2 = prompt("Ingrese la calificación (entre 0 y 10) 2 de " + nombre + ":");
      var calificacion3 = prompt("Ingrese la calificación (entre 0 y 10) 3 de " + nombre + ":");

      // Validar datos
      if (isNaN(calificacion1) || isNaN(calificacion2) || isNaN(calificacion3) ||
          calificacion1 < 0 || calificacion1 > 10 ||
          calificacion2 < 0 || calificacion2 > 10 ||
          calificacion3 < 0 || calificacion3 > 10) {
        alert("Ingrese calificaciones válidas (entre 0 y 10)");
        i--;
      } else {
        nombres.push(nombre);
        calificaciones.push({
          calificacion1: parseFloat(calificacion1),
          calificacion2: parseFloat(calificacion2),
          calificacion3: parseFloat(calificacion3),
        });
      }
    }

    // Calcular promedio y mostrar resultados
    var promedios = [];
    var rowContainer = document.getElementById('resultadosContainer');
    var promedioGeneral = document.getElementById('promedioGeneral');
    
    rowContainer.innerHTML = "";
    promedioGeneral.innerHTML = "";

    for (var i = 0; i < alumnos; i++) {
      var promedio = (calificaciones[i].calificacion1 + calificaciones[i].calificacion2 + calificaciones[i].calificacion3) / 3;
      promedios.push(promedio);

      if (promedio >= 7) {
        console.log(nombres[i] + " Aprobó con promedio " + promedios[i].toFixed(2) + ". Felicidades!");
        rowContainer.innerHTML += "<p> - " + nombres[i] + " Aprobó con promedio " + promedios[i].toFixed(2) + ". Felicidades!" + "</p>";
      } else {
        console.log(nombres[i] + " Reprobó con promedio " + promedios[i].toFixed(2) + ". Ya ve, por faltar y no hacer tarea!");
        rowContainer.innerHTML += "<p> - " + nombres[i] + " Reprobó con promedio " + promedios[i].toFixed(2) + ". Ya ve, por faltar y no hacer tarea!" + "</p>";
      }
    }

    var pGeneral = promedios.reduce((a, b) => a + b, 0) / alumnos;
    console.log("Promedio General: " + pGeneral.toFixed(2));
    promedioGeneral.innerHTML = "Promedio Global: " + pGeneral.toFixed(2);
  }
}