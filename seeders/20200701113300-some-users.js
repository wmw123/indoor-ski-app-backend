"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Frank",
          email: "frank@snow.com",
          password: "1234",
          snowSport: "snowboarder",
          experience: "3 years",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ray",
          email: "ray@snow.com",
          password: "1234",
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
