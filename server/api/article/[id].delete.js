import { deleteArticleById } from "~/server/db/articles"

/** 刪除文章 */
export default defineEventHandler(async (event) => {
    console.log("[api/article] 刪除文章")
    const ArticleId = getRouterParam(event, 'id')
    console.log("[api/article]", ArticleId)

    try {
        const result = await deleteArticleById(ArticleId);
        return {
            code: 200,
            message: "刪除成功"
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