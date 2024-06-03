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

const crearCursoEnMateria = async (req, res) => {
    try {
        let id = req.params.id;
        let materia = await Materia.findByPk(id, { where: { id: id } });
        if (materia) { //si encuentra la materia, le agrega el curso, sino da 404
            req.body.materiaid = id;
            console.log(req.body)
            let curso = await Curso.create(req.body);
            materia.update({
                where: {
                    id: id,
                    Curso: { curso }
                },
                include: [{
                    model: Curso,
                    as: 'cursos'
                }]
            })
            materia = await Materia.findByPk(id, { where: { id: id }, include: { model: Curso, as: 'cursos' } });
            return res.status(200).json({
                materia: materia
            })
        } else {
            return res.status(404).json({
                error: "No existe la materia con id: " + id,
                materia: []
            })
        }
    } catch (error) {
        res.status(400).json(`Error: ${error.message}`);

    }
}
controller.crearCursoEnMateria = crearCursoEnMateria;


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
    
    try{
        const result = await Materia.destroy({ where: { id: id } })
        if(result)
            res.status(200).json(`La materia con id: ${id} ha sido eliminada correctamente`)
        else
            res.status(404).json({ error: `La materia con id: ${id} no existe`})
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
      }
}
controller.deleteMateria = deleteMateria;

module.exports = controller;