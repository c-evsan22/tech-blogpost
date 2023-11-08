const { User } = require('../models');

const userData = [
    {
        username: "c-evsan22",
        github: "c-evsan22",
        email: "christianes322@gmail.com",
        password: "password"
    },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;