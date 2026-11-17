import { Request, Response } from 'express';
import { pool } from '../database/connection';

export const obtenerPersonas = async (req: Request, res: Response) => {
    try {
        console.log('Solicitud para obtener personas recibida');

        const resultado = await pool.query('SELECT * FROM users');
        res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({
        mensaje: 'Error al obtener las personas',
        detalle: (error as Error).message
    });
}
};

export const obtenerPersona = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const resultado = await pool.query(
            'SELECT * FROM users WHERE id = $1',
            [id]
        );

        res.json(resultado.rows[0]);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener la persona' });
    }
};
export const crearPersona = async (req: Request, res: Response) => {
    try {
        const { nombre, apellido } = req.body;

        const resultado = await pool.query(
            'INSERT INTO users (nombre, apellido) VALUES ($1, $2) RETURNING *',
            [nombre, apellido]
        );

        res.json(resultado.rows[0]);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear la persona' });
    }
};

export const actualizarPersona = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const { nombre, apellido } = req.body;

        const resultado = await pool.query(
            'UPDATE users SET nombre = $1, apellido = $2 WHERE id = $3 RETURNING *',
            [nombre, apellido, id]
        );

        res.json(resultado.rows[0]);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar la persona' });
    }
};

export const eliminarPersona = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);

        await pool.query('DELETE FROM users WHERE id = $1', [id]);

        res.json({ mensaje: 'Persona eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar la persona' });
    }
};