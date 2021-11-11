const router = require("express").Router();
const userRoutes = require("./userRoutes");
const binderRoutes = require("./binderRoutes");
const inventoryRoutes = require("./InventoryRoutes");

router.use("/users", userRoutes);
router.use("/binder", binderRoutes);
router.use("/inventory", inventoryRoutes);

module.exports = router;
