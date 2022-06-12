'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Careers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Careers.init({
    EmployeeName: DataTypes.STRING,
    Title: DataTypes.STRING,
    Description: DataTypes.TEXT,
    Photo: DataTypes.STRING,
    Active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Careers',
  });
  return Careers;
};