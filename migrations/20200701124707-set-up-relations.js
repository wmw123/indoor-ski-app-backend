"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("reviews", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("reviews", "indoorskiplaceId", {
      type: Sequelize.INTEGER,
      references: {
        model: "indoorskiplaces",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("reviews", "userId");
    await queryInterface.removeColumn("reviews", "indoorskiplaceId");
  },
};
