import { getCollectionsByUserId } from "~/server/db/userCollections"

/** 用戶讀取收藏類別清單 */
export default defineEventHandler(async (event) => {
    console.log("[api/collection] 用戶讀取收藏清單")
    const userId = event.context.auth?.user._id;
    console.log("[api/collection] 用戶id", userId)
    try {
        const result = await getCollectionsByUserId(userId)
        return {
            code: 200,
            message: "成功",
            collections: result,
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