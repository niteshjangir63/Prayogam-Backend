import mongoose from "mongoose";
import dotenv from "dotenv";
import Millet from "./models/Millet.js";
import millets from "./utils/seedMillets.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

await Millet.deleteMany();

await Millet.insertMany(millets);

console.log("Sample millets inserted");

process.exit();