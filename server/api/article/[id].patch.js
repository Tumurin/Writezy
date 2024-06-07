import { updateArticleById } from "~/server/db/articles"

/** 編輯文章 */
export default defineEventHandler(async (event) => {
    console.log("[api/article] 編輯文章")
    const body = await readBody(event);
    console.log("[api/article]", body.update)
    const ArticleId = getRouterParam(event, 'id')
    console.log("[api/article]", ArticleId)

    try {
        const result = await updateArticleById(ArticleId, body.update);
        return {
            code: 200,
            message: "成功修改"
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