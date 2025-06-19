const express=require("express");
const {getUsers, getUserById, createUser, updateUser, deleteUser}=require("../controller/userController");
const authenticateToken = require("../middlewares/authenticateToken");
const authorizaUserType=require("../middlewares/authorizaUserType");
const router=express.Router();

router.get("/users", authenticateToken, authorizaUserType("admin"), getUsers);
router.get("/users/:id", authenticateToken, authorizaUserType("admin"), getUserById);
router.post("/users", authenticateToken, authorizaUserType("admin"), createUser);
router.put("/users/:id", authenticateToken, authorizaUserType("regular"), updateUser);
router.delete("/users/:id", authenticateToken, authorizaUserType("admin"), deleteUser);
module.exports=router;