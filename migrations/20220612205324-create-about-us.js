'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AboutUs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      FeaturedImage: {
        type: Sequelize.STRING
      },
      ShortDescription: {
        type: Sequelize.TEXT
      },
      IntroText: {
        type: Sequelize.TEXT
      },
      KeyNumbers: {
        type: Sequelize.STRING
      },
      OurPrinciples: {
        type: Sequelize.STRING
      },
      VisionMission: {
        type: Sequelize.STRING
      },
      TeamSelection: {
        type: Sequelize.STRING
      },
      RecognitionSelection: {
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
    await queryInterface.dropTable('AboutUs');
  }
};