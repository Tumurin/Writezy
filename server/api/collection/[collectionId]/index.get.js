import { getCollectionUserId, getCollectedArticles } from "~/server/db/userCollections"

/** 用戶讀取單一收藏類別下的文章 */
export default defineEventHandler(async (event) => {
    console.log("[api/collection] 獲取收藏類別下的文章")
    const collectionId = getRouterParam(event, 'collectionId')
    console.log("[api/collection]", collectionId)
    const userId = event.context.auth?.user._id;
    console.log("[api/collection] 用戶id", userId)
    try {
        // 先確認這個 Collection 是否屬於此 User
        const collectionUserId = await getCollectionUserId(collectionId)
        if (!userId.equals(collectionUserId)) {
            return {
                code: 403,
                message: "禁止讀取他人的收藏"
            }
        }

        const data = await getCollectedArticles(collectionId)
        console.log(data)
        const result = data.map((item) => {
            console.log(item)
            return item.articleId
        })
        return {
            code: 200,
            message: "成功",
            articles: result
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