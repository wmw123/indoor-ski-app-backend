"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      snowSport: {
        type: DataTypes.STRING,
      },
      experience: {
        type: DataTypes.STRING,
      },
    },
    {}
  );
  user.associate = function (models) {
    user.hasMany(models.review);
    user.belongsToMany(models.indoorskiplace, {
      through: "wishlistItems",
      foreignKey: "indoorskiplaceId",
    });
  };
  return user;
};
