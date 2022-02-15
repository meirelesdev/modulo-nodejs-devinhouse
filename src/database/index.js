import Sequelize from 'sequelize'
import config from '../config/config'

import Address from '../app/models/Address'
import Category from '../app/models/Category'
import Company from '../app/models/Company'
import Trainee from '../app/models/Trainee'
import Contract from '../app/models/Contract'

class Database {
    constructor() {
        this.init()
    }
    init() {
        this.sequelize = new Sequelize(config)
        Address.init(this.sequelize)
        Category.init(this.sequelize)
        Trainee.init(this.sequelize)
        Company.init(this.sequelize)
        Contract.init(this.sequelize)
    
        Company.associate(this.sequelize.models)
        Address.associate(this.sequelize.models)
        Contract.associate(this.sequelize.models)
    }
}
export default new Database()