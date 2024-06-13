import Video from "../models/video.model.js";

export const uploadVideo = async (req, res) => {
  try {
    const { title, description, tags } = req.body;
    const videoUrl = req.files.video[0].path;
    const imageUrl = req.files.image[0].path;

    const newVideo = new Video({
      title,
      description,
      tags,
      videoUrl,
      imageUrl,
    });
    console.log("newVideo", newVideo);
    await newVideo.save();

    res.status(201).json({ message: "Video uploaded successfully" });
  } catch (error) {
    console.error("Error uploading video:", error);
    res.status(500).json({ error: "Failed to upload video" });
  }
};

export const getVideos = async (req, res) => {
  try {
    // Obtener la lista de videos desde la base de datos
    const videos = await Video.find();

    res.json(videos);
  } catch (error) {
    console.error("Error getting videos:", error);
    res.status(500).json({ error: "Failed to get videos" });
  }
};
