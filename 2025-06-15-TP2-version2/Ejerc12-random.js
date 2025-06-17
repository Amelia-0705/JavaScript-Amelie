//la mejora es hacerla reutilizable

const limiteInferior = 1;
const limiteSuperior = 99;
const nroAleatorio = Math.floor(Math.random() * (limiteSuperior - limiteInferior + 1)) + limiteInferior;

console.log(`El nro aleatorio es: ${nroAleatorio}`);