'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AIMLAutomation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AIMLAutomation.init({
    Title: DataTypes.STRING,
    Description: DataTypes.TEXT,
    Introduction: DataTypes.TEXT,
    WhatWeOffer: DataTypes.TEXT,
    Technologies: DataTypes.STRING,
    CaseStudySelection: DataTypes.STRING,
    Testimonial: DataTypes.STRING,
    Slug: DataTypes.STRING,
    SEOPageTitle: DataTypes.STRING,
    SEOPageDescription: DataTypes.STRING,
    SocialMediaImage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AIMLAutomation',
  });
  return AIMLAutomation;
};