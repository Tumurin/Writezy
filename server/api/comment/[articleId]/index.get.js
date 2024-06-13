import { getCommentsByArticleId } from "~/server/db/comments"

/** 查找文章 */
export default defineEventHandler(async (event) => {
    console.log("[api/comment] 查找文章評論")
    const articleId = getRouterParam(event, 'articleId')
    console.log("[api/articleId]", articleId)

    try {
        const comment = await getCommentsByArticleId(articleId)
        return {
            code: 200,
            article: comment
        }
    } catch (e) {
        console.log(e)
        return {
            code: 400,
            message: "未知的錯誤"
        }
    }
});