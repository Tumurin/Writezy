import { getCollectionUserId, deleteCollection } from "~/server/db/userCollections"

/** 用戶刪除收藏類別 */
export default defineEventHandler(async (event) => {
    console.log("[api/collection] 刪除收藏類別")
    const collectionId = getRouterParam(event, 'collectionId')
    console.log("[api/collection]", collectionId)
    const userId = event.context.auth?.user._id;
    console.log("[api/collection] 用戶id", userId)
    try {
        // 先確認這個 Collection 是否屬於此 User
        const collectionUserId = await getCollectionUserId(collectionId)
        console.log(collectionUserId)
        if (!userId.equals(collectionUserId)) {
            return {
                code: 403,
                message: "禁止刪除他人的收藏"
            }
        }

        const result = await deleteCollection(collectionId)
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