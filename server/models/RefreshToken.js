import mongoose from "mongoose";

const TokenSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    createdAt: {
      type: Date,
      required: true,
      default: Date.now,
      expires: 43200, // 12 小時候會自動清除
      select: false,
    },
  },
  {
    timestamps: true,
    collection: "RefreshTokens",
  }
);

export const RefreshToken = mongoose.model("RefreshToken", TokenSchema);
