const db = require('../config/db');

const Order = {
  create: (order, callback) => {
    const sql = 'INSERT INTO orders (user_id, product_id, quantity) VALUES (?, ?, ?)';
    db.query(sql, [order.user_id, order.product_id, order.quantity], callback);
  },

  getAll: callback => {
    db.query('SELECT * FROM orders', callback);
  }
};

module.exports = Order;