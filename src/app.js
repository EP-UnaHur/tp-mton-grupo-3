require('dotenv').config() // Este package permite usar las variables de entorno definidas en el archivo .env
const express = require('express')
const app = express()
// const db = require('./db/models') por ahora lo dejo comentado porque faltan los otros modelos y la aplicación crashea
const port = process.env.PORT


app.listen(process.env.PORT, () => {
    console.log(`La aplicación está corriendo en el puerto ${port}`)
})