import { Router } from 'express';

import {
    obtenerPersonas,
    obtenerPersona,
    crearPersona,
    actualizarPersona,
    eliminarPersona
} from '../controllers/personas.controller';

const router = Router();

router.get('/', obtenerPersonas);
router.get('/:id', obtenerPersona);
router.post('/', crearPersona);
router.put('/:id', actualizarPersona);
router.delete('/:id', eliminarPersona);

export default router;