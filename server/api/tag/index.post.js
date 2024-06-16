import { addToDefaultTagCollection } from "~/server/db/tags"

/** 用戶收藏標籤到預設收藏中 */
export default defineEventHandler(async (event) => {
    console.log("[api/tag/] 收藏一個標籤")
    const body = await readBody(event)
    console.log("[api/tag/] 請求主體", body)
    const userId = event.context.auth?.user.id;
    console.log("[api/tag/] 用戶id", userId)
    try {
        const tag = body.tag;
        const result = await addToDefaultTagCollection(userId, tag)
        return {
            code: 200,
            message: "收藏標籤成功"
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