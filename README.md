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

Para probar la aplicación con sqlite, dentro de la carpeta raíz TP-MTON-GRUPO-3 se debe generar un archivo llamado ".env" y en él se copiará el siguiente código:

```
PORT = 3000
DB_USERNAME=root
DB_PASSWORD=null
DB_DATABASE=dataStore
DB_HOST=dbstore/database.sqlite
DIALECT=sqlite
```

Para probar la aplicación con mysql, dentro de la carpeta raíz TP-MTON-GRUPO-3 se debe generar un archivo llamado ".env" y en él se copiará el siguiente código:

```
PORT=3000
DB_USERNAME=root
DB_PASSWORD=password
DB_DATABASE=dataStore
DB_HOST=localhost
DB_PORT=3307
DIALECT=mysql
```

Además, tiene que ejecutarse el siguiente comando para iniciar el contenedor de mysql:

```
docker run --name mysqlContainer -e MYSQL_ROOT_PASSWORD=password -d -p 3307:3306 mysql 
```

Es importante que la base de datos esté creada con el nombre de dataStore.

## Diagrama entidad-relación

![Diagrama de entidad-relación](/images/DER.png)

