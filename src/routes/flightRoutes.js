const express = require("express");
const { getFlights, getFlightById, createFlight, updateFlight, deleteFlight } = require("../controller/flightController");
const authenticateToken = require("../middlewares/authenticateToken");
const authorizeUserType = require("../middlewares/authorizaUserType");

const router = express.Router();

router.get("/flights", getFlights);
router.get("/flights/:id", authenticateToken, authorizeUserType("regular"), getFlightById);
router.post("/flights", authenticateToken, authorizeUserType("admin"), createFlight);
router.put("/flights/:id", authenticateToken, authorizeUserType("regular"), updateFlight);
router.delete("/flights/:id", authenticateToken, authorizeUserType("admin"), deleteFlight);
module.exports = router;