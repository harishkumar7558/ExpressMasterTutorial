import express from "express";
import { createUsers, fetchAllUsers } from "../controller/user.controller.mjs";

const router = express.Router();

router.get("/",fetchAllUsers);
router.post("/",createUsers);

export default router;