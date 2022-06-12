'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Blog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Blog.init({
    Title: DataTypes.STRING,
    PublishedBy: DataTypes.STRING,
    PublishedDate: DataTypes.DATE,
    Category: DataTypes.STRING,
    Active: DataTypes.BOOLEAN,
    FeaturedImage: DataTypes.STRING,
    SocialMediaImage: DataTypes.STRING,
    ArticleText: DataTypes.TEXT,
    Slug: DataTypes.STRING,
    SEOPageTitle: DataTypes.STRING,
    SEOPageDescription: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Blog',
  });
  return Blog;
};