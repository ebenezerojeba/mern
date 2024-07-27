import orderModel from "../models/orderModel.js";
import axios from "axios";
import userModel from "../models/userModel.js";

const paystackSecretKey = process.env.PAYSTACK_SECRET_KEY;
const frontend_url = "http://localhost:5173"; 


// Simulated cart storage (in memory, you might want to use session storage or database)
let userCarts = {};

const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address, email,  } = req.body;

    // Save cart items to user's cart (simulated)
    userCarts[userId] = items;

    // Create a new order and save it to the database
    const newOrder = new orderModel({
      userId,
      items: userCarts[userId], // Get items from user's cart
      amount,
      address,
      status: 'pending',
      payment: false
    });

    const savedOrder = await newOrder.save();
  

    // Prepare payment data for Paystack
    const paymentData = {
      email,
      amount: amount * 100, // Amount in kobo (multiply by 100 for Naira)
      callback_url: `${frontend_url}/verify?success=true&orderId=${savedOrder._id}`
    };

    // Make a POST request to Paystack to initialize the transaction
    const response = await axios.post('https://api.paystack.co/transaction/initialize', paymentData, {
      headers: {
        Authorization: `Bearer ${paystackSecretKey}`,
        'Content-Type': 'application/json'
      }
    });

    // Extract authorization URL and transaction reference from Paystack's response
    const { authorization_url, reference } = response.data.data;
    console.log('Authorization URL:', authorization_url);
    console.log('Transaction Reference:', reference);

    // Send success response with authorization URL and reference to the frontend
    res.json({
      success: true,
      session_url: authorization_url,
      reference: reference
    });
  } catch (error) {
    console.error("Error placing order:", error);
    res.json({ success: false, message: "Error placing order" });
  }
};

const verifyOrder = async (req, res) => {
  const { reference, orderId } = req.body;

  try {
    // Make a GET request to Paystack to verify the transaction
    const response = await axios.get(`https://api.paystack.co/transaction/verify/${reference}`, {
      headers: {
        Authorization: `Bearer ${paystackSecretKey}`,
        'Content-Type': 'application/json'
      }
    });

    // Check if payment verification is successful
    if (response.data.data.status === "success") {
      // Retrieve items from user's cart
      const items = userCarts[response.data.data.metadata.userId];

      // Update the order status to 'completed' and set payment flag to true
      const updatedOrder = await orderModel.findByIdAndUpdate(orderId, { status: 'completed', payment: true, items }, { new: true });
      
      if (!updatedOrder) {
        return res.status(404).json({ success: false, message: "Order not found" });
      }

      // Clear user's cart after successful order
      delete userCarts[response];

      return res.json({ success: true, message: "Payment verified and order updated", order: updatedOrder });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      return res.status(400).json({ success: false, message: "Payment verification failed" });
    }
  } catch (error) {
    console.error("Error verifying payment:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const userOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({ userId: req.body.userId, status: { $ne: 'pending' } });
    res.json({ success: true, data: orders });
  } catch (error) {
    console.error("Error fetching user orders:", error);
    res.json({ success: false, message: "Error fetching user orders" });
  }
};

const listOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({ status: { $ne: 'pending' } });
    res.json({ success: true, data: orders });
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.json({ success: false, message: "Error fetching orders" });
  }
};

const updateStatus = async (req, res) => {
  try {
    await orderModel.findByIdAndUpdate(req.body.orderId, { orderStatus: req.body.status });
    res.json({ success: true, message: "Status updated" });
  } catch (error) {
    console.error("Error updating status:", error);
    res.json({ success: false, message: "Error updating status" });
  }
};

export { placeOrder, verifyOrder, userOrders, listOrders, updateStatus };
