const router = require("express").Router();
const { Inventory, Card } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    let scripts = [
      // { src: "/js/logout.js" },
      // { src: "/js/index.js" },
      { src: "/js/binderActions.js" },
    ];
    const inventoryData = await Inventory.findAll({
      include: [{ model: Card }],
    });
    // console.log(inventoryData);
    const inventory = await inventoryData.map((data) =>
      data.get({ plain: true })
    );
    inventory.forEach((card) => console.log(card));
    console.log(inventory);
    res.render("shop", {
      logged_in: req.session.logged_in,
      inventory,
    });

    // res.render("searchResults", {
    //   logged_in: req.session.logged_in,
    // });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
