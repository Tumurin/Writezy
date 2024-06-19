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
  photo: {
    type: String,
    default:"https://placehold.co/32"
  },
  friends: [
    {
      id: {type:Schema.Types.ObjectId,ref:'User'},
      name: String,
      status: { type: Boolean, default: false }
    }
  ],
  clubs: [
    {
      id: {type:Schema.Types.ObjectId,ref:'Club'},
      name: String
    }
  ],
},

{
  versionKey: false
});

export const User = mongoose.model("User", UserSchema);
