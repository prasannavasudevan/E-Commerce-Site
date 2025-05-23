🛒 E-Commerce Site

A full-stack modern e-commerce web application built with the MERN (MongoDB, Express, React, Node.js) stack. The platform allows users to browse products, manage a cart, place orders, and handle secure authentication.

🚀 Features
🔐 User Authentication – Sign up and login with secure password hashing using bcrypt and token-based authentication with JWT.

🛍️ Product Catalog – Browse a wide range of products with categories and subcategories.

🧺 Shopping Cart – Add, remove, and modify cart items with dynamic total calculation.

📦 Order Management – Place orders with detailed order history and status tracking.

💳 Payment Placeholder – Ready structure for integrating payment gateways.

🛠️ Admin Controls (optional) – Easily extendable for product and order management dashboards.

🧑‍💻 Tech Stack
Technology	Description
MongoDB	NoSQL database for storing users, products, and orders
Mongoose	ODM for MongoDB, schema-based models
Express	Web framework for Node.js backend
React	Frontend library for dynamic user interfaces
Node.js	JavaScript runtime environment
JWT	Secure token-based authentication
Bcrypt	Password hashing for authentication
Tailwind	CSS framework for responsive UI design

📂 Project Structure
pgsql
Copy
Edit
/client        - React frontend
/server        - Node.js backend with Express
  ├── models   - Mongoose schemas for User, Product, Order
  ├── routes   - API routes (auth, products, orders)
  └── controllers - Logic for handling requests
🔧 Installation
Prerequisites
Node.js (v18+ recommended)

MongoDB (local or Atlas)

npm / yarn

Setup Instructions
bash
Copy
Edit
# Clone the repository
git clone https://github.com/yourusername/ecommerce-site.git
cd ecommerce-site

# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
Environment Configuration
Create a .env file in the server directory:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
Run the App
bash
Copy
Edit
# Run backend
cd server
npm start

# Run frontend
cd ../client
npm start
Visit http://localhost:3000 to use the application.

📦 API Endpoints
Endpoint	Method	Description
/api/auth	POST	User registration/login
/api/products	GET	Get all products
/api/orders	POST	Place an order

More details can be found in the API documentation.

🛡️ Security Features
Passwords hashed with bcrypt

JWT-based session management

Input validation and sanitized data

CORS policy for frontend-backend integration

📈 Future Improvements
Integration with payment gateways (e.g., Stripe)

Admin dashboard for managing products and orders

Wishlist and product reviews

Enhanced analytics for user and sales tracking

🙌 Acknowledgements
Thanks to the open-source community for providing great tools and resources. This project is inspired by real-world e-commerce workflows and built for educational and demonstration purposes.

📝 License
