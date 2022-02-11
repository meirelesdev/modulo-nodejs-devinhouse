import { Model, DataTypes } from "sequelize";
import bcrypt from 'bcrypt';
import senderMail from '../../emailSender'

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
                beforeCreate: async (user) => {
                    user.password_hash = await bcrypt.hash(user.password_hash, 8)
                },
                afterCreate: async (user) => {
                   await senderMail.sendMail({
                        from: 'daniel@daniel.com',
                        to: user.email, 
                        subject: "Sua conta DevInHouse",
                        text: "Sua conta criada",
                        html: `<div>
                                <h1>DevInHouse</h1>
                                <p>Bem vindo ${user.name} sua conta foi criada</p>
                            </div>`,
                    })
                }
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