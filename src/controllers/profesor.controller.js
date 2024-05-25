const {Profesor, Curso} = require('../db/models')

const controller = {}

const getAllProfesores = async (req, res) => {
    res.status(200).json(await Profesor.findAll({include: [{
        model: Profesor,
        as: 'profesores'
    }]}))
}

controller.getAllProfesores = getAllProfesores;

const profesorById = async(req, res) => {
    const id = req.params.id
    try {
        const result = await Profesor.findByPk((id,
            {
                where: {
                    id: id,
                },
                include: [{
                    model: Profesor,
                    as: 'profesores'
                }]
            }
        ));
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json(`El profesor con id:` + $(id) + `no existe.`)
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



module.exports = controller;