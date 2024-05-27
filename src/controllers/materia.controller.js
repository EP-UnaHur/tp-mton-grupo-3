const { Materia, Curso } = require('../db/models')

const controller = {}

const getAllMaterias = async (req, res) => {
    res.status(200).json(await Materia.findAll({}))
}
controller.getAllMaterias = getAllMaterias;

const materiaById = async (req, res) => {
    const id = req.params.id
    try {
        const result = await Materia.findByPk(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json(`La materia con id: ` + $(id) + ` no existe.`)
    }
}
controller.materiaById = materiaById;

const crearMateria = async (req, res) => {
    const carrera = req.body;
    try {
        const newRecord = await Materia.create(carrera);
        res.status(201).json(newRecord);
    } catch (error) {
        res.status(400).json(`Error: ${error.message}`);
    }
}
controller.crearMateria = crearMateria;


const getCursosDeMaterias = async (req, res) => {
    try {
        let id = req.params.id;
        let materia = await Materia.findByPk(id, { where: { id: id }, include: { model: Curso, as: 'cursos' } });
        if (!materia) {
            return res.status(404).json({ error: 'Materia no encontrada' });
        }
        return res.status(200).json({ materia: materia })
    } catch (error) {
        res.status(404).json(`Error: ${error.message}`)
    }
}
controller.getCursosDeMaterias = getCursosDeMaterias;

const deleteMateria = async (req, res) => {
    const id = req.params.id
    try {
        const result = await Materia.destroy({ where: { id: id } })
        res.status(200).json(`La materia con id: ${id} ha sido eliminada correctamente`)
    } catch (error) {
        res.status(404).json(error.message)
    }
}
controller.deleteMateria = deleteMateria;

module.exports = controller;