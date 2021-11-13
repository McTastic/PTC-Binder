const router = require("express").Router();

const apiRoutes = require("./api");
// const homePage = require("./homepage");
const dashboardRoutes = require("./dashboardRoutes");
const loginRoutes = require("./loginRoutes");
const searchRoutes = require("./searchResultRoute");

router.use("/", dashboardRoutes);
router.use("/api", apiRoutes);
router.use("/login", loginRoutes);
router.use("/search", searchRoutes);
// router.use("/dashboard", dashboardRoutes);

router.get("*", async (req, res) => {
  try {
    res.render("404", {});
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
