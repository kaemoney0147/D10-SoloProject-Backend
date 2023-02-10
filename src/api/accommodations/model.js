import mongoose from "mongoose";
const { Schema, model } = mongoose;

const accomodationsSchema = new Schema(
  {
    name: { type: String, required: true },
    Host: { type: mongoose.Types.ObjectId, ref: "User", required: true },
    description: { type: String, required: false },
    maxGuests: { type: Number, required: true, max: 5 },
    city: { type: String, required: true },
  },
  { timestamps: true }
);

export default model("accommodations", accomodationsSchema);
