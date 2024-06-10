import { UserCollection } from "~/server/models/UserCollection";
import { Collection } from "~/server/models/Collection";

import mongoose from "mongoose"

/** 用戶新增新的收藏分類 */
export const createCollection = async (userId, name) => {
    console.log(userId, name)
    return UserCollection.create({
        userId,
        name: name
    })
};

/** 讀取用戶的 Collection 清單 */
export const getCollectionsByUserId = async (userId) => {
    return UserCollection.find({
        userId
    }, {
        name: 1
    })
}

/** 獲取 Collection 屬於哪個用戶 */
export const getCollectionUserId = async (collectionId) => {
    return (await UserCollection.findById(
        collectionId
    )).userId
}

/** 用戶將文章新增至收藏分類
 *  api 應該禁止用戶新增他人的收藏分類
 */
export const addArticleToCollection = async (articleId, userCollectionId) => {
    return Collection.create({
        articleId,
        userCollectionId
    })
};

/** 用戶刪除分類
 *  api 應該禁止用戶刪除他人的收藏分類
 */
export const deleteCollection = async (userCollectionId) => {
    return UserCollection.deleteOne({
        _id: userCollectionId
    })
};

/** 用戶解除收藏文章
 *  api 應該禁止用戶解除他人收藏的文章
 */
export const uncollectArticle = async (userCollectionId, articleId) => {
    return Collection.deleteOne({
        userCollectionId,
        articleId
    });
};

/** 獲取該用戶分類的所有收藏文章 */
export const getCollectedArticles = async (userCollectionId) => {
    return Collection.find({
        userCollectionId
    }, {
        articleId: 1,
    }).populate("articleId");
};