const btnComenzarJuego = document.getElementById("btnComenzarJuego");
let numeroMagico;

btnComenzarJuego.addEventListener("click", function () {
  numeroMagico = Math.floor(Math.random() * 10 + 1);
  btnComenzarJuego.style.display = "none"; // Lo oculta completamente
  numeroMagicoUsuario.disabled = false;
  botonEnviar.disabled = false;
  console.log(numeroMagico);
});

const formNumeroMagico = document.getElementById("formNumeroMagico");
let numeroMagicoUsuario = document.getElementById("numeroMagicoUsuario");
let botonEnviar = document.getElementById("botonEnviar");

//   formNumeroMagico.addEventListener("submit", function (event) {
//     event.preventDefault();
//     console.log(numeroMagicoUsuario.value);

//     if (numeroMagico > parseInt(numeroMagicoUsuario.value)) {
//       console.log("El nro magico es mayor q xxxx.   Vuelve a intentar.");
//     } else {
//       console.log("l nro magico es menor q xxxx.   Vuelve a intentar.");
//     }
//     numeroMagicoUsuario.value = "";
//     numeroMagicoUsuario = document.getElementById("numeroMagicoUsuario");
//   });

const resultado = document.getElementById("resultado");

formNumeroMagico.addEventListener("submit", (e) => {
  e.preventDefault();

  if (numeroMagico === parseInt(numeroMagicoUsuario.value)) {
    alert("Correcto! 🎉 Adivinaste el número mágico");
    numeroMagicoUsuario.disabled = true;
    botonEnviar.disabled = true;
    btnComenzarJuego.style.display = "block";
  } else if (numeroMagico > parseInt(numeroMagicoUsuario.value)) {
    alert("Muy bajo. Intentá con un número más grande.");
  } else {
    alert("Demasiado alto. Intentá con un número más chico.");
  }

  numeroMagicoUsuario.value = ""; // Limpiar para el próximo intento
});
