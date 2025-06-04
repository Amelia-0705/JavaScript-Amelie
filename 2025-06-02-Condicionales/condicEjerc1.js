// Edad y compra de auto (con permiso especial)
// Instrucciones:
// Pedí al usuario que ingrese su edad utilizando prompt().
// Convertí ese valor a número usando parseInt().
// Usá una estructura if / else if / else para mostrar por consola lo siguiente:
// Si la edad es mayor o igual a 18, mostrar: "Podés comprar".
// Si la edad es exactamente 17, mostrar: "Podés comprar si venís acompañado de tu padre/madre o tutor".
// Si la edad es menor a 17, mostrar: "No podés comprar, necesitás venir con un adulto mayor de edad".


const edad = parseInt(prompt("Ingrese su edad"));

if (edad >= 18) {
  console.log("Podés comprar");
 } else if (edad === 17) {
   console.log("Podés comprar si venís acompañado de tu padre/madre o tutor");
 } else {   //    edad < 17
  console.log("No podés comprar, necesitás venir con un adulto mayor de edad");
}
