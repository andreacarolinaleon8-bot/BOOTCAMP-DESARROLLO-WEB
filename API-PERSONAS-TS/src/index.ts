import express from 'express';
import personasRoutes from './routes/personas.routes';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API de Personas con TypeScript funcionando');
});

app.use('/personas', personasRoutes);

app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});