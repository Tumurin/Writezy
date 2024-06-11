// 點讚功能
import { Article } from '~/server/models/Article'
import { Comment } from '~/server/models/Comment';


export default defineEventHandler(async (event) => {
    console.log("[api/like] 點讚")
    const body = await readBody(event);
    console.log("[api/like] 請求主體", body)
    const { action, articleId, userId, commentId } = body;
    
    if (action !== 'like') {
        return {
            code: 400,
            status: false,
            message: 'Invalid action',
        };
    }

    try {
        let target;
        if (commentId) {
            target = await Comment.findById(commentId);
            if (!target) {
                return {
                    code: 400,
                    status: false,
                    message: 'Comment not found',
                };
            }
        } else {
            target = await Article.findById(articleId);
            if (!target) {
                return {
                    code: 400,
                    status: false,
                    message: 'Article not found',
                };
            }
        }

        // Check if the user has already liked this target
        if (target.likedBy.includes(userId)) {
            return {
                code: 400,
                status: false,
                message: commentId ? 'Comment already liked' : 'Article already liked',
            };
        }

        // Update the like count and likedBy array
        target.likes += 1;
        target.likedBy.push(userId);
        await target.save();

        return {
            code: 200,
            status: true,
            message: commentId ? 'Comment liked' : 'Article liked',
            data: {
                articleId: articleId,
                userId: userId,
                like_count: target.likes,
                commentId: commentId,
            },
        };
    } catch (error) {
        return {
            code: 400,
            status: false,
            message: 'An error occurred',
        };
    }
});
