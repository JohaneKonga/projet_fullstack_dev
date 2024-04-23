const mongoose = require("mongoose");
const itemSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    images: {type: [String]}, 
    price: { type: Number, required: true },
    link: { type: string, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Item", itemSchema);
