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
                            args: [3, 15],
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
        this.hasOne(models.Address, {
            foreignKey: 'address_id',
            as: 'address'
        })
        this.hasOne(models.Category, {
            foreignKey: 'category_id',
            as: 'category'
        })
    }
}
module.exports = Restaurant;
