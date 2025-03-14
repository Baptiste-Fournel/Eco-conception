const Product = require('../model/product.model.js');

exports.create = (req, res, next) => {
    Product.create(req.body.product);
}

exports.getById = (req, res, next) => {
}