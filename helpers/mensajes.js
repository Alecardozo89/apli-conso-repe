require('colors');


 /*const mostrarMenu = async () =>{
    return new Promise(resolve =>{

        console.log('\n=========================='.green);
        console.log('  Seleccione una opcion'.green);
        console.log('========================== '.green);
    
        console.log(`${'1.'.green} Crear tarea`);
        console.log(`${'2.'.green} Listar tareas`);
        console.log(`${'3.'.green} Listar tareas completadas`);
        console.log(`${'4.'.green} Listar tareas pendientes`);
        console.log(`${'5.'.green} Completar tareas`);
        console.log(`${'6.'.green} Borrar tareas`);
        console.log(`${'0.'.green} Salir \n`);
    
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readLine.question('Seleccione una opcion: ',(opt) =>{
            console.log('\n');
            readLine.close();
            resolve(opt)
        })
    })
}*/

/*const pausa = () =>{
    return new Promise(resolve =>{

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readLine.question(`Presione ${'ENTER'.green} para continuar`,(opt) =>{
            readLine.close()
            resolve()
        })
    })
}*/

module.exports = {
    mostrarMenu
}



