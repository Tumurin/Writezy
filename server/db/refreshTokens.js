import { RefreshToken } from "~/server/models/RefreshToken";

export const storeRefreshToken = async (token, userId) => {
  return await RefreshToken.create({
    token: token,
    userId: userId,
  });
};
