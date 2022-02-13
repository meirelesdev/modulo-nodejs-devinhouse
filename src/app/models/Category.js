const { Model, DataTypes } = require('sequelize')

export default class Category extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING
    }, { 
      sequelize
    })
  }
}