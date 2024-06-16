import { TagCollection } from "~/server/models/TagCollection";

/** 建立一個新的標籤集合 */
export const createTagCollection = async (userId, collectionName) => {
    if (!tags) tags = [];
    return TagCollection.create({
        userId,
        collectionName
    })
};

/** 新增一個標籤到預設集合中 */
export const addToDefaultTagCollection = async (userId, tag) => {
    let collection = await TagCollection.findOne({ userId, name: 'default' });
    if (!collection) {
        collection = new TagCollection({ userId, name: 'default', tags: [tag] });
    } else {
        if (!collection.tags.includes(tag)) { // 確保不會重複收藏
            collection.tags.push(tag);
        }
    }
    return await collection.save();
}

/** 讀取用戶所有的標籤集合 */
export const getTagCollectionsByUserId = async (userId) => {
    return TagCollection.find({
        userId
    })
}