const {Router} = require('express')
const {Carrera} = require('../db/models')
const carreraController = require('../controllers/carrera-controller')
const middlewareCarrera = require('../middlewares/exists.middleware')
const carreraSchema = require('../schemas/carrera-schema')
const route = Router()


route.get('/carreras', carreraController.getAllCarreras )

route.get('/carreras/:id', middlewareCarrera.existsById(Carrera) , carreraController.carreraById )

route.post('/carreras', middlewareCarrera.validaSchema(carreraSchema),  carreraController.crearCarrera)
module.exports = route