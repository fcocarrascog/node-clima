const axios = require('axios');
const traducir = require('../config/traducir');

/* Obtiene los datos del clima, segun la latitud y longitud de la Ciudad ingresada. */
const getClimaByLatLong = async(latitud, longitud) => {

    var resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?APPID=b27796cb1e1e1c46e7ebe31bc6daec54&lat=${latitud}&lon=${longitud}&units=metric`);

    var { tm, wt, wnd } = '';

    if (resp.data.cod === 200) {

        wt = resp.data.weather[0];
        tm = resp.data.main;
        wnd = resp.data.wind;

        return {
            clima: {
                id: wt.id,
                estado: wt.main,
                desc: traducir.traducirClima(wt.id)
            },
            tiempo: {
                temperatura: tm.temp,
                minima: tm.temp_min,
                maxima: tm.temp_max,
                humedad: tm.humidity
            },
            viento: {
                velocidad: wnd.speed,
                dir: traducir.convertirGradosViento(wnd.deg)
            },
            pais: resp.data.sys.country,
            ciudad: resp.data.name

        }
    } else {
        throw new Error('No es posible obtener el Clima para la dirección ingresada.');
    }
}

/* Funcion que devuelve los datos del clima de una ciudad, según el nombre de la ciudad ingresada */
const getClimaByCityName = async(name) => {

    var resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&APPID=b27796cb1e1e1c46e7ebe31bc6daec54&units=metric`);
    var { tm, wt, wnd } = '';

    if (resp.data.cod === 200) {

        wt = resp.data.weather[0];
        tm = resp.data.main;
        wnd = resp.data.wind;

        return {
            clima: {
                id: wt.id,
                estado: wt.main,
                desc: traducir.traducirClima(wt.id)
            },
            tiempo: {
                temperatura: tm.temp,
                minima: tm.temp_min,
                maxima: tm.temp_max,
                humedad: tm.humidity
            },
            viento: {
                velocidad: wnd.speed,
                dir: traducir.convertirGradosViento(wnd.deg)
            },
            pais: resp.data.sys.country,
            ciudad: resp.data.name

        }
    } else {
        throw new Error('No es posible obtener el Clima para la Ciudad ingresada.');
    }
}

/* Se exportan las funciones, para poder ser utilizadas en otros documentos */
module.exports = {
    getClimaByLatLong,
    getClimaByCityName
}