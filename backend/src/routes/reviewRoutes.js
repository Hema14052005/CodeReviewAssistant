import express from "express";
import multer from "multer";
import { handleCodeReview } from "../controllers/reviewController.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("file"), handleCodeReview);

export default router;
