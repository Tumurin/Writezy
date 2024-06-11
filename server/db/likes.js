import { Article } from '~/server/models/Article'
import { Comment } from '~/server/models/Comment';

/** 收回文章讚 */
export const handleDislikeArticle = async (articleId, userId) => {
  const article = await Article.findById(articleId);

  if (!article) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Article not found',
    });
  }

  const userIndex = article.likedBy.indexOf(userId);

  if (userIndex === -1) {
    return { message: 'User has not liked this article' };
  }

  article.likedBy.splice(userIndex, 1);
  article.likes -= 1;

  await article.save();

  return { 
    message: `Disliked article with ID ${articleId}`,
    currentLikes: article.likes,
  };
};

/** 收回留言讚 */
export const handleDislikeComment = async (commentId, userId) => {
  const comment = await Comment.findById(commentId);

  if (!comment) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Comment not found',
    });
  }

  const userIndex = comment.likedBy.indexOf(userId);

  if (userIndex === -1) {
    return { message: 'User has not liked this comment' };
  }

  comment.likedBy.splice(userIndex, 1);
  comment.likes -= 1;

  await comment.save();

  return { 
    message: `Disliked comment with ID ${commentId}`,
    currentLikes: comment.likes,
  };
};