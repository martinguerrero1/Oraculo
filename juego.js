// ============================================================
//  VIDEOJUEGO — El Oráculo
//  Demostración en vivo: while, if/else, variables, DOM básico
// ============================================================

// --- Estado del juego ---
let numeroSecreto = generarNumero();
let intentos = 0;
let juegoActivo = true;

function generarNumero() {
  // numero random entre 0 y >1, multiplicado por 100 para que tome los 2 primero digitos despues de la coma, reducido los decimales y sumandole uno para que capte del 1 al 100 y no del 0 al 99
  const numero = Math.floor(Math.random() * 100) + 1;
  console.log(numero);
  return numero
}

function adivinar() { 
  mostrarIntentos(`Intentos: ${intentos}`)

  let intento = Number(document.getElementById("inputNumero").value);
  console.log("Value del input:", intento);

  // validacion para que el input sea un numero entero
  if(Number.isNaN(intento) || intento > 1 || intento < 100) {
    mostrarMensaje("Ingresa un numero entre 1 y 100");
  }

  intentos++;

  // verificacion donde se adivina el numero
  if(intento === numeroSecreto){
    mostrarMensaje(`Perfecto! El numero era ${intento}`)
    mostrarIntentos(`Te llevó un total de ${intentos} intentos`)
    document.getElementById("btnReset").style.display = "block";
  }
  else if (intento < numeroSecreto){
    mostrarMensaje(`Incorrecto! El numero secreto es mayor a ${intento}`)
  }
  else if (intento > numeroSecreto){
    mostrarMensaje(`Incorrecto! El numero secreto es menor a ${intento}`)
  }

  document.getElementById("inputNumero").value = "";
}

function reiniciar() {
  numeroSecreto = generarNumero();
  intentos = 0;
  mostrarMensaje("");
  mostrarIntentos("");
  document.getElementById("inputNumero").value = "";
}

// --- Helpers de UI ---
function mostrarMensaje(texto) {
  document.getElementById("mensaje").textContent = texto;
}

function mostrarIntentos(texto) {
  document.getElementById("intentos").textContent = texto;
}

// Permitir presionar Enter para adivinar
document
  .getElementById("inputNumero")
  .addEventListener("keydown", function (e) {
    if (e.key === "Enter") adivinar();
  });
