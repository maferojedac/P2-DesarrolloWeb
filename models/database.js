const DCollection = new Schema(
  {
    money: { money: Number },
    collectables: { collectables: [String], required: true },
    operation: {type: String, require: true},
    collection_name: {type: String, require: true},
    amount: {amount: Number},
    collection_price: {collection_price: Number}
  },
  { timestamps: true }
);

module.exports = mongoose.model('dcolections', DCollection);