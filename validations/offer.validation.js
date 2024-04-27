const joi = require("joi");

const offerSchema = joi.object({
    title: joi.string().required().min(6),
    description: joi.string().required().min(10),
    discount: joi.number().required().min(0).max(100),
    item: joi.string().required(),
});

module.exports = { offerSchema };

























