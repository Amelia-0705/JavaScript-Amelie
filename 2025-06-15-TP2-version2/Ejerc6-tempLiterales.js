//uso una funcion para hacer el codigo reutilizable

// `${i}` convierte el número i en una cadena de texto utilizando template literals (comillas invertidas).
//  Aunque también podrías usar i.toString(), 
// esto es una alternativa más versátil.


function piramideHasta(n) {
  for (let i = 1; i <= n; i++) {
    console.log(`${i}`.repeat(i));
  }
}

piramideHasta(30);
