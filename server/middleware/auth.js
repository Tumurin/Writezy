// import UrlPattern from "url-pattern"
import { getUserById } from '~/server/db/users.js'
import { decodeAccessToken } from "../utils/jwt.js"

export default defineEventHandler(async (event) => {
    const endpoints = [
        '^/api/auth/user',
        '^/api/article',
    ]
    const isHandledByThisMiddleware = endpoints.some(endopoint => {
        const regex = new RegExp(endopoint);
        return regex.test(event.node.req.url)
    })
    console.log(`${event.node.req.url}讀取 jwt:${isHandledByThisMiddleware}`)

    if (!isHandledByThisMiddleware) {
        return
    }

    // 解析請求中的驗證資訊
    const token = event.node.req.headers['authorization']?.split(' ')[1]
    console.log("[middleware/auth] jwt 內容:", token)
    const decoded = decodeAccessToken(token)
    console.log("[middleware/auth] 解析 jwt:", decoded)
    if (!decoded) {
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: 'Unauthorized'
        }))
    }

    try {
        const userId = decoded.userId
        console.log("[middleware/auth] 用戶id:", userId)
        // 資料庫查找該用戶 id，將用戶資料帶到 api 去
        const user = await getUserById(userId);
        console.log("[middleware/auth] 用戶資料:", user)
        event.context.auth = { user }
    } catch (error) {
        return
    }

})