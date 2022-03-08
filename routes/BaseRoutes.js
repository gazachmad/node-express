import { Router } from "express";

export class BaseRoutes {
    constructor() {
        this.router = Router();
        this.routes();
    }
    routes() { }
}