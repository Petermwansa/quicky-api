
import express from "express";
import auth from "../middleware/auth.js";
import { quickyData } from "../services/quickyService.js";

const router = express.Router();

router.post("/", auth, async (req, res) => {
  try {
    const enrichedData = await quickyData(req.body);
    res.json({ success: true, data: enrichedData });
  } catch (err) {
    res.status(500).json({ error: "Failed to enrich data" });
  }
});

export default router;

