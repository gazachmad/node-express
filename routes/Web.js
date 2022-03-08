import { BaseRoutes } from "./BaseRoutes.js";
import { Example } from "../app/controllers/Example.js";

class _WebRoutes extends BaseRoutes {
    routes() {
        this.router.get("/", Example.index);
        this.router.get("/create", Example.create);
        this.router.post("/", Example.store);
        this.router.get("/:id", Example.show);
        this.router.get("/:id/edit", Example.edit);
        this.router.put("/", Example.update);
        this.router.delete("/", Example.destroy);
    }
}
export const WebRoutes = new _WebRoutes().router;