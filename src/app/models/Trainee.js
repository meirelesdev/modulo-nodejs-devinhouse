import {  Model} from 'sequelize'

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
        sequelize,
        modelName: 'Trainee',
      })
    }
}