import { Sequelize } from "sequelize";
import config from '../config/database'


const queryBuilder = async(rawQuery) => {
    const sequelize = new Sequelize(config)
    const [ res ] = await sequelize.query(rawQuery)
    return res
}

export default queryBuilder