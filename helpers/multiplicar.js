// Tarea: crear un .txt con la tabla de multiplicar

// Para ello empleamos el módulo file system de node usnado el require()
const fs = require('fs');

// Para mantener los archivos ordenados, seraparamos la lógica en varios documentos
const crearArchivo = async( base = 5) => {

    // Añadimos un poco de estilos 'manuales'
    console.log('================================');
    console.log(`           Tabla del ${base}`);
    console.log('================================');

    let salida = '';
    // ejecutamos el bucle for

    try {

        for (let i = 1; i <= 10; i++) {
            const valor = base * i;
            salida += `${base} x ${i} = ${valor}\n`;    
        }

        console.log(salida);

        // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
        //     if(err) throw err;

        //     console.log(`tabla-${base}.txt creada`);
        // })
        // Hoy en día es mejor emplear el writeFileSync
        fs.writeFileSync(`tabla-${ base }.txt`, salida);

        return `tabla-${base}.txt`;
    } catch (error) {
        return error;
    }
}

// No podemos emplear la característica export del ECMA6, así que empleamos los módulos
// para exportar elementos a otro archivo

module.exports = {
    crearArchivo: crearArchivo
}