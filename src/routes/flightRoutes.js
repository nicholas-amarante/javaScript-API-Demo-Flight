const express = require("express");
const { getFlights, getFlightById, createFlight, updateFlight, deleteFlight } = require("../controller/flightController");
const authenticateToken = require("../middlewares/authenticateToken");

const router = express.Router();

router.get("/flights", getFlights);
router.get("/flights/:id", getFlightById);
router.post("/flights", authenticateToken, createFlight);
router.put("/flights/:id", authenticateToken, updateFlight);
router.delete("/flights/:id", authenticateToken, deleteFlight);

module.exports = router;