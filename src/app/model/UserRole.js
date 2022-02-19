import { Model } from "sequelize";

class UserRole extends Model {
    static init(sequelize) {
        super.init(
            {},
            {
                sequelize,
                tableName: "users_roles",
            }
        );
    }
    static associate(models) {
        this.belongsTo(models.Role, {
            foreignKey: "id_role",
            as: "role",
        });
        this.belongsTo(models.User, {
            foreignKey: "id_user",
            as: "user",
        });
    }
}
export default UserRole;
