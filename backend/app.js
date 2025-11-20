const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Initialize with admin user
const users = [
  {
    id: 1,
    username: 'admin',
    email: 'admin@shophub.com',
    password: 'admin123',
    role: 'admin'
  }
];

const products = [
  { id: 1, name: "T-Shirt", description: "Cotton T-Shirt", price: 399 },
  { id: 2, name: "Shoes", description: "Running Shoes", price: 999 },
  { id: 3, name: "Watch", description: "Digital Watch", price: 1299 }
];

const orders = [];
let productIdCounter = 4; // Start from 4 since we have 3 products

// Middleware to check if user is admin
const isAdmin = (req, res, next) => {
  const { userId } = req.body;
  const user = users.find(u => u.id === userId);

  if (!user || user.role !== 'admin') {
    return res.status(403).send({ message: 'Access denied. Admin only.' });
  }
  next();
};

// Register
app.post('/api/auth/register', (req, res) => {
  const { username, email, password } = req.body;
  if (users.find(u => u.email === email)) {
    return res.status(409).send({ message: 'User already exists' });
  }
  const newUser = {
    id: users.length + 1,
    username,
    email,
    password,
    role: 'customer' // Default role
  };
  users.push(newUser);
  res.send({ message: 'User registered', user: { id: newUser.id, username: newUser.username, email: newUser.email, role: newUser.role } });
});

// Login
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return res.status(401).send({ message: 'Invalid credentials' });

  // Don't send password back
  const { password: _, ...userWithoutPassword } = user;
  res.send({ message: 'Login successful', user: userWithoutPassword });
});

// Products - Get all
app.get('/api/products', (req, res) => {
  res.send(products);
});

// Products - Get by ID
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).send({ message: 'Product not found' });
  res.send(product);
});

// Products - Add (Admin only)
app.post('/api/products', (req, res) => {
  const { userId, name, description, price } = req.body;

  // Check if user is admin
  const user = users.find(u => u.id === userId);
  if (!user || user.role !== 'admin') {
    return res.status(403).send({ message: 'Access denied. Admin only.' });
  }

  if (!name || !description || !price) {
    return res.status(400).send({ message: 'Name, description, and price are required' });
  }

  const newProduct = {
    id: productIdCounter++,
    name,
    description,
    price: parseFloat(price)
  };

  products.push(newProduct);
  res.send({ message: 'Product added successfully', product: newProduct });
});

// Products - Update (Admin only)
app.put('/api/products/:id', (req, res) => {
  const { userId, name, description, price } = req.body;
  const productId = parseInt(req.params.id);

  // Check if user is admin
  const user = users.find(u => u.id === userId);
  if (!user || user.role !== 'admin') {
    return res.status(403).send({ message: 'Access denied. Admin only.' });
  }

  const productIndex = products.findIndex(p => p.id === productId);
  if (productIndex === -1) {
    return res.status(404).send({ message: 'Product not found' });
  }

  // Update product
  if (name) products[productIndex].name = name;
  if (description) products[productIndex].description = description;
  if (price) products[productIndex].price = parseFloat(price);

  res.send({ message: 'Product updated successfully', product: products[productIndex] });
});

// Products - Delete (Admin only)
app.delete('/api/products/:id', (req, res) => {
  const { userId } = req.body;
  const productId = parseInt(req.params.id);

  // Check if user is admin
  const user = users.find(u => u.id === userId);
  if (!user || user.role !== 'admin') {
    return res.status(403).send({ message: 'Access denied. Admin only.' });
  }

  const productIndex = products.findIndex(p => p.id === productId);
  if (productIndex === -1) {
    return res.status(404).send({ message: 'Product not found' });
  }

  products.splice(productIndex, 1);
  res.send({ message: 'Product deleted successfully' });
});

// Orders
app.post('/api/orders', (req, res) => {
  const { user_id, product_id, quantity } = req.body;
  orders.push({ id: orders.length + 1, user_id, product_id, quantity });
  res.send({ message: 'Order placed' });
});

app.get('/api/orders', (req, res) => {
  res.send(orders);
});

module.exports = app;
