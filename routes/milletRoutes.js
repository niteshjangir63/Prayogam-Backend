import express from "express";
import protect from "../middleware/authMiddleware.js";
import authorize from "../middleware/roleMiddleware.js";

import {
createMillet,
getMillets
} from "../controllers/milletController.js";

const router = express.Router();

router.get("/", getMillets);

router.post(
"/",
protect,
authorize("farmer"),
createMillet
);

export default router;