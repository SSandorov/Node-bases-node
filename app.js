// Tarea: mostrar en consola la tabla de multiplicar de 5 hasta 10

// limpiamos la consola
console.clear();

// Añadimos un poco de estilos 'manuales'
console.log('================================');
console.log('           Tabla del 5');
console.log('================================');

// ejecutamos el bucle for
const tabla5 = () => {
    const base = 5;

    for (let i = 1; i <= 10; i++) {
        const valor = base * i;
        console.log(`${base} x ${i} = ${valor}`);      
    }
}

tabla5();