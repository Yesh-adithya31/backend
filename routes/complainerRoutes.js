import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  authComplainer,
  deleteComplainer,
  getComplainerProfile,
  registerComplainer,
  updateComplainerProfile,
} from "../controllers/complainerController.js";

const router = express.Router();

router.route("/").post(registerComplainer);
router.post("/login", authComplainer);
router
  .route("/profile")
  .get(protect, getComplainerProfile)
  .put(protect, updateComplainerProfile);
router.route("/:id").delete(protect, deleteComplainer);

export default router;
