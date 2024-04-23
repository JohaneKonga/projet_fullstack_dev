const mongoose = require("mongoose");
const itemSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    link: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Item", itemSchema);
