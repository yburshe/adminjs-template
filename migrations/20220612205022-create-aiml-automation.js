'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AIMLAutomations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Title: {
        type: Sequelize.STRING
      },
      Description: {
        type: Sequelize.TEXT
      },
      Introduction: {
        type: Sequelize.TEXT
      },
      WhatWeOffer: {
        type: Sequelize.TEXT
      },
      Technologies: {
        type: Sequelize.STRING
      },
      CaseStudySelection: {
        type: Sequelize.STRING
      },
      Testimonial: {
        type: Sequelize.STRING
      },
      Slug: {
        type: Sequelize.STRING
      },
      SEOPageTitle: {
        type: Sequelize.STRING
      },
      SEOPageDescription: {
        type: Sequelize.STRING
      },
      SocialMediaImage: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('AIMLAutomations');
  }
};