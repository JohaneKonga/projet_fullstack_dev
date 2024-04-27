const joi = require("joi");

const updateUserSchema = joi.object({
    name: joi.string().min(6),
    email: joi.string().email(),
    password: joi.string().min(6),
});

module.exports = { updateUserSchema };





