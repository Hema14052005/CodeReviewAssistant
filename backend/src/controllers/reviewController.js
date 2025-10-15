import fs from "fs";
import path from "path";
import { analyzeCode } from "../services/llmService.js";

export const handleCodeReview = async (req, res) => {
  try {
    console.log("File received:", req.file);

    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    const filePath = path.join(process.cwd(), req.file.path);
    const code = fs.readFileSync(filePath, "utf-8");

    console.log("File content preview:", code.substring(0, 200));

    const report = await analyzeCode(code);

    console.log("AI report received:", report);

    fs.unlinkSync(filePath); // delete uploaded file

    res.json({ filename: req.file.originalname, report });
  } catch (err) {
    console.error("Error in handleCodeReview:", err);
    res.status(500).json({ error: "Server error" });
  }
};
