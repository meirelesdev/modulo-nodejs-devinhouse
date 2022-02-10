import Sequelize from 'sequelize'
import config from '../config/database'

import User from '../app/model/User'
import Category from '../app/model/Category'
import Post from '../app/model/Post'
class Database {
    constructor() {
        this.init()
    }
    init() {
        this.connection = new Sequelize(config)
        User.init(this.connection)
        Post.init(this.connection)
        Category.init(this.connection)
        
        User.associate(this.connection.models)
        Post.associate(this.connection.models)
        // Category.associate(this.connection.models)
    }
}
export default new Database()