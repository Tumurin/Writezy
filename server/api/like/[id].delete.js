// 收回讚功能

import { handleDislikeArticle, handleDislikeComment } from "~/server/db/likes"

export default defineEventHandler(async (event) => {
  console.log("[api/like] 收回按讚")
  const query = getQuery(event);
  console.log('[api/like] query參數', query)
  const { articleId, userId, commentId } = query;

  if (!articleId || !userId) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Article ID and User ID are required',
    });
  }

  if (commentId) {
    // Handle dislike for comment
    return await handleDislikeComment(commentId, userId);
  } else {
    // Handle dislike for article
    return await handleDislikeArticle(articleId, userId);
  }
});
