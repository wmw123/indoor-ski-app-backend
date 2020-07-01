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
          priceAveragePerHour: 15,
          rating: 5,
          facility: "indoor dome",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "SnowWorld Landgraaf",
          website: "www.snowworld.com",
          location: "Limburg",
          priceAveragePerHour: 20,
          rating: 5,
          facility: "indoor dome",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ski Indoor Rolbaan Heemskerk",
          website: "www.ski-in.nl",
          location: "Noord Holland",
          priceAveragePerHour: 13,
          rating: 4,
          facility: "ski simulator",
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
