const mongoose = require("mongoose");
const purchaseSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    item: { type: mongoose.Schema.Types.ObjectId, ref: "Item", required: true },
  },
  { timestamps: true }
); 

module.exports = mongoose.model("Purchase", purchaseSchema); 
