import { Model, DataTypes } from "sequelize";
import { hashPassword, sendEmailWelcom } from "../hooks/userHooks";

class User extends Model {
    static init(sequelize) {
        super.init(
            {
                name: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    validate: {
                        len: {
                            msg: "Seu nome deve ter no minimo 3 caracteres e no máximo 30.",
                            args: [3, 30],
                        },
                    },
                },
                nickname: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    validate: {
                        len: {
                            msg: "Seu nickname deve ter no minimo 4 caracteres e no maximo 10",
                            args: [4, 10],
                        },
                    },
                },
                email: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: {
                        args: true,
                        msg: "E-mail já cadastrado.",
                    },
                    validate: {
                        isEmail: {
                            msg: "Formato do email inválido.",
                        },
                    },
                },
                password_hash: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    validate: {
                        len: {
                            msg: "A senha deve ter entre 4 e 8 caracteres.",
                            args: [4, 8],
                        },
                    },
                },
            },
            {
                sequelize,
                paranoid: true,
                deletedAt: "deleted_at",
                hooks: {
                    beforeCreate: hashPassword,
                    afterCreate: sendEmailWelcom,
                },
            }
        );
    }
    static associate(models) {
        this.belongsToMany(models.Role, {
            foreignKey: "user_id",
            through: 'user_roles',
            as: "cargos",
        });
        this.hasMany(models.Post, {
            foreignKey: "user_id",
            as: "posts",
        });
    }
}
export default User;
