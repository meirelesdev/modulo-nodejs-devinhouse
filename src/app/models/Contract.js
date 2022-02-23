import { Model, DataTypes } from 'sequelize'

export default class Contract extends Model {
  static init(sequelize) {
    super.init({
      start_validity: DataTypes.DATEONLY,
      end_validity: DataTypes.DATEONLY,
      status: DataTypes.BOOLEAN,
      remuneration: DataTypes.FLOAT,
      extra: DataTypes.FLOAT,
    }, {
      sequelize
    })
  }
  static associate(models) {
    this.belongsTo(models.Trainee, {
      foreignKey: 'trainee_id',
      as: 'trainee'
    })
    this.belongsTo(models.Category, {
      foreignKey: 'category_id',
      as: 'category'
    })
    this.belongsTo(models.Company, {
      foreignKey: 'company_id',
      as: 'company'
    })
  }
}
