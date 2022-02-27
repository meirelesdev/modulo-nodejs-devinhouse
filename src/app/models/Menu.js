const { Model, DataTypes } = require("sequelize");

class Menu extends Model{
    static init(sequelize){
        super.init({
            title: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: {
                        msg:"O titulo do prato deve ter entre 4 e 15 caracteres.",
                        args: [4,15]
                    }
                }
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: {
                        msg: "A descrição do prato deve ter mais de 10 caracteres.",
                        args: [10]
                    }
                }
            },
            price: {
                type: DataTypes.FLOAT,
                allowNull: false,
                validate: {
                    isFloat: {
                        msg: "O preço deve ser um numero."
                    }
                }
            }
        }, {sequelize})
    }
    static associate(models){
        this.belongsTo(models.Restaurant,{
            foreignKey: 'restaurant_id',
            as: 'restaturant'
        })
        this.belongsTo(models.Category,{
            foreignKey: 'category_id',
            as: 'category'
        })
    }
}
module.exports = Menu