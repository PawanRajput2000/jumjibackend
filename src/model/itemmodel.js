const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  item_code: { type: String, required: true },
  thumbnail: String,
  sku: { type: String, required: true },
  asin: { type: String, required: true },
  item_name: { type: String, required: true },
  short_name: { type: String, required: true },
  price: { type: Number, required: true },
  amzfee: { type: Number, required: true },
  cost: { type: Number, required: true },
  vat: { type: Number, required: true },
  payout: { type: Number, required: true },
  profit: { type: Number, required: true },
  stock: [
    {
      location: { type: String, required: true },
      qty: { type: Number, required: true },
    },
  ],
  item_orders: [
    {
      order_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: false },
      qty: { type: Number, required: false },
      days: { type: Number, required: false },
    },
  ],
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
