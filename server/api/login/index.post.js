import { getUserByEmail } from "~/server/db/user";
import { storeRefreshToken } from "~/server/db/refreshTokens";

import { generateTokens } from "~/server/utils/jwt";

import bcrypt from "bcrypt";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { email, password } = body;
  console.log("登入", email, password);

  if (!email || !password)
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Bad Request",
        message: "缺少帳號或密碼",
      })
    );

  // 資料庫查找對應的用戶
  const user = await getUserByEmail(email);
  console.log("資料庫查詢結果:", user);
  if (!user)
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Bad Request",
        message: "查無此用戶",
      })
    );

  // 檢查密碼正確性
  const isPasswordMatched = await bcrypt.compare(password, user.password);
  console.log("密碼正確？:", isPasswordMatched);
  if (!isPasswordMatched)
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Bad Request",
        message: "密碼錯誤",
      })
    );

  const { accessToken, refreshToken } = generateTokens(user);
  console.log("產生 JWT:", accessToken, refreshToken);

  // 資料庫跟 Cookie 都存一份，重連時核對
  await storeRefreshToken(refreshToken, user.id);
  setCookie(event, "refresh_token", refreshToken, {
    httpOnly: true,
    sameSite: true,
  });

  return {
    code: 200,
    access_token: accessToken,
  };
});
