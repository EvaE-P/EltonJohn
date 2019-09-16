const router = require("express").Router();
const CalendarView = require("../db/calendar");
const Events = require("../db/events");

router.get("/home", async (req, res, next) => {
  try {
    const events = await Events.findAll();
    res.json(events);
  } catch (err) {
    console.log("No Events", err);
    next(err);
  }
});
router.get("/:name", async (req, res, next) => {
  try {
    const foundCity = await Events.findAll({
      where: { VenueCity: req.params.name }
    });
    res.json(foundCity);
  } catch (err) {
    console.log("No City", err);
    next(err);
  }
});
router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});
module.exports = router;
