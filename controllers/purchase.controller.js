const Purchase = require("../models/purchase.model");

const createPurchase = async (req, res) => {
  try {
    const purchase = await Purchase.create(req.body);
    res.status(201).json(purchase);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllPurchases = async (req, res) => {
  try {
    const purchases = await Purchase.find();
    res.status(200).json(purchases);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getPurchaseById = async (req, res) => {
  const _id = req.params.id;
  try {
    const purchase = await Purchase.findById(_id);
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


module.exports = { createPurchase, getAllPurchases, getPurchaseById, updatePurchaseById, deletePurchaseById };