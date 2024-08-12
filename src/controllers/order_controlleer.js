const OrderModel = require("../models/order_model");
const CartModel = require("../models/cart_model");
const razorpay = require("../services/razorpay");

const OrderController = {
  createOrder: async function (req, res) {
    try {
      const { user, items, status, totalAmount } = req.body;

     //Create order in razorpay
     const razorPayOrder = await razorpay.orders.create({
      amount: totalAmount * 100,
      currency: "INR"
  });
  const newOrder = new OrderModel({
    user: user,
    items: items,
    status: status,
    totalAmount: totalAmount,
    razorPayOrderId: razorPayOrder.id
});

      await newOrder.save();

      await CartModel.findOneAndUpdate({ user: user._id }, { items: [] });

      return res.json({
        success: true,
        data: newOrder,
        message: "Order Created",
      });
    } catch (error) {
      return res.json({ success: false, message: error });
    }
  },
  fetchOrderForUser: async function (req, res) {
    try {
      const userId = req.params.userId;
      const foundOrders = await OrderModel.find({ "user._id": userId }).sort({
        createdOn: -1,
      });

      return res.json({ success: true, data: foundOrders });
    } catch (error) {
      return res.json({ success: false, message: ex });
    }
  },
  updateorderStatus: async function (req, res) {
    try {
      const { orderId, status,razorPayPaymentId, razorPaySignature} = req.body;
      const updatedOrder = await OrderModel.findOneAndUpdate(
        { _id: orderId },
        { 
          status: status ,
          razorPayPaymentId: razorPayPaymentId,
          razorPaySignature: razorPaySignature
        },
        { new: true }
      );

      return res.json({ success: true, data: updatedOrder });
    } catch (error) {
      return res.json({ success: false, message: ex });
    }
  },
};

module.exports = OrderController;
