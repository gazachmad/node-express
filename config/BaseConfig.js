import { config as dotenv } from "dotenv";

export class BaseConfig {
    constructor() {
        dotenv();
        this.env = process.env;
    }
    init() { }
}