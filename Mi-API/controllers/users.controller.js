
const users = require('../models/users');

// Consultar todos los usuarios
const getUsers = (req, res) => {
    res.json(users);
};

// Consultar un usuario por su ID
const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);

    res.json(user);
};

// Agregar un usuario
const createUser = (req, res) => {
    const { nombre, apellido } = req.body;

    const newUser = {
        id: users.length + 1,
        nombre,
        apellido
    };

    users.push(newUser);
    res.json(newUser);
};

// Actualizar un usuario
const updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const { nombre, apellido } = req.body;

    const user = users.find(user => user.id === id);

    if (user) {
        user.nombre = nombre;
        user.apellido = apellido;
        res.json(user);
    } else {
        res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
};

// Eliminar un usuario
const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex(user => user.id === id);

    if (index !== -1) {
        users.splice(index, 1);
        res.json({ mensaje: 'Usuario eliminado' });
    } else {
        res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};