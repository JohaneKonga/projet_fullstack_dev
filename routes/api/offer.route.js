const express = require("express");
const router = express.Router();
const { createOffer, getAllOffers, getOfferById, updateOfferById, deleteOfferById } = require("../../controllers/offer.controller");

router.post("/", createOffer);
router.get("/", getAllOffers);
router.get("/:id", getOfferById);
router.patch("/:id", updateOfferById);
router.delete("/:id", deleteOfferById);

module.exports = router;

