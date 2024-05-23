const {Carrera,Materia} = require('../db/models')

const controller = {}

const getAllCarreras = async (req, res) => {
    res.status(200).json(await Carrera.findAll({include: [{
        model: Materia,
        as: 'materias'
    }]}))
}
controller.getAllCarreras = getAllCarreras;

const carreraById = async(req, res) => {
    const id = req.params.id
    try {
        const result = await Carrera.findByPk((id, 
            {
                where: {
                    id: id,
                },
                include: [{
                    model: Materia,
                    as: 'materias'
                }]
            }
        ));
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
        let materia = await Materia.create(req.body);
        let data = await Carrera.findByPk(id, 
            {
                where: {
                    id: id,
                    Materia: {materia}
                },
                include: [{
                    model: Materia,
                    as: 'materias'
                }]
            }
        );
        if (data)
            return res.status(200).json({
                success: true,
                data: data
            })
        else
            return res.status(200).json({
                success: false,
                error: "No existe esa carrera",
                data: []
            })
      /*   console.log(req.body.carreraid) //no estoy segura como manejar los datos, en qué orden hacer las cosas
        const carrera = Carrera.findByPk(req.body.carreraid);
        const materia = Materia.create(req.body)
      res.status(201).json(materia); */

    } catch (error) {
      res.status(400).json(`Error: ${error.message}`);
            
    }
}
controller.crearMateriaEnCarrera = crearMateriaEnCarrera;

module.exports = controller;