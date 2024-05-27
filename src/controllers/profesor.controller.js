const {Profesor, Curso} = require('../db/models')

const controller = {}

const getAllProfesores = async (req, res) => {
    res.status(200).json(await Profesor.findAll({}))
}

controller.getAllProfesores = getAllProfesores;

const profesorById = async(req, res) => {
    const id = req.params.id
    try {
        const result = await Profesor.findByPk((id));
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json(`El profesor con id: ${id} no existe.`)
    }
}
controller.profesorById = profesorById;

const crearProfesor = async (req, res) => {
    const profesor = req.body;
    try {
        const newRecord = await Profesor.create(profesor);
        res.status(201).json(newRecord);
    } catch (error) {
        res.status(400).json(`Error: ${error.message}`);
    }
}

controller.crearProfesor = crearProfesor;

const modificarProfesor = async (req, res) => {
    const id = req.params.id;
    const profesores = await Profesor.findAll()
    const idx = profesores.findIndex(e => e.id == id)
    if (idx >=0){
        Profesor[idx] = {id: Number(id), ...req.body}
        res.status(200).json(Profesor[idx])
    } else 
        res.status(404).json(`El profesor con id: ${id} no existe.`)

}

controller.modificarProfesor = modificarProfesor;

const borrarProfesor = async (req, res) => {
    const id = req.params.id;
    const row = await Profesor.destroy({where: {id}})
    try {
        if(row)
            res.status(200).json(`El profesor con id ${id} se borró con éxito`)
        else
            res.status(404).json(`El profesor con id ${id} no existe`)
    } catch (err) {
        res.status(500).json(err.message)
    }
}

controller.borrarProfesor = borrarProfesor;

/*const cursosDeProfesor = async(req, res) => {
    const id = req.params.id;
    try {
        const result = await Profesor.findByPk((id));
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(`El profesor con id: ${id} no existe.`)
    }

}*/ //falta continuar


module.exports = controller;