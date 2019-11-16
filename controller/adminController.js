const Organisation = require("../models/organisation.js");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

exports.getRegistrations = (req, res) => {
  if (req.query.total == 1) {
    Organisation.findAndCountAll({
      where: { active: true }
    })
      .then(result => {
        res.status(200).json({
          total_registrations: result.count,
          registrations: result.rows
        });
      })
      .catch(err => {
        console.log(err);
      });
  } else if (req.query.start_date && req.query.end_date) {
    console.log(req.query.start_date);
    Organisation.findAndCountAll({
      where: {
        [Op.and]: [
          { active: true },
          {
            createdAt: {
              [Op.between]: [req.query.start_date, req.query.end_date]
            }
          }
        ]
      }
    })
      .then(result => {
        res.status(200).json({
          total_registrations: result.count,
          registrations: result.rows
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
};

exports.getSearchResults = (req, res) => {
  let obj = req.query;
  let cat = { organisation_catogery: obj.catogery };
  let name = { org_name: { [Op.like]: `%${obj.org_name}%` } };
  let no = { contact_no: obj.contact_no };

  if (!obj.org_name) {
    name = true;
  }
  if (!obj.catogery) {
    cat = true;
  }
  if (!obj.contact_no) {
    no = true;
  }

  Organisation.findAndCountAll({
    where: {
      [Op.and]: [cat, name, no]
    }
  })
    .then(result => {
      res.status(200).json({
        total_registrations: result.count,
        registrations: result.rows
      });
    })
    .catch(err => {
      console.log(err);
    });
};
