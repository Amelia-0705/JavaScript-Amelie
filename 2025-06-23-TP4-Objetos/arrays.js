//Un arreglo de objetos es muy común cuando trabajamos con listas de cosas (usuarios, productos, etc.):
const personas = [
  { nombre: "Lucía", edad: 30 },
  { nombre: "Juan", edad: 25 },
  { nombre: "María", edad: 28 },
];

// console.log(personas);
// personas.forEach((persona) => console.log(persona));

personas.forEach((persona) => {
  console.log(persona.nombre + " tiene " + persona.edad + " años.");
});
