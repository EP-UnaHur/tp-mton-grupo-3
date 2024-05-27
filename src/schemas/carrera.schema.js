const Joi = require('joi')

const carreraSchema = Joi.object().keys({
    nombre: Joi.string().required().min(3).max(20).messages({
        "string.min": `nombre debe tener al menos {#limit} caracters.`,
        "string.max": `nombre debe tener como máximo {#limit} caracters.`,
        "string.empty": "nombre no puede ser vacio",
        "any.required": "nombre es requerido"      
    }),
    grado: Joi.string().required().messages({
        "any.required": "grado es requerido"      

    }),
    universidad: Joi.string().required().messages({
        "any.required": "universidad es requerido"      

    })
   
})

module.exports = carreraSchema;