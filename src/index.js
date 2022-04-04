import express from "express";
import "./database";
import appRoutes from "./routes";
import logger from "./config/logger";
class App {
    constructor() {
        this.server = express()
        this.middlewares()
        this.router()
        this.loadLogger()
    }
    middlewares() {
        this.server.use(express.json())
    }
    loadLogger() {
        logger.info("Aplicação on-line.")
    }
    router() {
        this.server.use(appRoutes)
    }
}
export default new App().server