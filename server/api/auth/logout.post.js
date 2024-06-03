import { removeRefreshToken } from "~/server/db/refreshTokens"

export default defineEventHandler(async (event) => {
    try {
        const refreshToken = getCookie(event, "refresh_token");
        if (refreshToken)
            await removeRefreshToken(refreshToken)
    } catch (error) { }

    setCookie(event, "refresh_token", "", {
        httpOnly: true,
        sameSite: true
    })

    return {
        code: 200,
        message: 'Done'
    }
})