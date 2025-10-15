// src/server.js

// ---------------------- Imports ----------------------
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";
import reviewRoutes from "./routes/reviewRoutes.js";

// ---------------------- Environment ----------------------
dotenv.config();

// ---------------------- Ensure Uploads Folder Exists ----------------------
const uploadDir = "uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// ---------------------- Express App Setup ----------------------
const app = express();
app.use(cors());
app.use(express.json());

// ---------------------- Routes ----------------------
app.use("/api/review", reviewRoutes);

// ---------------------- Start Server ----------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
