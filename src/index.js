import express from "express";
import "./database";

class App {
    constructor() {
        this.server = express()
        this.middlewares()
    }
    middlewares() {
        this.server.use(express.json())
    }
    // router() {
    //     this.server.use(routes)
    // }
}
export default new App().server