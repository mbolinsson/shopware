const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {type: String, required: true},
  description: {type: String, required: true},
  shortDescription: {type: String, required: true},
  image: {type: String, required: true},
  details: {type: String, required: true},
  shipping: {type: String, required: true},
  inStockAmount: {type: Number, required: true},
  price: {type: Number, required: true},

  created: {type: Date, default: Date.now},
  modified: {type: Date, default: Date.now}
});

module.exports = mongoose.model("Product", productSchema);
