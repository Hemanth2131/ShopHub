const Product = require('../models/productModel');

exports.getAllProducts = (req, res) => {
  Product.getAll((err, results) => {
    if (err) return res.status(500).send(err);
    res.send(results);
  });
};

exports.getProductById = (req, res) => {
  const id = req.params.id;
  Product.getById(id, (err, result) => {
    if (err || result.length === 0) return res.status(404).send({ message: 'Product not found' });
    res.send(result[0]);
  });
};
