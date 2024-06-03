import { getUserByEmail, getUserById } from "~/server/db/users";
import { storeRefreshToken } from "~/server/db/refreshTokens";

import { generateTokens } from "~/server/utils/jwt.js"

import bcrypt from "bcrypt";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { email, password } = body;
    console.log("[server/api/login]", email, password);

    if (!email || !password) return sendError(event, createError({
        statusCode: 400,
        statusMessage: "Bad Request",
        message: "缺少帳號或密碼"
    }))

    // 資料庫查找對應的用戶
    const user = await getUserByEmail(email);
    console.log("[server/api/login] 資料庫查詢結果:", user);
    if (!user) return sendError(event, createError({
        statusCode: 400,
        statusMessage: "Bad Request",
        message: "查無此用戶"
    }))

    // 檢查密碼正確性
    const isPasswordMatched = await bcrypt.compare(password, user.password)
    console.log("[server/api/login] 密碼正確？:", isPasswordMatched);
    if (!isPasswordMatched) return sendError(event, createError({
        statusCode: 400,
        statusMessage: "Bad Request",
        message: "密碼錯誤"
    }))

    const { accessToken, refreshToken } = generateTokens(user);
    console.log("[server/api/login] 產生 JWT:", accessToken, refreshToken);
    // 儲存登入過的 Token 到資料庫
    await storeRefreshToken(refreshToken, user.id)

    // refresh token 存 cookie
    setCookie(event, "refresh_token", refreshToken, {
        httpOnly: true,
        sameSite: true
    })

    const userWithoutConfidential = await getUserById(user.id);
    console.log(`[server/api/login] 用戶資料`, userWithoutConfidential)

    return {
        code: 200,
        access_token: accessToken,
        user: userWithoutConfidential
    }
});
