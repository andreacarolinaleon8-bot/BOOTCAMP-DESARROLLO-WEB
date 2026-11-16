const pool = require('../database/connection');

// Consultar todos los usuarios
const getUsers = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users ORDER BY id');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al consultar usuarios' });
    }
};

// Consultar un usuario por su ID
const getUserById = async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT * FROM users WHERE id = $1',
            [req.params.id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }

        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al consultar usuario' });
    }
};

// Agregar un usuario
const createUser = async (req, res) => {
    const { nombre, apellido } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO users (nombre, apellido) VALUES ($1, $2) RETURNING *',
            [nombre, apellido]
        );

        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al agregar usuario' });
    }
};

// Actualizar un usuario
const updateUser = async (req, res) => {
    const { nombre, apellido } = req.body;

    try {
        const result = await pool.query(
            'UPDATE users SET nombre = $1, apellido = $2 WHERE id = $3 RETURNING *',
            [nombre, apellido, req.params.id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }

        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar usuario' });
    }
};

// Eliminar un usuario
const deleteUser = async (req, res) => {
    try {
        const result = await pool.query(
            'DELETE FROM users WHERE id = $1 RETURNING *',
            [req.params.id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }

        res.json({ mensaje: 'Usuario eliminado' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar usuario' });
    }
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};