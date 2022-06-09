'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Technologies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Technologies.init({
    technologyName: DataTypes.STRING,
    technologyLogo: DataTypes.STRING,
    technologyCategories: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Technologies',
  });
  return Technologies;
};