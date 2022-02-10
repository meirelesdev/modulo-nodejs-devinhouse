import { Model, DataTypes } from "sequelize";

class User extends Model {

    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            nickname: DataTypes.STRING,
            email: DataTypes.STRING,
            password_hash: DataTypes.STRING
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.hasMany(models.Post, {
            foreignKey: 'user_id',
            as: 'posts'
        })
    }
}
export default User