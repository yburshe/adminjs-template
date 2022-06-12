'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Testimonials', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Client: {
        type: Sequelize.STRING
      },
      StakeholderName: {
        type: Sequelize.STRING
      },
      StakeholderTitle: {
        type: Sequelize.STRING
      },
      StakeholderPhoto: {
        type: Sequelize.STRING
      },
      TestimonialText: {
        type: Sequelize.TEXT
      },
      FeaturedonHomePage: {
        type: Sequelize.BOOLEAN
      },
      FeaturedonServicesPage: {
        type: Sequelize.BOOLEAN
      },
      Active: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Testimonials');
  }
};