import { Model, DataTypes } from "sequelize";
import { hashPassword, sendEmailWelcom } from "../hooks/userHoos";

class User extends Model {

    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            nickname: DataTypes.STRING,
            email: DataTypes.STRING,
            password_hash: DataTypes.STRING
        }, {
            sequelize,
            paranoid: true,
            deletedAt: 'deleted_at',
            hooks: {
                beforeCreate: hashPassword,
                afterCreate: sendEmailWelcom
            }
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