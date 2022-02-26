const { DataTypes, Model } = require("sequelize");

class Category extends Model {
    static init(sequelize) {
        super.init(
            {
                description: {
                    type: DataTypes.STRING,
                    validate: {
                        len: {
                            msg: "A descrição deve ter 4 a 10 caracteres",
                            args:[4,10]
                        }
                    }
                },
            },
            { sequelize, tableName: 'categories' }
        );
    }
}

module.exports = Category;
