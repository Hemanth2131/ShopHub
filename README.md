<<<<<<< HEAD
# 🛍️ ShopHub - Premium E-Commerce Platform

A modern, full-stack e-commerce application built with vanilla JavaScript, HTML, CSS, and Node.js. Features a premium glassmorphism UI, dynamic user authentication, and a comprehensive admin dashboard.

![ShopHub Homepage](https://via.placeholder.com/800x400?text=ShopHub+Preview)

## ✨ Features

### 👤 User Features
- **User Authentication**: Secure login and registration system.
- **Dynamic Navigation**: Personalized greeting and access control based on login status.
- **Product Browsing**: View featured products with premium UI cards.
- **Product Details**: Detailed product view with image, description, and price.
- **Shopping Cart**: 
  - Add items to cart.
  - Adjust quantities.
  - Real-time total calculation (Subtotal, Tax, Total).
  - Persistent cart using `localStorage`.

### 👑 Admin Features
- **Admin Dashboard**: Protected route accessible only to admin users.
- **Product Management**:
  - **Add Products**: Create new product listings with name, price, and description.
  - **Delete Products**: Remove products from the catalog.
  - **Edit Products**: (UI placeholder for future implementation).
- **Statistics**: View key metrics like Total Products, Users, and Orders.

### 🎨 UI/UX
- **Glassmorphism Design**: Modern, translucent aesthetics.
- **Responsive Layout**: Fully functional on mobile and desktop.
- **Toast Notifications**: Real-time feedback for user actions (e.g., "Added to cart", "Login successful").
- **Smooth Animations**: Polished transitions and hover effects.

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3 (Custom Design System), Vanilla JavaScript (ES6+).
- **Backend**: Node.js, Express.js.
- **Data**: In-memory data structures (Users, Products) - *Easily extensible to MongoDB/SQL*.
- **Authentication**: Custom role-based auth (Admin/Customer).

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher) installed.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/shophub.git
   cd shophub
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   ```

3. **Start the Server**
   ```bash
   node server.js
   ```
   The backend server will start on `http://localhost:5000`.

4. **Run Frontend**
   - Open `frontend/index.html` in your browser.
   - Or use a live server extension in VS Code.

## 🔐 Admin Credentials

Use these credentials to access the Admin Dashboard:

- **Email**: `admin@shophub.com`
- **Password**: `admin123`

## 📡 API Endpoints

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| `GET` | `/api/products` | Get all products | Public |
| `GET` | `/api/products/:id` | Get single product | Public |
| `POST` | `/api/auth/register` | Register new user | Public |
| `POST` | `/api/auth/login` | Login user | Public |
| `POST` | `/api/products` | Add new product | **Admin** |
| `PUT` | `/api/products/:id` | Update product | **Admin** |
| `DELETE` | `/api/products/:id` | Delete product | **Admin** |

## 📂 Project Structure

```
e-com/
├── backend/
│   ├── app.js           # Express app setup & routes
│   ├── server.js        # Server entry point
│   └── package.json     # Backend dependencies
└── frontend/
    ├── index.html       # Homepage
    ├── product.html     # Product details page
    ├── cart.html        # Shopping cart page
    ├── login.html       # Login/Register page
    ├── admin.html       # Admin dashboard
    ├── styles.css       # Global styles & design system
    └── app.js           # Shared logic (Auth, Toast, Nav)
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
=======
# ShopHub
>>>>>>> 5d7c359a2e5360b67ccaeafd13f7d68b316bda31
