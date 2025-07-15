let tiempoRestante = 0;
let intervalo;
let enMarcha = false;

const inputSegundos = document.getElementById("inputSegundos");
const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

function actualizarDisplay() {
  display.textContent =
    tiempoRestante < 10 ? "0" + tiempoRestante : tiempoRestante;
}

function iniciarTemporizador() {
  if (!enMarcha && tiempoRestante > 0) {
    intervalo = setInterval(() => {
      if (tiempoRestante > 0) {
        tiempoRestante--;
        actualizarDisplay();
      } else {
        clearInterval(intervalo);
        enMarcha = false;
        display.textContent = "00"; // ← Muestra 00 al terminar
        inputSegundos.value = "";
        alert("⏰ ¡Tiempo finalizado!");
      }
    }, 1000);
    enMarcha = true;
  }
}

function pausarTemporizador() {
  clearInterval(intervalo);
  enMarcha = false;
}

function reiniciarTemporizador() {
  clearInterval(intervalo);
  tiempoRestante = 0; // ← Este es el cambio clave
  display.textContent = "00"; // ← Reinicia visualmente el cronómetro
  inputSegundos.value = "";
  enMarcha = false;
  actualizarDisplay(); // ← Esto imprime "00" en pantalla
}
// function reiniciarTemporizador() {
//   clearInterval(intervalo);
//   tiempoRestante = parseInt(inputSegundos.value) || 0;
//   enMarcha = false;
//   actualizarDisplay();
// }

// Eventos
startBtn.addEventListener("click", () => {
  if (!enMarcha) {
    // Si se inicia desde cero
    if (tiempoRestante === 0) {
      tiempoRestante = parseInt(inputSegundos.value) || 0;
      actualizarDisplay();
    }
    iniciarTemporizador();
  }
});

pauseBtn.addEventListener("click", pausarTemporizador);
resetBtn.addEventListener("click", reiniciarTemporizador);
