// Importamos el módulo de multplicar.js
const { crearArchivo } = require('./helpers/multiplicar.js');



// limpiamos la consola
console.clear();

const base = 1;

crearArchivo( base )
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(console.log);