const OrderRoutes = require('express').Router();
const OrderController = require('./../controllers/order_controlleer');


OrderRoutes.post("/", OrderController.createOrder);
OrderRoutes.get("/:userId",OrderController.fetchOrderForUser);
OrderRoutes.put("/updateStatus",OrderController.updateorderStatus);
module.exports = OrderRoutes;    