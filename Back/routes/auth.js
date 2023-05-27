import express from "express";
import { register, login, logout } from "../controller/auth.js";

const router = express.Router();
// login and gaining cookies from api
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

export default router;
