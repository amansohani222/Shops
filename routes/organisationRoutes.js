const express = require("express");
const organisationController = require("../controller/organisationController.js");
const router = express.Router();

//router.param('id', organisationController.checkID);

router.get("/", organisationController.getAllOrganisations);
router.post(
  "/",
  /*organisationController.checkBody,*/ organisationController.createOrganisation
);
// router.get('/:id', organisationController.getorganisation);
router.post("/:id", organisationController.updateOrganisation);
router.delete("/:id", organisationController.deleteOrganisation);

module.exports = router;
