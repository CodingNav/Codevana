const sequelize = require("../config/connection");
const User = require("../models/User");
const userData = require("./user-seeds.json");


//create tables and seed with test data
const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
};

seedDatabase();
