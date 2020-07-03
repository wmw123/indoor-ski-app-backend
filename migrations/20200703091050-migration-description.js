"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      "indoorskiplaces",
      "description",
      { type: Sequelize.TEXT },
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("indoorskiplaces", "description", {});
  },
};
