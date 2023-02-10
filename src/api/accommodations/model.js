import mongoose from "mongoose";
const { Schema, model } = mongoose;

const accomodationsSchema = new Schema(
  {
    name: { type: String, required: true },
    host: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    description: { type: String, required: true },
    maxGuests: { type: Number, required: true, max: 5 },
    city: { type: String, required: true },
  },
  { timestamps: true }
);

export default model("accommodations", accomodationsSchema);
