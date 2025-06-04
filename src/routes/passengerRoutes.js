const express = require("express");
const { getPassengers, getPassengerById, createPassenger, updatePassenger, deletePassenger } = require("../controller/passengerController");
const authenticateToken = require("../middlewares/authenticateToken");
const router = express.Router();

router.get("/passengers", getPassengers);
router.get("/passengers/:id", getPassengerById);
router.post("/passengers", authenticateToken, createPassenger);
router.put("/passengers/:id", authenticateToken, updatePassenger);
router.delete("/passengers/:id", authenticateToken, deletePassenger);

module.exports = router;