const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: String, required: true },
  address: { type: String, required: true },
  menu: { type: String, required: true },
}, {
  timestamps: true,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
