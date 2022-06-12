'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CaseStudies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Title: {
        type: Sequelize.STRING
      },
      Client: {
        type: Sequelize.STRING
      },
      Industry: {
        type: Sequelize.STRING
      },
      Service: {
        type: Sequelize.STRING
      },
      Technologies: {
        type: Sequelize.STRING
      },
      Section: {
        type: Sequelize.STRING
      },
      SectionDetails: {
        type: Sequelize.TEXT
      },
      FileUpload: {
        type: Sequelize.STRING
      },
      FeaturedImage: {
        type: Sequelize.STRING
      },
      SocialMediaImage: {
        type: Sequelize.STRING
      },
      ClientLogoUpload: {
        type: Sequelize.STRING
      },
      TestimonialSection: {
        type: Sequelize.TEXT
      },
      Active: {
        type: Sequelize.BOOLEAN
      },
      FeaturedonHomePage: {
        type: Sequelize.BOOLEAN
      },
      FeaturedonServicesPage: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('CaseStudies');
  }
};