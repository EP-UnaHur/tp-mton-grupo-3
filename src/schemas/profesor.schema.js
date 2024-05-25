const Joi = require('joi')
const validateDate = require('../utils/date.validator')

const profesorSchema = Joi.object().keys({
    nombre: Joi.string().required().min(3).max(30).message({
        "string.min": `nombre debe tener al menos {#limit} caracters.`,
        "string.max": `nombre debe tener como máximo {#limit} caracters.`,
        "string.empty": "nombre no puede ser vacio",
        "any.required": "nombre es requerido"      
    }),
    fechaNacimiento: Joi.date().custom(validateDate).messages({
        "any.custom": "El formato de la fecha debe ser YYYY-MM-DD",
        //"any.required": "El campo fecha de nacimiento es obligatorio"
    }),
    legajo: Joi.number().min(3).max(10).message({
        "number.min": `el legajo debe tener al menos {#limit} números.`,
        "number.max": `el legajo debe tener como máximo {#limit} números.`,
    }),
    /*activo: Joi.boolean().required().message({
        "any.required": `debe indicar si está activo o no.`
    })*/
})

module.exports = profesorSchema;