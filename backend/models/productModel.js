const db = require('../config/db');

const Product = {
  getAll: callback => {
    db.query('SELECT * FROM products', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM products WHERE id = ?', [id], callback);
  }
};

module.exports = Product;