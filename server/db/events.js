const db = require("./db");
const Sequelize = require("sequelize");

const Events = db.define("events", {
  EventId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  Day: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Month: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Date: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Time: {
    type: Sequelize.STRING,
    allowNull: false
  },
  EndDate: {
    type: Sequelize.STRING,
    validate: {
      isNull: true
    }
  },
  DateVal: {
    type: Sequelize.DATE,
    allowNull: false
  },
  EndDateVal: {
    type: Sequelize.STRING,
    validate: {
      isNull: true
    }
  },
  VenueName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  VenueCapacity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  VenueCapacitySliderOffset: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  VenueCity: {
    type: Sequelize.STRING,
    allowNull: false
  },
  VenueStateProvince: {
    type: Sequelize.STRING,
    validate: {
      isNull: true
    }
  },
  VenueCountry: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  VenueCountryCode: {
    type: Sequelize.STRING,
    allowNull: false
  },
  VenueConfigId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  EventName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  MinPrice: {
    type: Sequelize.STRING,
    allowNull: false
  },
  EventUrl: {
    type: Sequelize.TEXT,
    defaultValue: "/Concert-Tickets/Rock-and-Pop/Elton-John-Tickets/E-2566910"
  },
  MetroAreaUrl: {
    type: Sequelize.STRING,
    validate: {
      isNull: true
    }
  },
  AvailableTickets: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  TotalMaxDisplayTickets: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  AvailableTicketsNumber: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  IsSellingFast: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  IsDateTimeTBA: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  LinkTitleText: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  AllowPublicPurchase: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  },
  AllowPublicListing: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  },
  OnSaleDate: {
    type: Sequelize.STRING,
    validate: {
      isNull: true
    }
  },
  LimitedQuantityRemainingContent: {
    type: Sequelize.STRING,
    validate: {
      isNull: true
    }
  },
  IsCheapestCity: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  },
  IsCheapestCityContent: {
    type: Sequelize.TEXT
  },
  IsMostExpensiveInCity: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  cheapestPercentageAmount: {
    type: Sequelize.STRING,
    validate: {
      isNull: true
    }
  },
  IsRecentlyViewed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  CategoryId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  IsCrossListed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  IsSoldOut: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  HidePrice: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  },
  IsMostLovedEvent: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  HeadingTowardsLimitedStockMessage: {
    type: Sequelize.TEXT
  },
  HeadingTowardsLimitedSupplyMessage: {
    type: Sequelize.STRING,
    validate: {
      isNull: true
    }
  },
  UrgencyCategory: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  CityImageUrl: {
    type: Sequelize.STRING,
    validate: {
      isNull: true
    }
  },
  IsLocalEvent: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  MapPngUrl: {
    type: Sequelize.STRING,
    validate: {
      isNull: true
    }
  },
  EmojiFlag: {
    type: Sequelize.STRING,
    validate: {
      isNull: true
    }
  },
  IsWeekend: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  VenueNotes: {
    type: Sequelize.STRING,
    validate: {
      isNull: true
    }
  },
  RecentCategories: {
    type: Sequelize.STRING,
    validate: {
      isNull: true
    }
  },
  EventCountdownMessage: {
    type: Sequelize.STRING,
    validate: {
      isNull: true
    }
  },
  HasMonthlyDeal: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  TransactionWithinTheLastDay: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  PriceSymbolIndicator: {
    type: Sequelize.STRING,
    validate: {
      isNull: true
    }
  },
  NewListingWithinTheLastDay: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  IsMostPopularEventInVenueCityThatWeekend: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  IsNextEvent: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  SecondsToEvent: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  VenueHasImage: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  VenueImageUrl: {
    type: Sequelize.STRING,
    validate: {
      isNull: true
    }
  },
  IsLastDateInCity: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  },
  SoldOutTicketClasses: {
    type: Sequelize.STRING,
    validate: {
      isNull: true
    }
  },
  BestSellingMessage: {
    type: Sequelize.STRING,
    validate: {
      isNull: true
    }
  },
  AlreadySoldContent: {
    type: Sequelize.STRING,
    validate: {
      isNull: true
    }
  },
  DistanceFromUser: {
    type: Sequelize.STRING,
    validate: {
      isNull: true
    }
  },
  VenueDescription: {
    type: Sequelize.TEXT
  },
  GoogleVenueInfomationRating: {
    type: Sequelize.STRING,
    validate: {
      isNull: true
    }
  },
  VenueCapacityString: {
    type: Sequelize.STRING,
    allowNull: false
  },
  HasGeneralAdmissionTickets: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  HasSeatedTickets: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  CheapestInCountryContent: {
    type: Sequelize.STRING,
    validate: {
      isNull: true
    }
  },
  SnapshotMetrics: {
    type: Sequelize.STRING,
    validate: {
      isNull: true
    }
  },
  OnSaleSinceMessage: {
    type: Sequelize.STRING,
    validate: {
      isNull: true
    }
  },
  FriendlyEventCountdownMessage: {
    type: Sequelize.STRING,
    validate: {
      isNull: true
    }
  }
});

module.exports = Events;
