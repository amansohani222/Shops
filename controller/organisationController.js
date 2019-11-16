const Organisation = require("../models/organisation.js");

// exports.checkID = (req, res, next, val) => {
//   if (Number(val) > organisations.length - 1) {
//     console.log(val);
//     return res.status(404).json({
//       status: 'failed',
//       message: 'Invalid ID'
//     });
//   }
//   next();
// };

// exports.checkBody = (req, res, next) => {
//   if (!req.body.name || !req.body.price) {
//     return res.status(400).json({
//       status: 'failed',
//       message: 'Incomplete Data'
//     });
//   }
//   next();
// };

exports.createOrganisation = (req, res) => {
  const newOrganisation = req.body;
  newOrganisation.active = true;
  Organisation.create(newOrganisation)
    .then(organisation => {
      res.redirect("/api/v1/organisations");
    })
    .catch(err => {
      console.log(err);
    });
};
// exports.getorganisation = (req, res) => {
//   let organisation = findorganisation(organisations, req.params.id);
//   res.status(200).json({
//     status: 'sucesss',
//     data: { organisation: organisation }
//   });
// };
exports.updateOrganisation = (req, res) => {
  var org = {};
  console.log("Update Rout Hitted!!!!");
  if (req.body.id) {
    org.id = req.body.id;
  }
  if (req.body.org_name) {
    org.org_name = req.body.org_name;
  }
  if (req.body.contact_person) {
    org.contact_person = req.body.contact_person;
  }
  if (req.body.contact_no) {
    org.contact_no = req.body.contact_no;
  }
  if (req.body.org_address) {
    org.org_address = req.body.org_address;
  }
  if (req.body.reg_no) {
    org.reg_no = req.body.reg_no;
  }
  if (req.body.location_url) {
    org.location_url = req.body.location_url;
  }
  if (req.body.organisation_catogery) {
    org.organisation_catogery = req.body.organisation_catogery;
  }
  console.log(org);
  Organisation.update(org, { where: { id: req.params.id } })
    .then(count => {
      console.log("Update Successfull :" + count);
      res.redirect("/api/v1/organisations");
    })
    .catch(err => {
      console.log(err);
    });
};
exports.deleteOrganisation = (req, res) => {
  Organisation.update({ active: false }, { where: { id: req.params.id } })
    .then(count => {
      console.log("Delete Successfull :" + count);
      res.redirect("/api/v1/organisations");
    })
    .catch(err => {
      console.log(err);
      res.status(404).json({ message: "Error in deleting" });
    });
};
exports.getAllOrganisations = (req, res) => {
  let index = req.query.index;
  if (index == null) {
    index = 0;
  } else {
    index = Number(index);
  }
  Organisation.findAll({ offset: index, limit: 2, where: { active: true } })
    .then(foundOrganisations => {
      res.status(200).json({
        organisations: foundOrganisations
      });
    })
    .catch(err => {
      console.log(err);
      res.status(404).json({ message: "Not Found" });
    });
};
