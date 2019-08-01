const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

/* EncodeURI modifica los espacion en blanco por caracteres especiales  */
const ciudad = encodeURI(argv.ciudad);

let getClimaPorCiudad = async(c) => {
    let coordenadas = await lugar.getLugarLatitudLongitud(c);
    let climaLugarByLatLong = await clima.getClimaByLatLong(coordenadas.latitud, coordenadas.longitud);
    //let climaLugarByName = await clima.getClimaByCityName(coordenadas.direccion);
    return climaLugarByLatLong;
}

getClimaPorCiudad(ciudad)
    .then(resultado => console.log(`${resultado.ciudad},${resultado.pais} tiene una temperatura actual de ${resultado.tiempo.temperatura}°C. ${resultado.clima.desc}, con una humedad ambiental del ${resultado.tiempo.humedad}%.\nViento dirección ${resultado.viento.dir} a ${resultado.viento.velocidad} Mts/s.`))
    .catch(err => console.log(`${err}`))

// getClimaPorCoordenadas(direccion)
//     .then(resultado => console.log(resultado))
//     .catch(err => console.log(`${err}`))