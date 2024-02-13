const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  product_id: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: 'This field is required.'
  },
  vendor_id: {
    type: String,
    required: 'This field is required.'
  },
  store_id: {
    type: String,
    required: 'This field is required.'
  },
});

module.exports = mongoose.model('Cart', cartSchema);