const express = require("express");
const { getPassengers, getPassengerById, createPassenger, updatePassenger, deletePassenger } = require("../controller/passengerController");
const authenticateToken = require("../middlewares/authenticateToken");
const authorizeUserType = require("../middlewares/authorizaUserType");
const router = express.Router();

router.get("/passengers", getPassengers);
router.get("/passengers/:id", authenticateToken, authorizeUserType("regular"), getPassengerById);
router.post("/passengers", authenticateToken, authorizeUserType("admin"), createPassenger);
router.put("/passengers/:id", authenticateToken, authorizeUserType("regular"), updatePassenger);
router.delete("/passengers/:id", authenticateToken, authorizeUserType("admin"), deletePassenger);

module.exports = router;