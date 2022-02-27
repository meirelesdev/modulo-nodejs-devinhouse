const { DataTypes, Model } = require("sequelize");

class Restaurant extends Model {
    static init(sequelize) {
        super.init(
            {
                name: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    validate: {
                        len: {
                            msg: "O nome do restaurante deve ter no minimo 3 caracteres e no máximo 30.",
                            args: [3, 30],
                        },
                    },
                },
                phone: {
                    type: DataTypes.STRING,
                },
            },
            { sequelize, tableName: 'restaurants' }
        );
    }
    static associate(models){
        this.belongsTo(models.Address, {
            foreignKey: 'address_id',
            as: 'address'
        })
        this.belongsTo(models.Category, {
            foreignKey: 'category_id',
            as: 'category'
        })
    }
}
module.exports = Restaurant;
