import { getArticleById, updateArticleById } from "~/server/db/articles"

/** 編輯文章 */
export default defineEventHandler(async (event) => {
    const userId = event.context.auth.user._id
    console.log("[api/article] 編輯文章", userId)
    const body = await readBody(event);
    console.log("[api/article]", body)
    const ArticleId = getRouterParam(event, 'id')
    console.log("[api/article]", ArticleId)

    try {
        const article = await getArticleById(ArticleId)
        if (userId.equals(article.author)) {

            const result = await updateArticleById(ArticleId, {
                content: body.content
            });
            return {
                code: 200,
                message: "成功修改"
            }
        }
        else {
            return {
                code: 400,
                message: "非作者禁止修改文章"
            }
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