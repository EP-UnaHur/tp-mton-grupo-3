const {Profesor, Curso, Materia} = require('../db/models')

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
    const profesor = await Profesor.findByPk(id, {where:{id:id}}); 
    const data = req.body;
    if (profesor) {
        profesor.update({
            nombre: data.nombre,
            fechaNacimiento: data.fechaNacimiento,
            legajo: data.legajo,
            activo: data.activo
        })
        res.status(200).json(profesor)
    } else {
        res.status(404).json(`El profesor con id: ${id} no existe`)
    }
}

controller.modificarProfesor = modificarProfesor;

const borrarProfesor = async (req, res) => {
    const id = req.params.id;
    try {
        const row = await Profesor.destroy({where: {id}})
        if(row)
            res.status(200).json(`El profesor con id ${id} se borró con éxito`)
        else
            res.status(404).json(`El profesor con id ${id} no existe`)
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

controller.borrarProfesor = borrarProfesor;

const obtenerCursosDeProfesor = async(req, res) => {
    try {
        let id = req.params.id;
        let profesor = await Profesor.findByPk(id, { where: { id: id }, 
            include:[ { 
                model: Curso, 
                as: "cursos",
                through: {attributes: []}, //sin esto trae también la asociacion curso_profesor
                include: [{
                    model: Materia,
                    as:"materias"
                }]
            },
        ]

        });
        return res.status(200).json({ profesor: profesor })
    } catch (error) {
        res.status(400).json(`Error: ${error.message}`);
    }
} 
controller.obtenerCursosDeProfesor = obtenerCursosDeProfesor;


module.exports = controller;