import mongoose from 'mongoose';


const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true,},
  items: [{ name: String, quantity: Number, price: Number }],
  amount: { type: Number, required: true },
  address: { type: Object, required: true },
  payment: { type: Boolean,default: true },
  date: { type: Date, default:Date.now() },
  status: { type: String, default: 'pending' },
  orderStatus: { type: String, default: 'Food processing' } // Add status field
});

const orderModel = mongoose.models.order || mongoose.model("order", orderSchema)
export default orderModel;
