"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "indoorskiplaces",
      [
        {
          name: "SnowWorld Amsterdam",
          website: "www.snowworld.com",
          location: "Noord Holland",
          price: "€15 per uur",
          rating: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "SnowWorld Landgraaf",
          website: "www.snowworld.com",
          location: "Limburg",
          price: "€20 per uur",
          rating: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ski Indoor Rolbaan Heemskerk",
          website: "www.ski-in.nl",
          location: "Noord Holland",
          price: "€15 per uur",
          rating: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("indoorskiplaces", null, {});
  },
};
