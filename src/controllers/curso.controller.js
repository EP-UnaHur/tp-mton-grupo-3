const {Curso} = require('../db/models')

const controller = {}

const getAllCursos = async (req, res) => {
    res.status(200).json(await Curso.findAll({}))
}
controller.getAllCursos = getAllCursos;

const cursoById = async(req, res) => {
    const id = req.params.id
    try {
        const result = await Curso.findByPk(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json(`El curso con id: ` + $(id) + ` no existe.`)
    }
}
controller.cursoById = CursoById;

// const crearCurso = async (req, res) => {
//     const materia = req.body;
//     try {
//       const newRecord = await Curso.create(materia); 
//       res.status(201).json(newRecord);
//     } catch (error) {
//       res.status(400).json(`Error: ${error.message}`);
//     }
// }       ---- NO SE SI EL CURSO SE CREA ACA O EN MATERIA ----

//controller.crearCurso = crearCurso;



const borrarCurso = async (req, res)=>{
    const id = req.params.id;
    const row = await db.Curso.destroy({where: {id}})
    if(row) {
     res.status(200).json(`El curso con id ${id} se borro con exito.`)
    } else {
     res.status(404).json(`El Curso con id ${id} no existe.`)
    }
 }

 controller.borrarCurso = borrarCurso;

const editarDatoCurso = (req, res)=>{
    const id = req.params.id;
    const idx = data.findIndex( e => e.id == id)
    if (idx >=0) {
      data[idx] = {id: Number(id), ...req.body}
      res.status(200).json(data[idx])
    } else
      res.status(404).json({error: `El id ${id} no existe.`})
}

controller.editarDatoCurso = editarDatoCurso;

const obtenerProfesoresCurso = async (req,res) => {
    try {
        let id = req.params.id;
        let curso = await Curso.findByPk(id, { where: {id: id}, include: {model: Profesor, as:'profesor'}});
        return res.status(200).json({ curso: curso })
    } catch (error) {
        res.status(400).json(`Error: ${error.message}` );
    }
}

controller.obtenerProfesoresCurso = obtenerProfesoresCurso;

module.exports = controller;