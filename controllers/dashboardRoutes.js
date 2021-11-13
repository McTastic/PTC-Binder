const router = require("express").Router();
// const withAuth = require("../utils/auth");
// const { User, Binder } = require("../models");

router.get("/", async (req, res) => {
  try {
    res.render("dashboard", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Find the logged in user based on the session ID
// const userData = await User.findByPk(req.session.user_id, {
//   attributes: { exclude: ["password"] },
//   include: [{ model: Binder }],
// });

// const user = userData.get({ plain: true });
//     console.log("**************************", user);
//     res.render("dashboard", {
//       ...user,
//       logged_in: true,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
