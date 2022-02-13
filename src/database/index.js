import Sequelize from 'sequelize'
import Category from '../app/models/Category'
import Trainee from '../app/models/Trainee'
import config from '../config/config'

class Database {
    constructor() {
        this.sequelize = new Sequelize(config)
        this.init()
    }
    init() {
        Category.init(this.sequelize)
        Trainee.init(this.sequelize)
        
        // User.associate(this.connection.models)
        // Post.associate(this.connection.models)
        // Category.associate(this.connection.models)
    }
}
export default new Database()