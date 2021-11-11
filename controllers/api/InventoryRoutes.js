const router = require("express").Router();
const session = require("express-session");
const { Inventory } = require("../../models");

// Create a new item for sale
router.post("/addinventory", async (req, res) => {
  try {
    const inventoryData = await Inventory.create(req.body);

    res.status(200).json(inventoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
