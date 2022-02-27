const { v4 } = require("uuid");

const { Model, DataTypes } = require("sequelize");

class OrderItem extends Model {
    static init(sequelize) {
        super.init(
            {
                menu_id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: "menus",
                        key: "id",
                    },
                },
                order_id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: "orders",
                        key: "id",
                    },
                },
                amount: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                value: {
                    type: DataTypes.FLOAT,
                    allowNull: false,
                },
            },
            { sequelize, tableName: "order_items" }
        );
    }
    static associate(models) {
        this.belongsTo(models.Order, {
            foreignKey: "order_id",
            as: "order",
        });
        this.belongsTo(models.Menu, {
            foreignKey: "menu_id",
            as: "item",
        });
    }
}

module.exports = OrderItem;
