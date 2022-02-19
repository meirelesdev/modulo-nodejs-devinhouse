import { Model } from "sequelize";

class PermissionRole extends Model {
    static init(sequelize) {
        super.init(
            {},
            {
                sequelize,
                tableName: "permissions_roles",
            }
        );
    }
    static associate(models) {
        this.belongsTo(models.Role, {
            foreignKey: "id_role",
            as: "role",
        });
        this.belongsTo(models.Permission, {
            foreignKey: "id_permission",
            as: "permission",
        });
    }
}
export default PermissionRole;
