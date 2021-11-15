const router = require("express").Router();
const { User, Binder, Card } = require("../../models");

// Create a new user
router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.user_id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Login as an existing user
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { user_name: req.body.user_name },
    });

    if (!userData) {
      res.status(500).json({
        message: "Incorrect email and/or password, please try again...",
      });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);
    console.log(validPassword);
    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.user_id;
      req.session.logged_in = true;
      // console.log(req.session);
      // res.json({
      //   user: userData,
      //   message: "You are now logged in!",
      //   session: req.session,
      // });
      res.render("userPage", {
        logged_in: true,
      });
    });

    // console.log("User is logged in...");
    // res.render("dashboard", {
    //   logged_in: req.session.logged_in,
    // });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.get("/binders", async (req, res) => {
  try {
    const binderData = await Binder.findAll(
      { where: { user_id: req.session.user_id } }
      // include: [
      //   {
      //     model: Card,
      //   },
      // ],
    );
    if (binderData.length > 1) {
      console.log(binderData);
      console.log("Retrieving plain data...");
      const binders = binderData.map((binder) => binder.get({ plain: true }));
      // console.log("Plain data...");
      // console.log(binders);
      res.status(200).json(binders);
      // res.render("userPage", {
      //   binders,
      //   logged_in: req.session.logged_in,
      // });
    } else {
      res.render("login", {
        logged_in: req.session.logged_in,
      });
    }

    // res.status(200).json(binderData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
