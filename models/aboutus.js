'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AboutUs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AboutUs.init({
    FeaturedImage: DataTypes.STRING,
    ShortDescription: DataTypes.TEXT,
    IntroText: DataTypes.TEXT,
    KeyNumbers: DataTypes.STRING,
    OurPrinciples: DataTypes.STRING,
    VisionMission: DataTypes.STRING,
    TeamSelection: DataTypes.STRING,
    RecognitionSelection: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AboutUs',
  });
  return AboutUs;
};