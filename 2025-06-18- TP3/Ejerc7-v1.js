//7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla,
// la creación de la tabla debe ser realizada con una función y mostrar solo los resultados
// del 1 al 10 del número elegido por el usuario.

let multiplos = [];
const num = parseInt(prompt("Ingresá el número que quieres multiplicar:"));

const multiplosMenoresA10 = (num) => {
  for (let i = 1; i < 11; i++) {
    let resultado = num * i;
    if (resultado <= 10) {
      multiplos[i - 1] = resultado;
      console.log(multiplos[i - 1], " = ", num, " * ", i);
    } else {
      return multiplos;
    }
  }
  return multiplos;
};

console.log(
  `Los multiplos de ${num} menores a 10 son:  ${multiplosMenoresA10(num)}`
);
