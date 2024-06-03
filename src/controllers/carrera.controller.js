const { Carrera, Materia } = require('../db/models')

const controller = {}

const getAllCarreras = async (req, res) => {
    res.status(200).json(await Carrera.findAll({
        include: [{
            model: Materia,
            as: 'materias'
        }]
    }))
}
controller.getAllCarreras = getAllCarreras;

const carreraById = async (req, res) => {
    const id = req.params.id
    try {
        const result = await Carrera.findByPk(id,
        {
            where: {
                id: id,
            },
            include: [{
                model: Materia,
                as: 'materias'
            }]
        }
        );
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

const crearMateriaEnCarrera = async (req, res) => {
    try {
        let id = req.params.id;
        let carrera = await Carrera.findByPk(id, { where: { id: id } });
        if (carrera) { //si encuentra la carrera, le agrega la materia, sino da 404
            req.body.carreraid = id;
            console.log(req.body);
            let materia = await Materia.create(req.body);
            carrera.update({
                where: {
                    id: id,
                    Materia: { materia }
                },
                include: [{
                    model: Materia,
                    as: 'materias'
                }]
            })
            carrera = await Carrera.findByPk(id, { where: { id: id }, include: { model: Materia, as: 'materias' } });
            return res.status(200).json({
                carrera: carrera
            })
        } else {
            return res.status(404).json({
                error: "No existe la carrera con id: " + id,
                carrera: []
            })
        }
    } catch (error) {
        res.status(400).json(`Error: ${error.message}`);

    }
}
controller.crearMateriaEnCarrera = crearMateriaEnCarrera;

const obtenerMateriasDeCarrera = async (req, res) => {
    try {
        let id = req.params.id;
        let carrera = await Carrera.findByPk(id, { where: { id: id }, include: { model: Materia, as: 'materias' } });
        return res.status(200).json({ carrera: carrera })
    } catch (error) {
        res.status(400).json(`Error: ${error.message}`);
    }
}
controller.obtenerMateriasDeCarrera = obtenerMateriasDeCarrera;
module.exports = controller;