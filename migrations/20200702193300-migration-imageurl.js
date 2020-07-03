"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      "indoorskiplaces",
      "imageUrl",
      { type: Sequelize.TEXT },
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("indoorskiplaces", "imageUrl", {});
  },
};
