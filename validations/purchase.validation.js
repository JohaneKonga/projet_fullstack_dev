const joi = require("joi");

const purchaseSchema = joi.object({
  title: joi.string().required(),
  price: joi.number().positive().required(),
  link: joi.string().required(),
});

module.exports = {purchaseSchema};

