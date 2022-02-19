import { Model, DataTypes} from 'sequelize'
import { toUpperPermission } from '../hooks/permissionHooks'

class Permission extends Model {
    static init(sequelize) {
        super.init({
            description:{
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: {
                        msg:"Uma descrição deve ter no minimo 3 caractres e no maximo 30.",
                        args:[3, 30]
                    }
                },
                unique: {
                    msg: "Permissão já existe.",
                    args: true
                },
            },

        },{
            sequelize,
            tableName: 'permissions',
            hooks: {
                beforeCreate: toUpperPermission,
                beforeUpdate: toUpperPermission
            }
        })
    }
    static associate(models){
        this.hasMany(models.PermissionRole,{
            foreignKey: 'id_permission',
            as: 'permission'
        })
    }
}
export default Permission