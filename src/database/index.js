import Sequelize from 'sequelize'
import config from '../config/database'

import User from '../app/model/User'
import Category from '../app/model/Category'
import Post from '../app/model/Post'
import Permission from '../app/model/Permission'
import Role from '../app/model/Role'

class Database {
    constructor() {
        this.init()
    }
    init() {
        this.connection = new Sequelize(config)

        User.init(this.connection)
        Post.init(this.connection)
        Category.init(this.connection)
        Role.init(this.connection)
        Permission.init(this.connection)
        
        User.associate(this.connection.models)
        Post.associate(this.connection.models)
        Category.associate(this.connection.models)
        Role.associate(this.connection.models)
        Permission.associate(this.connection.models)
    }
}
export default new Database()