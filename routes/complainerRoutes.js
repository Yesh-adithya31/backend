import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  authComplainer,
  checkOTP,
  deleteComplainer,
  getComplainerProfile,
  getComplaintHistory,
  makeComplaint,
  registerComplainer,
  updateComplainerProfile,
} from "../controllers/complainerController.js";

const router = express.Router();

// Complainer Routes
router.route("/").post(registerComplainer);
router.post("/login", authComplainer);
router.route("/otp").post(protect, checkOTP);
router.route("/makeComplaint").post(protect, makeComplaint);
router.route("/history").get(protect, getComplaintHistory);
router
  .route("/profile")
  .get(protect, getComplainerProfile)
  .put(protect, updateComplainerProfile);
router.route("/:id").delete(protect, deleteComplainer);

export default router;
