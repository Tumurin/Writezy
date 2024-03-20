import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    unique: true,
    require: true,
  },

  password: {
    type: String,
    required: true,
    max: 100,
  },
});

export const User = mongoose.model("User", UserSchema);
