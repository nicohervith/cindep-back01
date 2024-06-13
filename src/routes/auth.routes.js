import { Router } from "express";
import {
  login,
  logout,
  register,
  verifyToken,
} from "../controllers/auth.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { loginSchema, registerSchema } from "../schemas/auth.schema.js";
import { getVideos } from "../controllers/video.controller.js";

const router = Router();

router.post("/register", validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema), login);
router.get("/verify", verifyToken);
router.post("/logout", verifyToken, logout);

router.get("/videos", getVideos);

export default router;
