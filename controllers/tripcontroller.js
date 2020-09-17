let router = require("express").Router();
let Trip = require("../db").import("../models/trip");
let validateSession = require("../middleware/validate-session");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

router.post("/", validateSession, (req, res) => {
  const tripEntry = {
    fromLocation: req.body.trip.fromLocation,
    toLocation: req.body.trip.toLocation,
    fromDate: req.body.trip.fromDate,
    toDate: req.body.trip.toDate,
    travelType: req.body.trip.travelType,
    tripType: req.body.trip.tripType,
    userId: req.user.id
  };

  Trip.create(tripEntry)
    .then((trip) => res.status(200).json(trip))
    .catch((err) => res.status(500).json({ error: err }));
});

router.delete("/:id", validateSession, (req, res) => {
  const query = { where: { id: req.params.id } };
  Trip.destroy(query)
    .then((recordsChanged) => {
      if (recordsChanged !== 0) {
        res.status(200).json({
          message: "trip deleted!",
        });
      } else {
        res.status(200).json({
          message: "trip not found",
        });
      }
    })
    .catch((err) => res.status(500).json({ error: err }));
});

router.put("/:id", validateSession, (req, res) => {
  const query = { where: { id: req.params.id } };
  const tripEntry = {
    fromLocation: req.body.trip.fromLocation,
    toLocation: req.body.trip.toLocation,
    fromDate: req.body.trip.fromDate,
    toDate: req.body.trip.toDate,
    travelType: req.body.trip.travelType,
    tripType: req.body.trip.tripType,
    userId: req.user.id
  };

  Trip.update(tripEntry, query)
    .then((recordsChanged) => {
        console.log(recordsChanged)
      if (recordsChanged[0] !== 0 ) {
        res.status(200).json({
          message: "trip updated!",
        });
      } else {
        res.status(200).json({
          message: "trip not found",
        });
      }
    })
    .catch((err) => res.status(500).json({ error: err }));
});

router.get("/", validateSession, (req, res) => {
  /* let userId = req.user.id; */
  Trip.findAll( /* {where : { userId: userId }} */ )
    .then((trips) => res.status(200).json(trips))
    .catch((err) => res.status(500).json({ error: err }));
});

router.get("/:id", validateSession, (req, res) => {
  const query = { where: { id: req.params.id } };

  Trip.findOne(query)
    .then((trip) => res.status(200).json(trip))
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
