import Sequelize from 'sequelize'
import config from '../config/config'

class Database {
    constructor() {
        this.sequelize = new Sequelize(config)
        this.init()
    }
    init() {
        // User.init(this.connection)
        // Post.init(this.connection)
        // Category.init(this.connection)
        
        // User.associate(this.connection.models)
        // Post.associate(this.connection.models)
        // Category.associate(this.connection.models)
    }
}
export default new Database()