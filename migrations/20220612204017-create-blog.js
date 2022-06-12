'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Blogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Title: {
        type: Sequelize.STRING
      },
      PublishedBy: {
        type: Sequelize.STRING
      },
      PublishedDate: {
        type: Sequelize.DATE
      },
      Category: {
        type: Sequelize.STRING
      },
      Active: {
        type: Sequelize.BOOLEAN
      },
      FeaturedImage: {
        type: Sequelize.STRING
      },
      SocialMediaImage: {
        type: Sequelize.STRING
      },
      ArticleText: {
        type: Sequelize.TEXT
      },
      Slug: {
        type: Sequelize.STRING
      },
      SEOPageTitle: {
        type: Sequelize.STRING
      },
      SEOPageDescription: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Blogs');
  }
};