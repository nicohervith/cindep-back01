import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin", "creator"], // Define los roles permitidos
      default: "user", // Valor por defecto
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
