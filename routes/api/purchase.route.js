const express = require("express");
const router = express.Router();
const { createPurchase, getAllPurchases, getPurchaseById, updatePurchaseById, deletePurchaseById, getMyPurchases } = require("../../controllers/purchase.controller");

const { purchaseSchema } = require("../../validations/purchase.validation");
const validateBody = require("../../middlewares/valid_req_body.middleware");


router.post("/",  validateBody(purchaseSchema), createPurchase);
router.get("/", getAllPurchases);
router.get("/me", getMyPurchases);
router.get("/details/:id", getPurchaseById);
router.patch("/:id", updatePurchaseById);
router.delete("/:id", deletePurchaseById);

module.exports = router;
 

