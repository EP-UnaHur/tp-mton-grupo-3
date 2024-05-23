const {Carrera} = require('../db/models')

const controller = {}

const getAllCarreras = async (req, res) => {
    res.status(200).json(await Carrera.findAll({}))
}
controller.getAllCarreras = getAllCarreras;

const carreraById = async(req, res) => {
    const id = req.params.id
    try {
        const result = await Carrera.findByPk(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json(`La carrera con id: ` + $(id) + ` no existe.`)
    }
}
controller.carreraById = carreraById;

const crearCarrera = async (req, res) => {
    const carrera = req.body;
    try {
      const newRecord = await Carrera.create(carrera); 
      res.status(201).json(newRecord);
    } catch (error) {
      res.status(400).json(`Error: ${error.message}`);
    }
}
controller.crearCarrera = crearCarrera;

module.exports = controller;