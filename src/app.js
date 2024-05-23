require('dotenv').config({ allowEmptyValues: true });// Este package permite usar las variables de entorno definidas en el archivo .env
const express = require('express');
const carreraRoute = require('./routes/carrera-route')
const app = express();
const db = require('./db/models');
const port = process.env.PORT;
app.use(express.json());
app.use(carreraRoute);

/* 
function createCarrera(nombre,grado,universidad) {
  db.Carrera.create({
    nombre: nombre,
    grado: grado,
    universidad: universidad
  })
}

app.post('/carreras', async (req, res)=>{
    const carrera = req.body;
    console.log(req.body)
    try {
      const newRecord = await db.Carrera.create(carrera); 
      res.status(201).json(newRecord);
    } catch (error) {
      res.status(500).json(`Error: ${error.message}`);
    }
  })
  
app.get('/carreras', async (req, res)=>{
    const carreras = await db.Carrera.findAll({
      attributes: ["id","nombre", "grado", "universidad"]
    }); //no filtro por nada, devuelve todo
    res.status(200).json(carreras);
  })
  
app.get('/carreras/:id', async (req, res)=>{
    const id = req.params.id;
    const carreras = await db.Carrera.findOne({
      where: {id},
      attributes: ["id","nombre", "grado", "universidad"]
    }); 
    res.status(200).json(carreras);
  }) */
  
  

app.listen(process.env.PORT, async() => {
    console.log(`La aplicación está corriendo en el puerto ${port}`)
    try {
      await db.sequelize.authenticate()
      await db.sequelize.sync({force:true});
     /*  createCarrera("Introducción a Matemática","Primer año","UNAHUR"); //los creo solo para que haya algo apenas inicia la app, desp se puede borrar
      createCarrera("Estrategias de Persistencia","Segundo año","UNAHUR"); */
    } catch (error) {
     console.log(error);
    }
})