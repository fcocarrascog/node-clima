const argv = require('yargs').options({
    ciudad: {
        alias: 'c',
        desc: 'Ingresar el nombre de la ciudad y el país para obtener el clima. Formato "Ciudad, País"',
        demand: true
    }
}).argv;

module.exports = {
    argv
}