const express = require("express");
const router = express.Router();
const { getUsers,
        getUserById,
        updateUserById,
        deleteUserById, } = require("../../controllers/user.controller");
const { updateUserSchema } = require("../../validations/user.validation");
const validateBody = require("../../middlewares/valid_req_body.middleware");
const validRoles = require("../../middlewares/valid_roles.middleware");
const rolesList = require("../../config/roles_list");

router.get("/", validRoles(rolesList.Admin), getUsers);
router.get("/details/:id", validRoles(rolesList.Admin, rolesList.User), getUserById);
router.patch("/:id", validateBody(updateUserSchema), updateUserById);
router.delete("/:id", validRoles(rolesList.Admin), deleteUserById);

module.exports = router;

