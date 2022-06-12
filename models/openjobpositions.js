'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OpenJobPositions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OpenJobPositions.init({
    JobRole: DataTypes.STRING,
    Title: DataTypes.STRING,
    Experience: DataTypes.STRING,
    Location: DataTypes.STRING,
    URL: DataTypes.STRING,
    Active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'OpenJobPositions',
  });
  return OpenJobPositions;
};