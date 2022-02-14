import {  Model, DataTypes } from 'sequelize'

export default class Company extends Model {
    static init(sequelize) {
      super.init({
        cnpj: DataTypes.STRING,
        company_name: DataTypes.STRING,
        contact: DataTypes.STRING,
        rh_analyst_name: DataTypes.STRING,
        supervisor_name: DataTypes.STRING
      }, {
        sequelize
      })
    }
    static associate(models) {
        this.belongsTo(models.Address, {
            foreignKey: 'address_id',
            as: 'address'
        })
    }
    update(data){
      this.cnpj = data.cnpj
      this.company_name = data.company_name
      this.contact = data.contact
      this.rh_analyst_name = data.rh_analyst_name
      this.supervisor_name = data.supervisor_name
      this.address_id = data.address_id
    }
}
