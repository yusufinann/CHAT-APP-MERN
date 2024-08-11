import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

const router = express.Router();

// Define your routes using `router.get()` instead of `app.get()`
router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

export default router;
