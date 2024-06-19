import { required } from "@vee-validate/rules";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ClubSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  description: {
    type: String,
    required: true
  },
  photo:{
    type:String,
    required:true
  },
  members: [
    {
      id: {type:Schema.Types.ObjectId,ref:'User'},
      name: String,
      status: { type: Boolean, default: false }, // 預設未取得社團同意 
      isManager: { type: Boolean, default: false }, // 是否為管理者
    }
  ]
},
  {
    versionKey: false,
    timestamps: true
  }
);

export const Club = mongoose.model("Club", ClubSchema);
