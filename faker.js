const { faker } = require('@faker-js/faker');

const User = require('./models/user.model');
const Item = require('./models/item.model');
const Purchase = require('./models/purchase.model');

const bcrypt = require("bcryptjs");
const rolesList = require("./config/roles_list");

async function createFakeUsers() {
    const users = Array.from({ length: 100 }, () => ({
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: bcrypt.hashSync('password', 12),
        roles: {
            User: rolesList.User,
        },
    }));
    const createdUsers = await User.insertMany(users);

    console.log(`${createdUsers.length} fake users created.`);

    return createdUsers;
}


async function createFakeItems() {
    const items = Array.from({ length: 100 }, () => ({
        title: faker.commerce.productName(),
        price: faker.commerce.price(),
        link: faker.internet.url(),
    }));
    const createdItems = await Item.insertMany(items);
    console.log(`${createdItems.length} fake items created.`);
    return items;
}



async function createFakePurchases(users) {
    const items = await Item.find(); // get all items
    const usersIds = users.map(user => user._id.toString());

    const purchases = Array.from({ length: 100 }, () => ({
        userId: usersIds[Math.floor(Math.random() * usersIds.length)],
        item: items[Math.floor(Math.random() * items.length)]._id.toString(),
    }));

    const createdPurchases = await Purchase.insertMany(purchases);
    console.log(`${createdPurchases.length} fake purchases created.`);
    return createdPurchases;
}



module.exports = { createFakeUsers, createFakeItems, createFakePurchases };

