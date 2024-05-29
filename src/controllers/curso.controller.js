const { Curso, Profesor } = require('../db/models')

const controller = {}

const getAllCursos = async (req, res) => {
    res.status(200).json(await Curso.findAll({}))
}
controller.getAllCursos = getAllCursos;

const cursoById = async (req, res) => {
    const id = req.params.id
    try {
        const result = await Curso.findByPk(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json(`El curso con id: ` + $(id) + ` no existe.`)
    }
}
controller.cursoById = cursoById;

const borrarCurso = async (req, res) => {
    const id = req.params.id;
    const row = await Curso.destroy({ where: { id } })
    if (row) {
        res.status(200).json(`El curso con id ${id} se borro con exito.`)
    } else {
        res.status(404).json(`El Curso con id ${id} no existe.`)
    }
}

controller.borrarCurso = borrarCurso;

const modificarCurso = async (req, res) => {
    const id = req.params.id;
    const curso = await Curso.findByPk(id, { where: { id: id } });
    const data = req.body;
    if (curso) {
        curso.update({
            comision: data.comision,
            turno: data.turno,
            fechaInicio: data.fechaInicio,
            fechaFin: data.fechaFin,
            materiaid: data.materiaid,
        })
        res.status(200).json(curso)
    } else {
        res.status(404).json(`El curso con id: ${id} no existe`)
    }
}

controller.modificarCurso = modificarCurso;

const obtenerProfesoresCurso = async (req, res) => {
    try {
        let id = req.params.id;
        let curso = await Curso.findByPk(id, { where: { id: id }, include: { model: Profesor, as: 'profesor' } });
        return res.status(200).json({ curso: curso })
    } catch (error) {
        res.status(400).json(`Error: ${error.message}`);
    }
}

controller.obtenerProfesoresCurso = obtenerProfesoresCurso;

const crearAsociacionCursoProfesor = async (req, res) => {
    try {
        let cursoId = req.params.id;
        const { profesorid } = req.body;
        let curso = await Curso.findByPk(cursoId);
        if (!curso) {
            return res.status(404).json(`El curso con id: ${cursoId} no existe`);
        }

        let profesores = await Profesor.findAll({ where: { id: profesorid } });

        let asociacionExiste = await curso.hasProfesors(profesores);
        if (asociacionExiste) {
            return res.status(400).json({ error: "La asociación ya existe" });
        }

        await curso.addProfesors(profesores);

        res.status(201).json({ message: "Asociación creada con exito" });
    }
    catch (error) {
        res.status(400).json({ error: "Error al crear la asociación" });
    }
}

controller.crearAsociacionCursoProfesor = crearAsociacionCursoProfesor;

module.exports = controller;