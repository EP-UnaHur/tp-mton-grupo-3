const { Router } = require('express')
const { Curso } = require('../db/models')
const cursoController = require('../controllers/curso.controller')
const middlewareCurso = require('../middlewares/exists.middleware')
const cursoSchema = require('../schemas/curso.schema')
const cursoSchemaEdit = require('../schemas/curso.schema')
const route = Router()


route.get('/cursos', cursoController.getAllCursos)

route.get('/cursos/:id', middlewareCurso.existsById(Curso), cursoController.cursoById)

route.get('/cursos/:id/profesores', cursoController.obtenerProfesoresCurso)

route.post('/cursos/:id/profesores', cursoController.crearAsociacionCursoProfesor)

route.delete('/cursos/:id', middlewareCurso.existsById(Curso), cursoController.borrarCurso)

route.put('/cursos/:id', middlewareCurso.existsById(Curso), middlewareCurso.validaSchema(cursoSchemaEdit), cursoController.modificarCurso)

module.exports = route