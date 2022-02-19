import Sequelize from 'sequelize'
import config from '../config/database'

import User from '../app/model/User'
import Category from '../app/model/Category'
import Post from '../app/model/Post'
import Permission from '../app/model/Permission'
import Role from '../app/model/Role'
import UserRole from '../app/model/UserRole'
import PermissionRole from '../app/model/PermissionRole'
class Database {
    constructor() {
        this.init()
    }
    init() {
        this.connection = new Sequelize(config)
        User.init(this.connection)
        Post.init(this.connection)
        Category.init(this.connection)
        
        Permission.init(this.connection)
        PermissionRole.init(this.connection)
        
        Role.init(this.connection)
        UserRole.init(this.connection)
        
        Permission.associate(this.connection.models)
        User.associate(this.connection.models)
        Role.associate(this.connection.models)
        
        PermissionRole.associate(this.connection.models)
        UserRole.associate(this.connection.models)

        Post.associate(this.connection.models)
    }
}
export default new Database()