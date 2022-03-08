import { config as dotenv } from "dotenv";
import { readFileSync } from "fs";
import { createServer as httpServer } from "http";
import { createServer as httpsServer } from "https";

import { App } from "../bootstrap/App.js";

const main = () => {
    dotenv();
    const env = process.env;
    const app = new App().app;
    httpServer(app).listen(env.APP_PORT, () => {
        console.log(`Server running at ${env.APP_PORT}`);
    });
    if (env.APP_HTTPS === "true") {
        httpsServer({
            key: readFileSync('/etc/certs/server.key'),
            cert: readFileSync('/etc/certs/server.cert'),
        }, app).listen(env.APP_HTTPS_PORT, () => {
            console.log(`Server running at ${env.APP_HTTPS_PORT}`);
        });
    }
}

main();