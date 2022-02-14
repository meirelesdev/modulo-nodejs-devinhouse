import {  Model, DataTypes } from 'sequelize'

export default class Address extends Model {
    static init(sequelize) {
      super.init({
        cep: DataTypes.STRING,
        street: DataTypes.STRING,
        district: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        number: DataTypes.STRING,
        complement: DataTypes.STRING
      }, {
        sequelize
      })
    }
    static associate(models) {
        this.hasOne(models.Company, {
            foreignKey: 'address_id',
            as: 'address'
        })
    }
}