'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Industry extends Model {
        static associate(models) {
            // define association here
        }
    }
    Industry.init({
        Name: DataTypes.STRING,
        Disable: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'Industry',
    });
    return Industry;
};