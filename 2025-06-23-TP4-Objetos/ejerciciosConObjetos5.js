// 📝 Ejercicio 5:
// Dado el siguiente arreglo de objetos:

const usuarios = [
  { nombre: "Ana", edad: 22 },
  { nombre: "Luis", edad: 35 },
  { nombre: "Marta", edad: 29 },
  { nombre: "Pedro", edad: 41 },
];

// Filtrar y mostrar solo los usuarios mayores de 30 años  --> usando forEach

// usuarios.forEach((usuario) => {
//   //console.log(usuario.edad);
//   if (usuario.edad > 30) {
//     console.log(`${usuario.nombre} tiene ${usuario.edad} anios `);
//   }
// });


//Otra alternativa:
const mayoresDe30 = usuarios.filter(usuario => usuario.edad > 30);

mayoresDe30.forEach(usuario => {
  console.log(`${usuario.nombre} tiene ${usuario.edad} años`);
});
