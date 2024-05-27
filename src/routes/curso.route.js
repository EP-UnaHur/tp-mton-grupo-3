const {Router} = require('express')
const {Curso} = require('../db/models')
const cursoController = require('../controllers/curso.controller')
const middlewareCurso = require('../middlewares/exists.middleware')
const cursoSchema = require('../schemas/curso.schema')
const route = Router()


route.get('/curso', cursoController.getAllCursos )

route.get('/cursos/:id', middlewareCurso.existsById(Curso) , cursoController.cursoById )

route.post('/curso/id/profesor', middlewareCurso.validaSchema(cursoSchema),  cursoController.crearcurso)
module.exports = route