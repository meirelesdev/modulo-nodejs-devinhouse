import express from "express";
import "./database";

export default class App {
    constructor() {
        this.server = express()
        this.addMiddlewares(express.json)
    }
    addMiddlewares(middleware) {
        this.server.use(middleware())
    }
    addRoutes(routes) {
        this.server.use('/api', [routes])
    }
    run(port, callback){
        this.server.listen(port, callback())
    }
}
