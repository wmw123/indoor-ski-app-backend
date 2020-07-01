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

module.exports = router;
