import { Model } from "sequelize";

class UserRole extends Model {
    static init(sequelize) {
        super.init(
            {},
            {
                sequelize,
                tableName: "user_roles",
            }
        );
    }
    static associate(models) {
        this.belongsTo(models.Role, {
            foreignKey: "role_id",
            as: "role",
        });
        this.belongsTo(models.User, {
            foreignKey: "user_id",
            as: "user",
        });
    }
}
export default UserRole;
