import { Model, DataTypes } from "sequelize";

class Post extends Model {

    static init(sequelize) {
        super.init({
            title: DataTypes.STRING,
            content: DataTypes.TEXT,
            url_cover: DataTypes.STRING,
            status:  DataTypes.BOOLEAN,
            is_fake_new: DataTypes.BOOLEAN
        }, {
            scopes: {
              activesPost: {
                status: true,
                is_fake_new: false
              }
            },
            sequelize
          })
    }
    static associateUser(User) {
        this.belongsTo(User, {
            foreignKey: 'user_id',
            as: 'author'
        })
    }
    static associateCategory(Category) {
        this.belongsTo(Category, {
            foreignKey: 'category_id',
            as: 'category'
        })
    }
}
export default Post