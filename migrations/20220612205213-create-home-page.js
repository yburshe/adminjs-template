'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HomePages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      FeaturedImageVideo: {
        type: Sequelize.STRING
      },
      TitleText1: {
        type: Sequelize.STRING
      },
      TitleText2: {
        type: Sequelize.STRING
      },
      TrendingInsights: {
        type: Sequelize.STRING
      },
      IntroductionText: {
        type: Sequelize.STRING
      },
      WhatWeDoText: {
        type: Sequelize.STRING
      },
      WhatWeDoServices: {
        type: Sequelize.STRING
      },
      ClientSelection: {
        type: Sequelize.STRING
      },
      WhyOneture: {
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
    await queryInterface.dropTable('HomePages');
  }
};