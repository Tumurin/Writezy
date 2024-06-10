import { getCollectionUserId, addArticleToCollection } from "~/server/db/userCollections"

/** 用戶收藏文章 */
export default defineEventHandler(async (event) => {
    console.log("[api/[collectionId]/[articleId]] 用戶收藏文章")
    // 讀取路由參數
    const articleId = getRouterParam(event, 'articleId')
    console.log("[api/[collectionId]/[articleId]]", articleId)
    const collectionId = getRouterParam(event, 'collectionId')
    console.log("[api/[collectionId]/[articleId]]", collectionId)

    const userId = event.context.auth?.user;
    console.log("[api/collection] 用戶id", userId)

    try {
        // 先確認這個 Collection 是否屬於此 User
        const collectionUserId = await getCollectionUserId(collectionId)
        if (!userId.equals(collectionUserId)) {
            return {
                code: 403,
                message: "禁止新增文章到他人收藏"
            }
        }

        const result = await addArticleToCollection(articleId, collectionId)
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