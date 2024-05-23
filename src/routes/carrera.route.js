const {Router} = require('express')
const {Carrera} = require('../db/models')
const carreraController = require('../controllers/carrera.controller')
const middlewareCarrera = require('../middlewares/exists.middleware')
const carreraSchema = require('../schemas/carrera.schema')
const materiaSchema = require('../schemas/materia.schema')
const route = Router()


route.get('/carreras', carreraController.getAllCarreras )

route.get('/carreras/:id', middlewareCarrera.existsById(Carrera) , carreraController.carreraById )

route.post('/carreras', middlewareCarrera.validaSchema(carreraSchema),  carreraController.crearCarrera)

route.post('/carreras/:id/materia', middlewareCarrera.validaSchema(materiaSchema),  carreraController.crearMateriaEnCarrera)

route.get('/carreras/:id/materias', middlewareCarrera.validaSchema(materiaSchema),  carreraController.obtenerMateriasDeCarrera)
module.exports = route