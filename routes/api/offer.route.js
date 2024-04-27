const express = require("express");
const router = express.Router();
const { createOffer, getAllOffers, getOfferById, updateOfferById, deleteOfferById, getMyOffers } = require("../../controllers/offer.controller");

const { offerSchema } = require("../../validations/offer.validation");
const validateBody = require("../../middlewares/valid_req_body.middleware");

const validRoles = require("../../middlewares/valid_roles.middleware");
const rolesList = require("../../config/roles_list");

router.post("/", validRoles(rolesList.Admin), validateBody(offerSchema),  createOffer);
router.get("/", getAllOffers);
router.get('/me', getMyOffers);
router.get("/details/:id", getOfferById);
router.patch("/:id", updateOfferById);
router.delete("/:id", deleteOfferById);

module.exports = router;

