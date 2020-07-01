"use strict";
module.exports = (sequelize, DataTypes) => {
  const wishlistItem = sequelize.define(
    "wishlistItem",
    {
      indoorskiplaceId: {
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
      },
    },
    {}
  );
  wishlistItem.associate = function (models) {
    wishlistItem.belongsTo(models.user);
    wishlistItem.belongsTo(models.indoorskiplace);
  };
  return wishlistItem;
};
