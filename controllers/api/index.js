const router = require("express").Router();
const userRoutes = require("./userRoutes");
const binderRoutes = require("./binderRoutes");
const inventoryRoutes = require("./InventoryRoutes");
// const ptcRoutes = require("./PTCcall");
// const cartRoutes = require("./cartRoutes");

router.use("/users", userRoutes);
router.use("/binder", binderRoutes);
router.use("/inventory", inventoryRoutes);
// router.use("/data", ptcRoutes);
// router.use("/cart", cartRoutes);
module.exports = router;
