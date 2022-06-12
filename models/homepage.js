'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HomePage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HomePage.init({
    FeaturedImageVideo: DataTypes.STRING,
    TitleText1: DataTypes.STRING,
    TitleText2: DataTypes.STRING,
    TrendingInsights: DataTypes.STRING,
    IntroductionText: DataTypes.STRING,
    WhatWeDoText: DataTypes.STRING,
    WhatWeDoServices: DataTypes.STRING,
    ClientSelection: DataTypes.STRING,
    WhyOneture: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'HomePage',
  });
  return HomePage;
};