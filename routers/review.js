const { Router } = require("express");
const authMiddleware = require("../auth/middleware");

const router = new Router();

const Indoorskiplace = require("../models").indoorskiplace;
const Review = require("../models").review;

router.post("/", authMiddleware, async (req, res) => {
  const { rating, quote, indoorskiplaceId } = req.body;
  if (!rating || !quote || !indoorskiplaceId) {
    return res.status(400).send("Missing credentials");
  }

  const userId = req.user.id;

  try {
    const newReview = await Review.create({
      rating,
      quote,
      userId,
      indoorskiplaceId,
    });

    // user find by pk, include artwork
    const indoorskiplace = await Indoorskiplace.findByPk(indoorskiplaceId, {
      include: [Review],
    });

    res.status(201).json({ ...indoorskiplace.dataValues });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send({ message: "You are not allowed to write reviews" });
    }

    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;
