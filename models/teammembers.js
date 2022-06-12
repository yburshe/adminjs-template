'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TeamMembers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TeamMembers.init({
    Name: DataTypes.STRING,
    Title: DataTypes.STRING,
    Photo: DataTypes.STRING,
    Description: DataTypes.TEXT,
    LinkedinProfileURL: DataTypes.STRING,
    Active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'TeamMembers',
  });
  return TeamMembers;
};