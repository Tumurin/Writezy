import { deleteCommentById } from "~/server/db/comments"

/** 刪除文章 */
export default defineEventHandler(async (event) => {
    console.log("[api/comment] 刪除評論")

    const commentId = getRouterParam(event, 'commentId')
    console.log("[api/comment] CommentId: ", commentId);

    try {
        const result = await deleteCommentById(commentId);
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