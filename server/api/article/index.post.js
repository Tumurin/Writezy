import { createArticle } from "~/server/db/articles"

/** 用戶發送文章 */
export default defineEventHandler(async (event) => {
    console.log("[api/article] 新增文章")
    const body = await readBody(event)
    console.log("[api/article] 請求主體", body)
    const author = event.context.auth?.user;
    console.log("[api/article] 作者id", author.id)
    try {
        const regex = /#[\w\u4e00-\u9fa5]+/g;
        const tags = body.content.match(regex);
        console.log(tags);

        const result = await createArticle(author.id, body.content, tags)
        return {
            code: 200,
            message: "成功發布貼文"
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