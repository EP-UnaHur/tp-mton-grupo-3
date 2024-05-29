const {Router} = require('express')
const {Profesor} = require('../db/models')
const profesorController = require('../controllers/profesor.controller')
const middlewareProfesor = require('../middlewares/exists.middleware')
const profesorSchema = require('../schemas/profesor.schema')
const route = Router()

route.get('/profesores', profesorController.getAllProfesores)

route.get('/profesores/:id', middlewareProfesor.existsById(Profesor), profesorController.profesorById)

route.post('/profesores', middlewareProfesor.validaSchema(profesorSchema), profesorController.crearProfesor)

route.put('/profesores/:id', middlewareProfesor.existsById(Profesor), middlewareProfesor.validaSchema(profesorSchema), profesorController.modificarProfesor)

route.delete('/profesores/:id', profesorController.borrarProfesor)

route.get('/profesores/:id/cursos', profesorController.obtenerCursosDeProfesor)

module.exports = route