const axios = require('axios');

/* Funcion que devuelve la latitud,longitud y nombre de una Ciudad, según el nombde de Ciudad ingresado*/
const getLugarLatitudLongitud = async(dir) => {
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${dir}`,
        headers: { 'x-rapidapi-key': '7cf46d60afmsha362383ede727b9p1dcf1ejsnfab4c40c4c2b' }
    });

    const respuesta = await instance.get();

    if (respuesta.data.Results.length === 0) {
        throw new Error(`No hay resultados para la dirección ${decodeURI(dir)}`);
    }
    const data = respuesta.data.Results[0];
    const direccion = data.name;
    const latitud = data.lat;
    const longitud = data.lon;

    return {
        direccion,
        latitud,
        longitud
    }
}

/* Se exportan las funciones, para poder ser utilizadas en otros documentos */
module.exports = {
    getLugarLatitudLongitud
}