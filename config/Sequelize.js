import Sequelize from "sequelize";

import { BaseConfig } from "./BaseConfig";


class _Sequelize extends BaseConfig {
    constructor() {
        super();
        this.sequelize = this.init();
    }
    init() {
        const _sequelize = new Sequelize({
            dialect: this.env.DB_CONNECTION,
            host: this.env.DB_HOST,
            port: this.env.DB_PORT,
            database: this.env.DB_DATABASE,
            username: this.env.DB_USERNAME,
            password: this.env.DB_PASSWORD,
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000,
            }
        });
        _sequelize.dialect.supports.schemas = true;
        return _sequelize;
    }
}
export const sequelize = new _Sequelize().sequelize;