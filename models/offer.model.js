const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  discount: { type: Number, required: true },
  item: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
});

module.exports = mongoose.model('Offer', offerSchema);