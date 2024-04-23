const Purchase = require("../models/purchase.model");
const Item = require("../models/item.model");

const createPurchase = async (req, res) => {
  try {
    const item = new Item(req.body);
    await item.save();

    const purchase = await Purchase.create({
      userId: req.userId,
      item: item._id
    });
    const savedPurchase = await purchase.save();
    const populatedPurchase = await savedPurchase.populate({ path: "item", select: ["title", "price", "link"] });

    res.status(201).json(populatedPurchase);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllPurchases = async (req, res) => {
  try {
    const purchases = await Purchase.find().populate({ path: "item", select: ["title", "price", "link"] });
    res.status(200).json(purchases);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getPurchaseById = async (req, res) => {
  const _id = req.params.id;
  try {
    const purchase = await Purchase.findById(_id).populate({ path: "item", select: ["title", "price", "link"] });
    if (!purchase) return res.status(404).json({ error: "purchase not found" });
    res.status(200).json(purchase);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updatePurchaseById = async (req, res) => {
  const _id = req.params.id;
  try {
    const purchase = await Purchase.findByIdAndUpdate(_id, req.body, { new: true });
    if (!purchase) return res.status(404).json({ error: "purchase not found" });
    res.status(200).json(purchase);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deletePurchaseById = async (req, res) => {
  const _id = req.params.id;
  try {
    const purchase = await Purchase.findByIdAndDelete(_id);
    if (!purchase) return res.status(404).json({ error: "purchase not found" });
    res.status(200).json({ message: "purchase deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getMyPurchases = async (req, res) => {
  const page = parseInt(req.query.page) - 1 || 0;
  const limit = parseInt(req.query.limit) || 10;

  const userId = req.userId;
  console.log(req.userId);
  try {
    const purchases = await Purchase.find({ userId }).populate({ path: "item", select: ["title", "price", "link"] })
      .skip(page * limit)
      .limit(limit);
    const total = await Purchase.countDocuments({ userId });

    res.status(200).json({ purchases, total, page: page + 1, pages: Math.ceil(total / limit), limit });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}


module.exports = { createPurchase, getAllPurchases, getPurchaseById, updatePurchaseById, deletePurchaseById, getMyPurchases };