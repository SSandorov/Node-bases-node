// Tarea: crear un .txt con la tabla de multiplicar

// Para ello empleamos el módulo file system de node usnado el require()
const fs = require('fs');



// limpiamos la consola
console.clear();

const base = 7;
let salida = '';

// Añadimos un poco de estilos 'manuales'
console.log('================================');
console.log(`           Tabla del ${base}`);
console.log('================================');


// ejecutamos el bucle for
const tabla5 = () => {

    // creamos una variable que nos almacena los valores del bucle

    for (let i = 1; i <= 10; i++) {
        const valor = base * i;
        salida += `${base} x ${i} = ${valor}\n`;    
    }

    console.log(salida);
}

tabla5();

fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    if(err) throw err;

    console.log(`tabla-${base}.txt creada`);
})