import { getArticleById } from "~/server/db/articles"

/** 查找文章 */
export default defineEventHandler(async (event) => {
    console.log("[api/article] 查找文章")
    const ArticleId = getRouterParam(event, 'id')
    console.log("[api/article]", ArticleId)

    try {
        const article = await getArticleById(ArticleId)
        return {
            code: 200,
            article: article
        }
    } catch (e) {
        console.log(e)
        return {
            code: 400,
            message: "未知的錯誤"
        }
    }
});