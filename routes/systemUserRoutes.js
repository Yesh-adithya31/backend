import express from "express";
import { admin, protect } from "../middleware/authMiddleware.js";
import {
  authSystemUser,
  getComplainers,
  getSystemUsers,
  registerSystemUser,
  updateSystemUser,
} from "../controllers/complainerController.js";

const router = express.Router();

// System Users Routes
router.route("/").post(registerSystemUser);
router.post("/login", authSystemUser);
router.route("/allusers").get(protect, admin, getSystemUsers);
router.route("/allregistered").get(protect, admin, getComplainers);
router.route("/profile").put(protect, admin, updateSystemUser);

export default router;
