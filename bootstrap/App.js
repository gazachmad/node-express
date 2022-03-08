import express from 'express';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';

import { Routes } from '../config/Routes.js';

export class App {
    constructor() {
        this.app = express();
        this.plugins();
        this.routes();
    }
    plugins() {
        this.app.use(cookieParser())
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
    }
    routes() {
        this.app.use(Routes);
    }
}