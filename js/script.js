// Obtener referencia a los elementos del DOM
const contadorElemento = document.getElementById("contador");
const botonIncrementar = document.querySelector("button");

// Inicializar contador
let contador = 0;

// Función para actualizar el contador y mostrarlo en la página


// Agregar un event listener al botón para que llame a la función cuando se hace clic
botonIncrementar.addEventListener("click", actualizarContador);