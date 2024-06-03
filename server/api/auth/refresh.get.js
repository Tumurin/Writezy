import { decodeRefreshToken, generateTokens } from "~/server/utils/jwt"
import { getRefreshToken } from "~/server/db/refreshTokens";
import { getUserById } from "~/server/db/users";

/** 透過 refresh token 刷新 access token */
export default defineEventHandler(async (event) => {
    // 查找 cookie 是否存在 refresh token
    const refreshToken_fromCookie = getCookie(event, "refresh_token");

    if (!refreshToken_fromCookie) {
        console.log(`[api/auth/refresh]:查無 refresh_token`)
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: "Unauthorized",
            message: 'cookie 沒有 refresh token'
        }))
    }

    try {
        // 查找資料庫是否存在 refresh token
        const refreshToken = await getRefreshToken(refreshToken_fromCookie)

        if (!refreshToken) {
            return sendError(event, createError({
                statusCode: 401,
                statusMessage: 'Unauthorized',
                message: "查無此 refresh token"
            }))
        }

        // 產生新的 access token 給使用者
        const jwtInfo = decodeRefreshToken(refreshToken_fromCookie)
        if (!jwtInfo) return sendError(event, createError({
            statusCode: 500,
            statusMessage: 'Internal Server Error'
        }))

        console.log(`[api/auth/refresh] jwt 解析結果`, jwtInfo);

        const user = await getUserById(jwtInfo.userId);
        console.log(`[api/auth/refresh] 用戶資料查找結果`, user);

        if (!user) {
            return sendError(event, createError({
                statusCode: 500,
                statusMessage: 'Internal Server Error'
            }))
        }

        const { accessToken } = generateTokens(user)

        return { access_token: accessToken }

    } catch (e) {
        console.log(e);
        return sendError(event, createError({
            statusCode: 500,
            statusMessage: 'Internal Server Error'
        }))
    }
});