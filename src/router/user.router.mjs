import express from "express";
import { createUsers, deleteUserId, fetchAllUsers, getEmailFromUser, getUserId, updateUserId } from "../controller/user.controller.mjs";
import { login } from "../controller/Login.controller.mjs";

const router = express.Router();

router.get("/",fetchAllUsers);
router.post("/",createUsers);
router.get("/login",login);
router.get("email/:email",getEmailFromUser);
router.get("/:id",getUserId);
router.put("/:id",updateUserId);
router.delete("/:id",deleteUserId);


export default router; 