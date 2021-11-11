const router = require("express").Router();
const session = require("express-session");
const { Binder, BinderCard } = require("../../models");

// Create a new binder
router.post("/new", async (req, res) => {
  try {
    req.user_id = session.user_id;

    const binderData = await Binder.create(req.body);

    res.status(200).json(binderData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// delete binder
router.delete("/delete/:id", async (req, res) => {
  try {
    const binderData = await Binder.destroy({
      where: {
        binder_id: req.params.id,
      },
    });

    res.status(200).json(binderData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// add card to binder
router.put("/addcard/:binderid/:cardid", async (req, res) => {
  try {
    const cardBinderData = await BinderCard.create({
      binder_id: req.params.binderid,
      card_id: req.params.cardid,
    });
    res.status(200).json({
      message: "Card added to binder...",
      data: { Binder: req.params.binderid, Card: req.params.cardid },
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// rename binder
router.put("/rename/:id", async (req, res) => {
  try {
    const binderData = await Binder.update(
      { binder_name: req.body.binder_name },
      {
        where: {
          binder_id: req.params.id,
        },
      }
    );
    res
      .status(200)
      .json({
        message: "Binder name updated...",
        newBinderName: req.body.binder_name,
      });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
