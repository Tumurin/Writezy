import { Article } from '~/server/models/Article';
import { Like } from '~/server/models/Like';

export default defineEventHandler(async (event) => {
    console.log("[api/like] 點讚")
    const body = await readBody(event)
    console.log("[api/like] 請求主體", body)
    const { action, articleId, userId, commentId } = body;

    if (!['like', 'dislike'].includes(action)) {
        return {
        status: false,
        message: 'Invalid action',
        };
    }

    if (!articleId || !userId) {
        return {
        status: false,
        message: 'articleId and userId are required',
        };
    }

    try {
        // const article = await Article.findById(articleId).populate('comments');
        const article = await Article.findById(articleId);
        if (!article) {
            return {
                status: false,
                message: 'Article not found',
            };
        }

        if (commentId) {
            const comment = article.comments.id(commentId);
            if (!comment) {
                return {
                    status: false,
                    message: 'Comment not found',
                };
            }

            if (action === 'like') {
                if (comment.likedBy.includes(userId)) {
                    return {
                        status: false,
                        message: 'User has already liked this comment',
                    };
                }
                comment.likes = (comment.likes || 0) + 1;
                comment.likedBy.push(userId);
            } else if (action === 'dislike') {
                if (!comment.likedBy.includes(userId)) {
                return {
                    status: false,
                    message: 'User has not liked this comment',
                };
                }
                comment.likes = Math.max((comment.likes || 1) - 1, 0);
                comment.likedBy.pull(userId);
            }

            await article.save();

            return {
                code: 200,
                status: true,
                message: action === 'like' ? 'Comment liked' : 'Comment dislike removed',
                data: {
                    articleId,
                    userId,
                    like_count: comment.likes,
                    commentId,
                },
            };
        } else {
            if (action === 'like') {
                if (article.likedBy.includes(userId)) {
                    return {
                        status: false,
                        message: 'User has already liked this article',
                    };
                }

                const newLike = new Like({
                    action,
                    articleId,
                    userId,
                });

                // 儲存
                await newLike.save();

                article.likes += 1;
                article.likedBy.push(userId);
            } else if (action === 'dislike') {
                if (!article.likedBy.includes(userId)) {
                return {
                    status: false,
                    message: 'User has not liked this article',
                };
                }
                article.likes = Math.max(article.likes - 1, 0);
                article.likedBy.pull(userId);
            }

            await article.save();

            return {
                code: 200,
                status: true,
                message: action === 'like' ? 'Article liked' : 'Article dislike removed',
                data: {
                articleId,
                userId,
                like_count: article.likes,
                },
            };
        }
    } catch (error) {
        return {
        status: false,
        message: error.message,
        };
    }
});
