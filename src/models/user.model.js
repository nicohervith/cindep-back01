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
      type: [String],
      enum: ["user", "admin", "creator"],
      default: ["user"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
