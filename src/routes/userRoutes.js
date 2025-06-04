const express=require("express");
const {getUsers, getUserById, createUser, updateUser, deleteUser}=require("../controller/userController");
const authenticateToken = require("../middlewares/authenticateToken");
const router=express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users", authenticateToken, createUser);
router.put("/users/:id", authenticateToken, updateUser);
router.delete("/users/:id", authenticateToken, deleteUser);
module.exports=router;