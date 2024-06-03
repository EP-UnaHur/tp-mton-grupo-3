require('dotenv').config({ allowEmptyValues: true });// Este package permite usar las variables de entorno definidas en el archivo .env
const express = require('express');
const carreraRoute = require('./routes/carrera.route')
const materiaRoute = require('./routes/materia.route')
const profesorRoute = require('./routes/profesor.route')
const cursoRoute = require('./routes/curso.route')
const app = express();
const db = require("./db/models");
const port = process.env.PORT;


app.use(express.json());

app.use(carreraRoute);
app.use(materiaRoute);
app.use(profesorRoute);
app.use(cursoRoute);




app.listen(process.env.PORT, async () => {
  console.log(`La aplicación está corriendo en el puerto ${port}`);
  try {
    //Esto verifica si me pude conectar bien a la base de datos
    await db.sequelize.authenticate();
    // El método sync solo se usa en ambientes de desarrollo. No utilizar en produccion
    // porque borra todas las tablas y las vueve a crear
    // await db.sequelize.sync({force:true});
    /*  createCarrera("Introducción a Matemática","Primer año","UNAHUR"); //los creo solo para que haya algo apenas inicia la app, desp se puede borrar
      createCarrera("Estrategias de Persistencia","Segundo año","UNAHUR"); */
  } catch (error) {
    console.log(error);
  }
});
