const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    res.render("homepage", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// router.get("/dashboard", async (req, res) => {
//   try {
//     res.render("dashboard", {
//       modal: {
//         title: "mySuperFun Title",
//         body: "body",
//       },
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
