# Mi-API

## Descripción

Esta es una API desarrollada con Node.js y Express, conectada a una base de datos PostgreSQL mediante la librería pg.

## Instalación

Descargar el proyecto.

Abrir la terminal dentro de la carpeta Mi-API.

Instalar las dependencias:

```bash
npm install
```

## Configuración de la base de datos

Crear una base de datos llamada mi_api en PostgreSQL y ejecutar el siguiente código SQL:

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL
);
```

Crear un archivo .env en la carpeta principal y agregar la contraseña de PostgreSQL:

```env
DB_PASSWORD=tu_contraseña
```

**Reemplazar `tu_contraseña` por la contraseña local de PostgreSQL.**

## Ejecutar el proyecto

```bash
node index.js
```

La API se ejecutará en:

http://localhost:3000

## Operaciones CRUD

| Método | Ruta | Función |
|---|---|---|
| GET | /users | Consultar usuarios |
| GET | /users/:id | Consultar por ID |
| POST | /users | Agregar usuarios |
| PUT | /users/:id | Actualizar usuarios |
| DELETE | /users/:id | Eliminar usuarios |