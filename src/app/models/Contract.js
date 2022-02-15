import { Model, DataTypes } from 'sequelize'

export default class Contract extends Model {
  static init(sequelize) {
    super.init({
      trainee_id: DataTypes.INTEGER,
      category_id: DataTypes.INTEGER,
      company_id: DataTypes.INTEGER,
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
  }
  static associate(models) {
    this.belongsTo(models.Category, {
      foreignKey: 'category_id',
      as: 'category'
    })
  }
  static associate(models) {
    this.belongsTo(models.Company, {
      foreignKey: 'company_id',
      as: 'company'
    })
  }
}
