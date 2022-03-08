import { createPool } from "mysql2";

import { BaseConfig } from "./BaseConfig.js";

class _Database extends BaseConfig {
    constructor() {
        super();
        this.db = this.init();
    }
    init() {
        const pool = createPool({
            multipleStatements: true,
            host: this.env.DB_HOST,
            port: this.env.DB_PORT,
            database: this.env.DB_DATABASE,
            user: this.env.DB_USERNAME,
            password: this.env.DB_PASSWORD,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });
        return pool.promise();
    }
}
export const db = new _Database().db;