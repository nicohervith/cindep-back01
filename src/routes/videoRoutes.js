import { Router } from "express";
import upload from "../config/multer-config.js";
import { getVideos, uploadVideo } from "../controllers/video.controller.js"; // Importar la función correctamente

const videoRouter = Router();

videoRouter.post(
  "/upload",
  upload.fields([
    { name: "video", maxCount: 1 },
    { name: "image", maxCount: 1 },
  ]),
  uploadVideo
);

videoRouter.get("/", getVideos);

export default videoRouter;
