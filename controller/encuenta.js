const { response } = require('express')
const Encuesta = require('../models/encuesta')

const getEncuesta = (req, res = response) => {
    const { nombreEncuesta, fecha, documentoEncuestado, nombreEncuestado, edad, genero, empleado  } = req.query
    res.json({
        msg: 'GET API ENCUESTA',
        nombreEncuesta, fecha, documentoEncuestado, nombreEncuestado, edad, genero, empleado
    })
}

const postEncuesta = async (req, res) => {
    //Desestructuracion
    const { nombreEncuesta, fecha, documentoEncuestado, nombreEncuestado, edad, genero, empleado  } = req.body

    //recibir parametros y desestructurarlos 
    // instanciar el objeto con los parametros y recibirlos
    const encuesta = new Encuesta({ nombreEncuesta, fecha, documentoEncuestado, nombreEncuestado, edad, genero, empleado })


    await encuesta.save()

    res.json({
        msg: 'POST API Encuesta',
        encuesta
    })
}

module.exports = {
    getEncuesta,
    postEncuesta
}