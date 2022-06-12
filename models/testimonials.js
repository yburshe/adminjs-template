'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Testimonials extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Testimonials.init({
    Client: DataTypes.STRING,
    StakeholderName: DataTypes.STRING,
    StakeholderTitle: DataTypes.STRING,
    StakeholderPhoto: DataTypes.STRING,
    TestimonialText: DataTypes.TEXT,
    FeaturedonHomePage: DataTypes.BOOLEAN,
    FeaturedonServicesPage: DataTypes.BOOLEAN,
    Active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Testimonials',
  });
  return Testimonials;
};