
const { Router } = require('express');
const router = Router();

const {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/users.controller');

// Consultar todos los usuarios
router.get('/users', getUsers);

// Consultar un usuario por ID
router.get('/users/:id', getUserById);

// Crear un usuario
router.post('/users', createUser);

// Actualizar un usuario
router.put('/users/:id', updateUser);

// Eliminar un usuario
router.delete('/users/:id', deleteUser);

module.exports = router;