const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DCollection = new Schema(
  {
    money: { rating: Number },
    collectables: { type: [String], required: true },
    operation: {type: String, require: true},
    collection_name: {type: String, require: true},
    amount: {rating: Number},
    collection_price: {rating: Number}
  },
  { timestamps: true }
);

module.exports = mongoose.model('dcolections', DCollection);