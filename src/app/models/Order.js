const { v4 } = require("uuid");

const { Model, DataTypes } = require("sequelize");

class Order extends Model {
    static init(sequelize) {
        super.init(
            {
                order_number: {
                    type: DataTypes.STRING,
                },
                order_date: {
                    type: DataTypes.DATE,
                },
                delivery_value: {
                    type: DataTypes.FLOAT,
                    allowNull: false,
                },
            },
            {
                sequelize,
                hooks: {
                    beforeCreate: (order) => {
                        order.order_date = new Date();
                        order.order_number = v4();
                    },
                },
            }
        );
    }
    static associate(models) {
        this.belongsTo(models.Restaurant, {
            foreignKey: "restaurant_id",
            key: "id",
            as: 'restaurant'
        });
        this.belongsTo(models.User, {
            foreignKey: "client_id",
            key: "id",
            as: 'client'
        });
    }
}

module.exports = Order;
