const { Router } = require('express')
const { Materia } = require('../db/models')
const materiaController = require('../controllers/materia.controller')
const middlewareMateria = require('../middlewares/exists.middleware')
const materiaSchema = require('../schemas/materia.schema')
const route = Router()


route.get('/materias', materiaController.getAllMaterias)

route.get('/materias/:id', middlewareMateria.existsById(Materia), materiaController.materiaById)

route.delete('/materias/:id', middlewareMateria.existsById(Materia), materiaController.deleteMateria)
//Delete	/materias/:id	200, 404, 500	Borra una materia en particular

route.post('/materias/id/curso', middlewareMateria.validaSchema(materiaSchema), materiaController.crearMateria) //Crea un Curso para la la Materia

route.get('/materias/:id/curso', materiaController.getCursosDeMaterias) //Obtiene los Cursos de la Materia


module.exports = route