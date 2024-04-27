const express = require("express");
const router = express.Router();

const { login, register, logout } = require("../controllers/auth.controller");
const { registerSchema, loginSchema } = require("../validations/auth.validation");
const validateBody = require("../middlewares/valid_req_body.middleware");

router.post("/login", validateBody(loginSchema), login);
router.post("/register", validateBody(registerSchema), register);
router.post("/logout", logout);

module.exports = router;




