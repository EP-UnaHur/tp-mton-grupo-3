const Joi = require('joi')
const validateDate = require('../utils/date.validator')

const profesorSchema = Joi.object().keys({
    nombre: Joi.string().required().min(3).max(30).messages({
        "string.min": `nombre debe tener al menos {#limit} caracters.`,
        "string.max": `nombre debe tener como máximo {#limit} caracters.`,
        "string.empty": "nombre no puede ser vacio",
        "any.required": "nombre es requerido"
    }),
    
    fechaNacimiento: Joi.string().custom(validateDate).required().messages({
        "any.custom": "El formato de la fecha debe ser YYYY-MM-DD",
        "any.required": "El campo fecha de nacimiento es obligatorio"
    }),

    legajo: Joi.number().integer().min(100).max(9999).messages({ //Joi.number().integer().greater(99).less(10000).messages({
        "number.min": `el legajo debe tener al menos 3 números.`,
        "number.max": `el legajo debe tener como máximo 5 números.`
    }),

    activo: Joi.number().integer().required().min(0).max(1).messages({
        "any.required": "debe indicar si está activo o no."
    })
})

module.exports = profesorSchema;