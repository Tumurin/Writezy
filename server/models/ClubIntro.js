import { required } from "@vee-validate/rules";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ClubIntroSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const ClubIntro = mongoose.model("ClubIntro", ClubIntroSchema);
