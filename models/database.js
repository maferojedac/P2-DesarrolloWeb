const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DCollection = new Schema(
  {
    money: { rating: Number },
    collectables: { type: [String], required: true },
  },
  { timestamps: true }
);

const DVenta = new Schema(
  {
    operation: {type: String, require: true},
    collection: {},
    amount: {},
    collection_price: {}
  }
)

module.exports = mongoose.model('dcolections', DCollection);
module.exports = mongoose.model('dventas', DVenta);