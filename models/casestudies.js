'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CaseStudies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CaseStudies.init({
    Title: DataTypes.STRING,
    Client: DataTypes.STRING,
    Industry: DataTypes.STRING,
    Service: DataTypes.STRING,
    Technologies: DataTypes.STRING,
    Section: DataTypes.STRING,
    SectionDetails: DataTypes.TEXT,
    FileUpload: DataTypes.STRING,
    FeaturedImage: DataTypes.STRING,
    SocialMediaImage: DataTypes.STRING,
    ClientLogoUpload: DataTypes.STRING,
    TestimonialSection: DataTypes.TEXT,
    Active: DataTypes.BOOLEAN,
    FeaturedonHomePage: DataTypes.BOOLEAN,
    FeaturedonServicesPage: DataTypes.BOOLEAN,
    Slug: DataTypes.STRING,
    SEOPageTitle: DataTypes.STRING,
    SEOPageDescription: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'CaseStudies',
  });
  return CaseStudies;
};