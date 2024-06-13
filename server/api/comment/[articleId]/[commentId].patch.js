import { getCommentByCommentId, updateCommentById } from "~/server/db/comments"

/** 編輯評論 */
export default defineEventHandler(async (event) => {
    const userId = event.context.auth.user._id
    console.log("[api/comment] 編輯評論", userId)
    const body = await readBody(event);
    console.log("[api/comment] Body:", body)
    const commentId = getRouterParam(event, 'commentId')
    console.log("[api/comment] CommentId: ", commentId)

    try {
        const comment = await getCommentByCommentId(commentId)
        console.log(userId, comment, comment.author)
        if (userId.equals(comment.author)) {

            const result = await updateCommentById(commentId, {
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
                message: "非作者禁止修改評論"
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