import { Router } from "express";
import api from '../routes/api.js';
import web from '../routes/web.js';

const Route = Router();

Route.use('/api', api);
Route.use('/', web);

export default Route;