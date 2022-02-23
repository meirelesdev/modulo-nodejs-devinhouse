import { Model, DataTypes } from "sequelize";

class Category extends Model {

    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'categories'
        })
    }
    static associate(models) {
        this.hasMany(models.Post, { 
            foreignKey: 'category_id',
            as: 'posts' 
        });
    }
}
export default Category