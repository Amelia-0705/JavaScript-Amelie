// 7- Haz un script que escriba una pirámide inversa de los números del 1 al
// número que indique el usuario (no mayor de 50)  de la siguiente forma :
// (suponiendo que indica 3).
// 333
// 22
// 1

let numeroUsuario = parseInt(prompt("Ingresa un nro no mayor a 50"));
if (numeroUsuario < 0 || numeroUsuario > 50) {
  console.log("El nro ", numeroUsuario, "no es valido.");
} else {
  for (let i = numeroUsuario; i > 0; i--) {
    console.log(i.toString().repeat(i));
  }
}
