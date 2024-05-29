# Estrategias de Persistencia - TP 2024

## Instalación y ejecución

Para instalar la API se debe correr el comando:

```
npm install
```

Una vez instalada se deben correr los comandos

```
npm i sequelize sqlite3
npm i -D sequelize -cli
```

Dentro de la carpeta raíz TP-MTON-GRUPO-3 se debe generar un archivo llamado ".env" y dentro se copiará el siguiente código:

```
PORT = 3000
DB_USERNAME=root
DB_PASSWORD=null
DB_DATABASE=dataStore
DB_HOST=dbstore/database.sqlite
DIALECT=sqlite
```

## Diagrama entidad-relación

![Diagrama de entidad-relación](/images/DER.png)

