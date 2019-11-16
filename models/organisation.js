const Sequelize = require("sequelize");
const db = require("../config/database.js");

const Organisation = db.define("organisation", {
  org_name: {
    type: Sequelize.STRING
  },
  contact_person: {
    type: Sequelize.STRING
  },
  contact_no: {
    type: Sequelize.STRING
  },
  org_address: {
    type: Sequelize.TEXT
  },
  reg_no: {
    type: Sequelize.STRING
  },
  location_url: {
    type: Sequelize.STRING
  },
  organisation_catogery: {
    type: Sequelize.STRING
  },
  active: {
    type: Sequelize.BOOLEAN
  }
});

module.exports = Organisation;
