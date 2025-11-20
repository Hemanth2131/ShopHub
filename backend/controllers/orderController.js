const Order = require('../models/orderModel');

exports.createOrder = (req, res) => {
  const { user_id, product_id, quantity } = req.body;
  Order.create({ user_id, product_id, quantity }, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).send({ message: 'Order created' });
  });
};

exports.getOrders = (req, res) => {
  Order.getAll((err, results) => {
    if (err) return res.status(500).send(err);
    res.send(results);
  });
};