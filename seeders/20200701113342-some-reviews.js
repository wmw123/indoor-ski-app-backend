"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "reviews",
      [
        {
          rating: 5,
          quote: "Great vibe and good instructors",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          rating: 3,
          quote:
            "Not enthusiastic about the snow conditions, but great atmosphere",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("reviews", null, {});
  },
};
