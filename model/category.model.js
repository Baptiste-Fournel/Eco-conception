const {DataTypes} = require('sequelize');
const {bdd} = require('../framework/connexion.js');


const category = bdd.define('category', {
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
});

module.exports = category;