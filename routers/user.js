const { Router } = require("express");

const router = new Router();

const User = require("../models").user;
const Review = require("../models").review;

router.get("/", async (req, res, next) => {
  try {
    const limit = Math.min(req.query.limit || 25, 500);
    const offset = req.query.offset || 0;

    //console.log("limit and offset", limit, offset);

    const users = await User.findAndCountAll({
      limit,
      offset,
      include: [Review],
    });

    //console.log("users", users);

    if (!users) {
      res.status(404).send("No users found");
    } else {
      res.json({
        users: users.rows,
        total: users.count,
      });
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
