import mongoose from "mongoose";

const Qoute = mongoose.Schema(
  {
    quote: String,
    author: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Qoute || mongoose.model("Qoute", Qoute);
