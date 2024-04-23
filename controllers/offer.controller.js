const Offer = require("../models/offer.model");

const createOffer = async (req, res) => {
  try {
    const offer = new Offer(req.body);
    const newOffer = await offer.save();
    res.status(201).json(newOffer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllOffers = async (req, res) => {
  try {
    const offers = await Offer.find().populate("userId").exec();
    res.status(200).json(offers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getOfferById = async (req, res) => {
  const { id } = req.params;
  try {
    const offer = await Offer.findById(id).populate("userId");
    if (!offer) {
      return res.status(404).json({ error: "Offer not found" });
    }
    res.status(200).json(offer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateOfferById = async (req, res) => {
  const { id } = req.params;
  try {
    const offer = await Offer.findById(id);
    if (!offer) {
      return res.status(404).json({ error: "Offer not found" });
    }
    const updatedOffer = Object.assign(offer, req.body);
    const savedOffer = await updatedOffer.save();
    res.status(200).json(savedOffer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteOfferById = async (req, res) => {
  const { id } = req.params;
  try {
    const offer = await Offer.findByIdAndRemove(id);
    if (!offer) {
      return res.status(404).json({ error: "Offer not found" });
    }
    res.status(204).json({ message: "Offer deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createOffer,
  getAllOffers,
  getOfferById,
  updateOfferById,
  deleteOfferById,
};
