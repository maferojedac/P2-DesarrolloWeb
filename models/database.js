const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DCollection = new Schema(
  {
    money: { rating: Number },
    collectables: { type: [String], required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('dcolections', DCollection);