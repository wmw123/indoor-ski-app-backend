"use strict";
module.exports = (sequelize, DataTypes) => {
  const indoorskiplace = sequelize.define(
    "indoorskiplace",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      website: {
        type: DataTypes.STRING,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      priceAveragePerHour: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      rating: {
        type: DataTypes.INTEGER,
      },
      facility: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
    },
    {}
  );
  indoorskiplace.associate = function (models) {
    indoorskiplace.hasMany(models.review);
    indoorskiplace.belongsToMany(models.user, {
      through: "wishlistItems",
      foreignKey: "userId",
    });
  };
  return indoorskiplace;
};
