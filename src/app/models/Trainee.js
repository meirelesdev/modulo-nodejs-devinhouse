import {  Model, DataTypes } from 'sequelize'

export default class Trainee extends Model {
    static init(sequelize) {
      super.init({
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        rg: DataTypes.STRING,
        cpf: DataTypes.STRING,
        primary_phone_contact: DataTypes.STRING,
        secondary_phone_contact: DataTypes.STRING,
        data_birth: DataTypes.DATE,
        father_name: DataTypes.STRING,
        mother_name: DataTypes.STRING,
        have_special_needs: DataTypes.BOOLEAN
      }, {
        sequelize
      })
    }
    update(data){
      this.name = data.name
      this.email = data.email
      this.rg = data.rg
      this.cpf = data.cpf
      this.primary_phone_contact = data.primary_phone_contact
      this.secondary_phone_contact = data.secondary_phone_contact
      this.data_birth = data.data_birth
      this.father_name = data.father_name
      this.mother_name = data.mother_name
      this.have_special_needs = data.have_special_needs
    }
}