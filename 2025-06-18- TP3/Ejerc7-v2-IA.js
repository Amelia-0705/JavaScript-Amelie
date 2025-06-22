//7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla,
// la creación de la tabla debe ser realizada con una función y mostrar solo los resultados
// del 1 al 10 del número elegido por el usuario.

//v2 - Más limpio y reutilizable;   Evita el uso de variables globales;  Más claro en su salida

const num = parseInt(prompt("Ingresá el número que quieres multiplicar:"));

const multiplosMenoresA10 = (n) => {
  const multiplos = [];
  for (let i = 1; n * i <= 10; i++) {
    const resultado = n * i;
    multiplos.push(resultado);
    //console.log(`${resultado} = ${n} * ${i}`);
  }
  return multiplos;
};

const tabla = multiplosMenoresA10(num);

console.log(`Los múltiplos de ${num} menores o iguales a 10 son: ${tabla}`);
