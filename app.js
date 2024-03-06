require('colors');
const { menuInteractivo, pausa } = require('./helpers/inquirer');


const main = async () =>{
    let opt = '';
    do {
        opt = await menuInteractivo();
        console.log({opt});
        console.log('\n');
        await pausa();
        
    } while (opt !== '0');
}


main()