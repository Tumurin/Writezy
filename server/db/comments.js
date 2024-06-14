import mongoose from "mongoose";
import { Comment } from "~/server/models/Comment";

export const createComment = async (author, articleId, content) => {
    console.log(author, articleId, content);
    return Comment.create({
        author: author,
        content: content,
        article: articleId,
    })
};

export const getCommentsByArticleId = async (articleId) => {
    console.log(articleId);
    return Comment.find({
        article: articleId,
    })
};

export const getCommentByCommentId = async (commentId) => {
    console.log(commentId);
    return Comment.findById(commentId)

};

export const updateCommentById = async (commentId, update) => {
    return Comment.updateOne({
        _id: commentId
    }, update);
};

export const deleteCommentById = async (commentId) => {
    return Comment.deleteOne({
        _id: commentId
    })
};