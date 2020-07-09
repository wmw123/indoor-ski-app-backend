"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Frank",
          email: "frank@snow.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          snowSport: "snowboarder",
          experience: "3 years",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ray",
          email: "ray@snow.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          snowSport: "skier",
          experience: "10 years",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
