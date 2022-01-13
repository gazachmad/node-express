import { Router } from 'express';

const Route = Router();

Route.get('/', (req, res) => {
    res.send('It Works');
});

export default Route;