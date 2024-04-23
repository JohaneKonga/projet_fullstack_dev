const express = require("express");
const router = express.Router();
const { createPurchase, getAllPurchases, getPurchaseById, updatePurchaseById, deletePurchaseById } = require("../../controllers/purchase.controller");

router.post("/", createPurchase);
router.get("/", getAllPurchases);
router.get("/:id", getPurchaseById);
router.patch("/:id", updatePurchaseById);
router.delete("/:id", deletePurchaseById);

module.exports = router;


