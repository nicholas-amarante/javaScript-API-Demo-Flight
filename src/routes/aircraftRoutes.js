const express = require("express");
const { getAircrafts, getAircraftById, createAircraft, updateAircraft, deleteAircraft } = require("../controller/aircraftController");
const authenticateToken = require("../middlewares/authenticateToken");
const authorizeUserType = require("../middlewares/authorizaUserType");

const router = express.Router();

router.get("/aircrafts", getAircrafts);
router.get("/aircrafts/:id", authenticateToken, authorizeUserType("regular"), getAircraftById);
router.post("/aircrafts", authenticateToken, authorizeUserType("admin"), createAircraft);
router.put("/aircrafts/:id", authenticateToken, authorizeUserType("regular"), updateAircraft);
router.delete("/aircrafts/:id", authenticateToken, authorizeUserType("admin"), deleteAircraft);

module.exports = router;