'use strict';
const { Model, DataTypes } = require('sequelize');

export default class Category extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING
    }, { 
      sequelize
    })
  }
}