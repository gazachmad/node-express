import express from 'express';
import Route from '../config/routes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(Route);

export default app;