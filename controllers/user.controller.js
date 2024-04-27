
const User = require("../models/user.model");
const rolesList = require("../config/roles_list");

const getUsers = async (req, res) => {
    const page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || 10;
    try {
        const users = await User.find({
            $and: [
                { 'roles.User': rolesList.User },
                { 'roles.Admin': undefined }
            ]
        })
            .skip(page * limit)
            .limit(limit);
        const total = await User.countDocuments({
            $and: [
                { 'roles.User': rolesList.User },
                { 'roles.Admin': undefined }
            ]
        });
        res.status(200).json({ users, total, page: page + 1, pages: Math.ceil(total / limit), limit });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByIdAndUpdate(id, req.body, { new: true });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getUsers,
    getUserById,
    updateUserById,
    deleteUserById,
};

