    let segundos = 0;
    let minutos = 0;
    let horas = 0;
    let intervalo;
    let enMarcha = false;

    const display = document.getElementById("display");
    const startBtn = document.getElementById("startBtn");
    const pauseBtn = document.getElementById("pauseBtn");
    const resetBtn = document.getElementById("resetBtn");

    function actualizarDisplay() {
      const formato = (valor) => (valor < 10 ? "0" + valor : valor);
      display.textContent = `${formato(horas)}:${formato(minutos)}:${formato(segundos)}`;
    }

    function iniciarCronometro() {
      if (!enMarcha) {
        intervalo = setInterval(() => {
          segundos++;
          if (segundos === 60) {
            segundos = 0;
            minutos++;
          }
          if (minutos === 60) {
            minutos = 0;
            horas++;
          }
          actualizarDisplay();
        }, 1000);
        enMarcha = true;
      }
    }

    function pausarCronometro() {
      clearInterval(intervalo);
      enMarcha = false;
    }

    function reiniciarCronometro() {
      clearInterval(intervalo);
      segundos = 0;
      minutos = 0;
      horas = 0;
      enMarcha = false;
      actualizarDisplay();
    }

    startBtn.addEventListener("click", iniciarCronometro);
    pauseBtn.addEventListener("click", pausarCronometro);
    resetBtn.addEventListener("click", reiniciarCronometro);
