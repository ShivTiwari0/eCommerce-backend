# eCommerce Backend
🚀 eCommerce Backend
Welcome to the backend of an eCommerce platform built with Node.js, Express, and MongoDB. This powerful API supports user authentication, product management, order processing, and payment integration using Razorpay.

🛠 Features
🔒 User Authentication: Secure JWT-based login and registration.
📦 Product Management: Full CRUD for products and categories.
📑 Order Management: Seamless order processing and tracking.
💳 Razorpay Integration: Effortless payment handling.
📡 RESTful API: Ready for any modern frontend framework.
⚙️ Setup & Installation
1️⃣ Prerequisites
Ensure you have the following installed:

Node.js (v14+)
MongoDB (Local or Cloud)
Razorpay API Key
2️⃣ Installation Steps
git clone https://github.com/ShivTiwari0/eCommerce-backend.git
cd eCommerce-backend
npm install
npm run dev
The server will run on http://localhost:5000


Here’s a more visually appealing and concise version of your README file:

🚀 eCommerce Backend
Welcome to the backend of an eCommerce platform built with Node.js, Express, and MongoDB. This powerful API supports user authentication, product management, order processing, and payment integration using Razorpay.

🛠 Features
🔒 User Authentication: Secure JWT-based login and registration.
📦 Product Management: Full CRUD for products and categories.
📑 Order Management: Seamless order processing and tracking.
💳 Razorpay Integration: Effortless payment handling.
📡 RESTful API: Ready for any modern frontend framework.
⚙️ Setup & Installation
1️⃣ Prerequisites
Ensure you have the following installed:

Node.js (v14+)
MongoDB (Local or Cloud)
Razorpay API Key
2️⃣ Installation Steps
Clone the Repository

bash
Copy code
git clone https://github.com/ShivTiwari0/eCommerce-backend.git
Navigate to the Project Directory

bash
Copy code
cd eCommerce-backend
Install Dependencies

bash
Copy code
npm install
Configure Environment Variables

Create a .env file in the root directory with the following contents:

plaintext
Copy code
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
Start the Development Server

bash
Copy code
npm start
The server will run on http://localhost:5000.

🔗 API Endpoints
Authentication
POST /api/auth/register - Register a new user.
POST /api/auth/login - Log in a user.
Products
GET /api/products - Fetch all products.
POST /api/products - Create a new product.
PUT /api/products/:id - Update a product.
DELETE /api/products/:id - Delete a product.
Orders
POST /api/orders - Create a new order.
GET /api/orders/user/:userId - Get a user's orders

🤝 Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.