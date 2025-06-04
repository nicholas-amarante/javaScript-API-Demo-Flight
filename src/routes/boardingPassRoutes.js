const express = require("express");
const { getBoardingPasses, getBoardingPassById, createBoardingPass, updateBoardingPass, deleteBoardingPass } = require("../controller/boardingPassController");
const authenticateToken = require("../middlewares/authenticateToken");

const router = express.Router();

router.get("/boarding_passes", getBoardingPasses);
router.get("/boarding_passes/:id", getBoardingPassById);
router.post("/boarding_passes", authenticateToken, createBoardingPass);
router.put("/boarding_passes/:id", authenticateToken, updateBoardingPass);
router.delete("/boarding_passes/:id", authenticateToken, deleteBoardingPass);

module.exports = router;