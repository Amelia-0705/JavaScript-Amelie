// 8- Crea script para generar pirámide siguiente con los números del 1 al número
// que indique el usuario (no mayor de 50)
// 1
// 12
// 123
// 1234

let numeroUsuario = parseInt(prompt("Ingresa un nro no mayor a 50"));
console.log("El nro es", numeroUsuario);

if (numeroUsuario > 0 && numeroUsuario <= 50) {
  for (let i = 1; i <= numeroUsuario; i++) {
    let linea = "";
    for (let j = 1; j <= i; j++) {
      linea += j;
    }
    console.log(linea);
  }
} else {
  console.log("El nro ", numeroUsuario, "no es valido.");
}
