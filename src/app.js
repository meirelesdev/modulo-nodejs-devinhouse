
module.exports = class App {
    constructor(server) {
        this.server = server
    }
    addMiddleware(middleware) {
        this.server.use(middleware)
    }
    addRoutes(routesAplication) {
        this.server.use(routesAplication)
    }
    run(port, callback) {
        this.server.listen(port, callback())
    }
    addDocs(routeDocs, swaggerServer, swaggerSetup){
        this.server.use(routeDocs, swaggerServer, swaggerSetup)
    }
}
