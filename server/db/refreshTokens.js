import { RefreshToken } from "~/server/models/RefreshToken";

export const storeRefreshToken = async (token, userId) => {
  return await RefreshToken.create({
    token: token,
    userId: userId,
  });
};

export const getRefreshToken = async (token) => {
  return await RefreshToken.findOne({ token: token }).exec();
}

export const removeRefreshToken = async (token) => {
  return await RefreshToken.deleteOne({
    token: token
  }).exec();
}