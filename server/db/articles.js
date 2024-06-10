import { Article } from "~/server/models/Article";

export const createArticle = async (article) => {
    return Article.create(article)
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