const express = require("express");
const { getBoardingPasses, getBoardingPassById, createBoardingPass, updateBoardingPass, deleteBoardingPass, selectCartaoEmbarque } = require("../controller/boardingPassController");
const authenticateToken = require("../middlewares/authenticateToken");
const authorizeUserType = require("../middlewares/authorizaUserType");

const router = express.Router();

router.get("/boarding_passes", getBoardingPasses);
router.get("/boarding_passes/custom-query", selectCartaoEmbarque);
router.get("/boarding_passes/:id", authenticateToken, authorizeUserType("regular"), getBoardingPassById);
router.post("/boarding_passes", authenticateToken, authorizeUserType("admin"), createBoardingPass);
router.put("/boarding_passes/:id", authenticateToken, authorizeUserType("regular"), updateBoardingPass);
router.delete("/boarding_passes/:id", authenticateToken, authorizeUserType("admin"), deleteBoardingPass);
module.exports = router;