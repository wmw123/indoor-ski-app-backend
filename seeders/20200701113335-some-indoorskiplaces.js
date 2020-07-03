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
          imageUrl:
            "https://www.dagjeweg.nl/img/afb/0/2/7/r0-0d-300-225-1cf-kind_kinderpiste_snowplanet-1556270036.jpeg",
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
          imageUrl:
            "https://img5.onthesnow.com/image/la/14/indoor_snowpark_snowworld_landgraaf_netherlands_1_144862.jpg",
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
          imageUrl:
            "https://skidiscovery.nl/wp-content/uploads/2017/04/SkiDiscovery-46Edit-545x380.jpg",
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
