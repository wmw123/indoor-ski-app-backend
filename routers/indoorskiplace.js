const { Router } = require("express");

const router = new Router();

const Indoorskiplace = require("../models").indoorskiplace;
const Review = require("../models").review;

router.get("/", async (req, res, next) => {
  try {
    const limit = Math.min(req.query.limit || 25, 500);
    const offset = req.query.offset || 0;

    //console.log("limit and offset", limit, offset);

    const indoorskiplaces = await Indoorskiplace.findAndCountAll({
      limit,
      offset,
      include: [Review],
    });

    //console.log("indoorskiplaces", indoorskiplaces);

    if (!indoorskiplaces) {
      res.status(404).send("No indoorskiplaces found");
    } else {
      res.json({
        indoorskiplaces: indoorskiplaces.rows,
        total: indoorskiplaces.count,
      });
    }
  } catch (e) {
    next(e);
  }
});

router.get("/:indoorskiplaceId", async (req, res) => {
  const indoorskiplaceId = parseInt(req.params.indoorskiplaceId);
  const indoorskiplace = await Indoorskiplace.findByPk(indoorskiplaceId, {
    include: [Review],
  });

  if (!indoorskiplace) {
    res.status(404).send("Indoorskiplace not found");
  } else {
    res.send(indoorskiplace);
  }
});

router.get("/:indoorskiplaceId/reviews", async (req, res, next) => {
  try {
    const indoorskiplaceId = parseInt(req.params.indoorskiplaceId);
    const indoorskiplace = await Indoorskiplace.findByPk(indoorskiplaceId, {
      include: [Review],
    });
    if (indoorskiplace) {
      res.send(indoorskiplace.reviews);
    } else {
      res.status(404).send("Indoorskiplaces with reviews not found");
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
