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

  createdAt: {
    type: Date,
    default: Date.now
  },
  friends: [
    {
      id: String,
      name: String,
      status: { type: Boolean, default: false }
    }
  ],
  clubs: [
    {
      id: String,
      name: String
    }
  ],
},

{
  versionKey: false
});

export const User = mongoose.model("User", UserSchema);
