import { createComment } from "~/server/db/comments"

export default defineEventHandler(async (event) => {
    console.log("[api/comment] 張貼文章評論")
    const body = await readBody(event)
    const author = event.context.auth?.user;

    try {
        const comment = await createComment(
            author,
            body.articleId,
            body.content)
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