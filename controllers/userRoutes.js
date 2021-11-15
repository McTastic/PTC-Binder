const router = require("express").Router();
const withAuth = require("../utils/auth");
const { Binder } = require("../models");

router.get("/", withAuth, async (req, res) => {
  try {
    const binderData = await Binder.findAll({
      where: { user_id: req.session.user_id },
    });
    if (binderData.length > 1) {
      // console.log(binderData);
      console.log("Retrieving plain data...");
      const binders = binderData.map((binder) => binder.get({ plain: true }));
      // res.status(200).json(binders);
      res.render("userPage", {
        binders,
        logged_in: req.session.logged_in,
      });
    } else {
      res.render("add-binder", {
        logged_in: req.session.logged_in,
      });
    }

    // res.status(200).json(binderData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
