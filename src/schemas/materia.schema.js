const Joi = require('joi')
const validateDate = require('../utils/date.validator')

const carreraSchema = Joi.object().keys({
    nombre: Joi.string().required().min(3).max(20).messages({
        "string.min": `nombre debe tener al menos {#limit} caracters.`,
        "string.max": `nombre debe tener como máximo {#limit} caracters.`,
        "string.empty": "nombre no puede ser vacio",
        "any.required": "nombre es requerido"      
    }),
    cuatrimestral: Joi.number().required().messages({
        "any.required": "cuatrimestral es requerido"      

    }),
    anio: Joi.number().required().messages({
        "any.required": "anio es requerido"      

    }),

});

module.exports = carreraSchema;