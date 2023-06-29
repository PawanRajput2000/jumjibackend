const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  order_number: { type: String, required: true },
  order_date: { type: Date, default: Date.now },
  order_value: { type: Number, required: true },
  items: [
    {
      item_code: { type: String, required: true },
      qty: { type: Number, required: true },
      price: { type: Number, required: true },
      ads: { type: Number, required: true },
      amzfee: { type: Number, required: true },
      vat: { type: Number, required: true },
      payout: { type: Number, required: true },
      profit: { type: Number, required: true },
      margin: { type: Number, required: true },
      roi: { type: Number, required: true },
    },
  ],
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
