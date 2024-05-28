const Joi = require('joi')
const validateDate = require('../utils/date.validator')

const cursoSchema = Joi.object().keys({
    comision: Joi.string().required().min(3).max(20).messages({
        "string.min": `comision debe tener al menos {#limit} caracters.`,
        "string.max": `comision debe tener como máximo {#limit} caracters.`,
        "string.empty": "comision no puede ser vacio",
        "any.required": "comision es requerido"      
    }),
    turno: Joi.string().required().messages({
        "any.required": "turno es requerido"      

    }),
    fechaInicio: Joi.string().custom(validateDate).required().messages({
        "any.custom": "El formato de la fecha debe ser YYYY-MM-DD",
        "any.required": "El campo fecha es obligatorio"
    }),
    fechaFin: Joi.string().custom(validateDate).required().messages({
        "any.custom": "El formato de la fecha debe ser YYYY-MM-DD",
        "any.required": "El campo fecha es obligatorio"
    })
   
    
})

module.exports = cursoSchema;

const cursoSchemaEdit = Joi.object().keys({
    comision: Joi.string().min(3).max(20).messages({
        "string.min": `comision debe tener al menos {#limit} caracters.`,
        "string.max": `comision debe tener como máximo {#limit} caracters.`,
        "string.empty": "comision no puede ser vacio",
    }),

    turno: Joi.string().messages({
    }),

    fechaInicio: Joi.string().custom(validateDate).messages({
        "any.custom": "El formato de la fecha debe ser YYYY-MM-DD",
    }),
    fechaFin: Joi.string().custom(validateDate).messages({
        "any.custom": "El formato de la fecha debe ser YYYY-MM-DD",
    })
   
    
})

module.exports = cursoSchemaEdit;