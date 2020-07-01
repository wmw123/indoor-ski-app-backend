"use strict";
module.exports = (sequelize, DataTypes) => {
  const review = sequelize.define(
    "review",
    {
      rating: {
        type: DataTypes.INTEGER,
      },
      quote: {
        type: DataTypes.TEXT,
      },
    },
    {}
  );
  review.associate = function (models) {
    // associations can be defined here
  };
  return review;
};
