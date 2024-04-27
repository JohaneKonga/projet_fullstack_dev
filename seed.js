require("dotenv").config();
const mongoose = require('mongoose');
const User = require('./models/user.model');
const bcrypt = require("bcryptjs");

const rolesList = require("./config/roles_list");

const data = [
    {
        name: 'Admin User',
        email: 'admin@shopsense.com',
        password: '',
        roles: {
            User: rolesList.User,
            Admin: rolesList.Admin
        },
    },
];

const seedDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const hashedPassword = await bcrypt.hash('AdminPassowrd', 12);
        data[0].password = hashedPassword;
        await User.deleteMany(); // Remove existing data
        await User.insertMany(data); // Insert new data

        console.log('Database seeded successfully');
        process.exit();
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedDatabase();