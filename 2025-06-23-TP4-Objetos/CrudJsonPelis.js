let peliculas = [];

function guardarEnLocalStorage() {
  const peliculasJSON = JSON.stringify(peliculas);
  localStorage.setItem("peliculas", peliculasJSON);
}

//create
function agregarPeli(titulo, director, anio, calificacion) {
  //crear el nuevo objeto
  const nuevaPeli = {
    id: Date.now(),
    titulo, // titulo: titulo,
    director,
    anio,
    calificacion,
  };

  //agregar la nueva peli al listado de peliculas
  peliculas.push(nuevaPeli);

  //Cargar JSON en LocalStorage
  guardarEnLocalStorage();

console.log("Pelicula agregada: ", nuevaPeli);
}

agregarPeli("Harry Potter", "felipe Marrone", 2006, 10);
agregarPeli("Casablanca", "Michael Curtiz", 1942, 9.2);
console.log(peliculas);

//function mostrarPelis() {}
