import { Article } from "~/server/models/Article";

export const createArticle = async (authorId, content, tags) => {
    if (!tags) tags = [];
    return Article.create({
        author: authorId,
        content: content,
        tags: tags
    })
};

/** 獲取所有文章(倒序排列) */
export const getAllArticle = async () => {
    return Article.find().populate('author').sort({ publishedDate: -1 });
};

export const getArticleById = async (articleId) => {
    return Article.findById(articleId)
};

export const updateArticleById = async (articleId, update) => {
    return Article.updateOne({
        _id: articleId
    }, update);
};

export const deleteArticleById = async (articleId) => {
    return Article.deleteOne({
        _id: articleId
    })
};

/** 為文章添加新標籤
 *  標籤可以是複數個，以陣列輸入
 */
export const addTagsToArticle = async (articleId, newTags) => {
    return Article.findByIdAndUpdate(
        articleId,
        { $push: { tags: { $each: newTags } } },
        { new: true }
    )
};

// TODO: 透過標籤查找文章