const router = require("express").Router();

const apiRoutes = require("./api");
const homePage = require("./homepage");

router.use("/", homePage);
router.use("/api", apiRoutes);

module.exports = router;

router.get("*", async (req, res) => {
  try {
    res.render("404", {});
  } catch (err) {
    res.status(500).json(err);
  }
});
