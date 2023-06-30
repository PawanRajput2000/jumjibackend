const mongoose = require('mongoose');

const salesDocumentSchema = new mongoose.Schema({
  date: { type: Date, unique: true, required: true },
  sales: { type: Number, required: true },
  orders: { type: Number, required: true },
  items: { type: Number, required: true },
  returns: { type: Number, required: true },
  ads: { type: Number, required: true },
  amz_fees: { type: Number, required: true },
  promo: { type: Number, required: true },
  giftwrap: { type: Number, required: true },
  shipping: { type: Number, required: true },
  vat: { type: Number, required: true },
  payout: { type: Number, required: true },
  cost_goods: { type: Number, required: true },
  gross_profit: { type: Number, required: true },
  net_profit: { type: Number, required: true },
  margin: { type: Number, required: true },
  ROI: { type: Number, required: true },
  stock: [{
    warehouse: { type: String, required: true },
    stock: { type: Number, required: true }
  }],
  supplier_orders: [{
    supplier: { type: String, required: true },
    qty: { type: Number, required: true },
    days: { type: Number, required: true }
  }],
  products: [{
    item_id: { type: String, required: true },
    price: { type: Number, required: true },
    qty: { type: Number, required: true },
    ads: { type: Number, required: true },
    amz_fees: { type: Number, required: true },
    shipping: { type: Number, required: true },
    promo: { type: Number, required: true },
    giftwrap: { type: Number, required: true },
    vat: { type: Number, required: true },
    margin: { type: String, required: true },
    payout: { type: Number, required: true },
    cost: { type: Number, required: true },
    profit: { type: Number, required: true }
  }]
});

const SalesDocument = mongoose.model('SalesDocument', salesDocumentSchema);

module.exports = SalesDocument;
