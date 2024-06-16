import { getTagCollectionsByUserId } from "~/server/db/tags"

/** 用戶讀取全部標籤集合 */
export default defineEventHandler(async (event) => {
    console.log("[api/tagCollection/] 讀取標籤集合")
    const userId = event.context.auth?.user.id;
    console.log("[api/tagCollection/] 用戶id", userId)
    try {
        const result = await getTagCollectionsByUserId(userId)
        console.log(result);
        const defaultCollection = result.find((tagCollection) => {
            return tagCollection.name == "default"
        })
        const tagCollections = result.find((tagCollection) => {
            return tagCollection.name !== "default"
        })
        return {
            code: 200,
            defaultCollection: defaultCollection,
            tagCollections
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