import express from "express";
import protect from "../middleware/authMiddleware.js";
import authorize from "../middleware/roleMiddleware.js";
import { upload } from "../middleware/uploadeMiddleware.js";

import {
    createMillet,
    getMillets
} from "../controllers/milletController.js";

const router = express.Router();

router.get("/", getMillets);

router.post(
    "/add",
    protect,
    authorize("farmer"),
    upload.array("photos", 6),
    createMillet
);

export default router;