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
    maxlength: 100,
    select: false,
  },
},
{
  versionKey: false
});

export const User = mongoose.model("User", UserSchema);
