import { createTagCollection } from "~/server/db/tags"

/** 用戶創建一個新的標籤收藏集合 */
export default defineEventHandler(async (event) => {
    console.log("[api/tagCollection/] 用戶創建一個新的標籤收藏集合")
    const body = await readBody(event)
    console.log("[api/tagCollection/] 請求主體", body)
    const userId = event.context.auth?.user.id;
    console.log("[api/tagCollection/] 用戶id", userId)
    try {
        const collectionName = body.collectionName;
        const result = await createTagCollection(userId, collectionName)
        return {
            code: 200,
            message: "成功創建標籤收藏集合"
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