const express = require("express");
const app = express();
require('dotenv').config(); // Load env variables
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// Database Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB:', err.message);
  });

// Routes
const UserRoutes = require('./routes/user_routes');
app.use("/api/user", UserRoutes);

const CategoryRoutes = require('./routes/category_routes');
app.use("/api/category", CategoryRoutes);

const ProductRoutes = require('./routes/products_routes');
app.use("/api/product", ProductRoutes);
 
const CartRoutes = require('./routes/cart_routes'); 
app.use("/api/cart", CartRoutes);

const OrderRoutes = require('./routes/order_routes'); 
app.use("/api/order", OrderRoutes); 

// Start Server
app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
