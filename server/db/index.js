const Events = require("./events");
const CalendarView = require("./calendar");

Events.hasMany(CalendarView);
CalendarView.belongsTo(Events, {
  foreignKey: { allowNull: false }
});

module.exports = {
  Events,
  CalendarView
};
