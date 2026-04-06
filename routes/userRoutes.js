import express from "express";
import protect from "../middleware/authMiddleware.js";

import {
getUserProfile,
updateUserProfile,
getAllUsers
} from "../controllers/userController.js";

const router = express.Router();

router.get("/profile", protect, getUserProfile);

router.put("/profile", protect, updateUserProfile);

router.get("/", protect, getAllUsers);

export default router;