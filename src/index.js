import express from "express";
import "./database";
import appRoutes from "./routes";

class App {
    constructor() {
        this.server = express()
        this.middlewares()
        this.router()
    }
    middlewares() {
        this.server.use(express.json())
    }
    router() {
        this.server.use(appRoutes)
    }
}
export default new App().server