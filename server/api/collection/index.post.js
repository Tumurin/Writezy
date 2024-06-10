import { createCollection } from "~/server/db/userCollections"

/** 用戶新增收藏類別 */
export default defineEventHandler(async (event) => {
    console.log("[api/collection] 新增收藏類別")
    const body = await readBody(event)
    console.log("[api/collection] 請求主體", body)
    const userId = event.context.auth?.user._id;
    console.log("[api/collection] 用戶id", userId)
    try {
        const result = await createCollection(userId, body.name)
        return {
            code: 200,
            message: "成功"
        }
    }
    catch (e) {
        console.log(e);
        return {
            code: 400,
            message: "未知的錯誤"
        }
    }
});