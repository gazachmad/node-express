import { Router } from "express";

import { ApiRoutes } from "../routes/Api.js";
import { DocsRoutes } from "../routes/Docs.js";
import { WebRoutes } from "../routes/Web.js";

class _Routes {
    constructor() {
        this.router = Router();
        this.init();
    }
    init() {
        this.router.use("/api", ApiRoutes);
        this.router.use("/docs", DocsRoutes);
        this.router.use("/", WebRoutes);
    }
}
export const Routes = new _Routes().router;