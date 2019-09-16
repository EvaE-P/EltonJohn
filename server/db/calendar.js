const db = require("./db");
const Sequelize = require("sequelize");
const Events = require("./events");
const CalendarView = db.define("calendarView", {
  MonthName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  WeekdayAndTime: {
    type: Sequelize.STRING,
    allowNull: false
  },
  DayOfMonth: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Year: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Weekday: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Time: {
    type: Sequelize.STRING,
    allowNull: false
  },
  FullMonthName: {
    type: Sequelize.STRING,
    validate: {
      isNull: true
    }
  },
  FullWeekday: {
    type: Sequelize.STRING,
    validate: {
      isNull: true
    }
  }
});

module.exports = CalendarView;

// eventId: {
//     type: Sequelize.STRING,
//     references: {
//       model: Events,
//       key: "id"
//     }
//   }
