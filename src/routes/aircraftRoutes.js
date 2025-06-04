const express = require("express");
const { getAircrafts, getAircraftById, createAircraft, updateAircraft, deleteAircraft } = require("../controller/aircraftController");

const router = express.Router();

router.get("/aircrafts", getAircrafts);
router.get("/aircrafts/:id", getAircraftById);
router.post("/aircrafts", createAircraft);
router.put("/aircrafts/:id", updateAircraft);
router.delete("/aircrafts/:id", deleteAircraft);

module.exports = router;