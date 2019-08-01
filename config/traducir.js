/* Funcion que define el grado de viento mínimo y máximo de cada punto cardinal */
const definirMinMaxCoordenada = (min, max) => {
    return { min, max }
}

/* Se asignan los puntos cardinales según el rango de grados del viento */
const nD = definirMinMaxCoordenada(1, 11);
const nne = definirMinMaxCoordenada(11, 34);
const ne = definirMinMaxCoordenada(34, 56);
const ene = definirMinMaxCoordenada(56, 79);
const e = definirMinMaxCoordenada(79, 101);
const ese = definirMinMaxCoordenada(101, 124);
const se = definirMinMaxCoordenada(124, 146);
const sse = definirMinMaxCoordenada(146, 169);
const s = definirMinMaxCoordenada(169, 191);
const sso = definirMinMaxCoordenada(191, 214);
const so = definirMinMaxCoordenada(214, 236);
const oso = definirMinMaxCoordenada(236, 259);
const o = definirMinMaxCoordenada(259, 281);
const ono = definirMinMaxCoordenada(281, 304);
const no = definirMinMaxCoordenada(304, 326);
const nno = definirMinMaxCoordenada(326, 349);
const nI = definirMinMaxCoordenada(349, 360);

/* Crea y carga el contenido del Json, con los distintos tipos de clima, con su respectiva traduccion al español. */
let dbClima = [];
const cargarBD = () => {
    try {
        dbClima = require('../db/data.json');
    } catch (error) {
        dbClima = [];
    }
}

/* Traduce la descripcion del clima a español. Empareja ID ingresado, con los del archivo Json */
const traducirClima = (id) => {
    cargarBD();
    let descripcion = '';
    for (let clima of dbClima) {
        for (let data of clima.data) {
            //console.log(data);
            if (data.ID === id) {
                descripcion = data.TranslateSpa;
                break;
            }
        }
    }
    return descripcion;
}

/* Convierte los grados de la dirección del viento en puntos cardinales */
const convertirGradosViento = (grados) => {

    if (grados >= nD.min && grados <= nD.max)
        return 'Norte';
    else if (grados > nne.min && grados <= nne.max)
        return 'Norte-noreste';
    else if (grados > ne.min && grados <= ne.max)
        return 'Noreste';
    else if (grados > ene.min && grados <= ene.max)
        return 'Este-noreste';
    else if (grados > e.min && grados <= e.max)
        return 'Este';
    else if (grados > ese.min && grados <= ese.max)
        return 'Este-sureste';
    else if (grados > se.min && grados <= se.max)
        return 'Sureste';
    else if (grados > sse.min && grados <= sse.max)
        return 'Sur-sureste';
    else if (grados > s.min && grados <= s.max)
        return 'Sur';
    else if (grados > sso.min && grados <= sso.max)
        return 'Sur-suroeste';
    else if (grados > so.min && grados <= so.max)
        return 'Suroeste';
    else if (grados > oso.min && grados <= oso.max)
        return 'Oeste-suroeste';
    else if (grados > o.min && grados <= o.max)
        return 'Suroeste';
    else if (grados > ono.min && grados <= ono.max)
        return 'Oeste-noroeste';
    else if (grados > no.min && grados <= no.max)
        return 'Noroeste';
    else if (grados > nno.min && grados <= nno.max)
        return 'Norte-noroeste';
    else if (grados > nI.min && grados <= nI.max)
        return 'Norte';
    else
        return 'Neutra';
}

/* Se exportan las funciones, para poder ser utilizadas en otros documentos */
module.exports = {
    traducirClima,
    convertirGradosViento
}