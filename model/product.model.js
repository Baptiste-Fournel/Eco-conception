const {DataTypes} = require('sequelize');
const {bdd} = require('../framework/connexion.js');
const { all } = require('../app.js');

const Product = bdd.define('Product', {
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
    },
    price: {
        type: DataTypes.DECIMAL(7, 2),
        allowNull: false
    },
    stock: {
        type: DataTypes.MEDIUMINT,
        allowNull: false,
        default: 0
    },
    reference: {
        type: DataTypes.STRING(12),
    },
    picture: {
        type: DataTypes.STRING(2083),
        allowNull: false
    },
});

module.exports = Product;