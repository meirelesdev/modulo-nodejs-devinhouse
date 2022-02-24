import { Model, DataTypes} from 'sequelize'

class Role extends Model {
    static init(sequelize) {
        super.init({
            description:{
                type: DataTypes.STRING,
                allowNull: false,
                unique: {
                    msg: "Cargo já existe.",
                    args: true
                },
                validate: {
                    len: {
                        msg:"Uma descrição deve ter no minimo 3 caractres e no maximo 30.",
                        args:[3, 30]
                    }
                }
            },

        },{
            sequelize,
            tableName: 'roles'
        })
    }
    static associate(models){
        this.belongsToMany(models.Permission, {
            foreignKey: 'role_id',
            through: 'permissions_roles',
            as: 'permissions'
        })
        this.belongsToMany(models.User, {
            foreignKey: 'role_id',
            through: 'user_roles',
            as: 'users'
        })
    }
}
export default Role