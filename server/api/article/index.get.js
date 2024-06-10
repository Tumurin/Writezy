import { getAllArticle } from "~/server/db/articles"

/** 獲取所有文章 */
export default defineEventHandler(async (event) => {
    console.log("[api/article] 獲取所有文章")
    try {
        const articles = await getAllArticle()
        return {
            code: 200,
            articles: articles
        }
    } catch (e) {
        console.log(e)
        return {
            code: 400,
            message: "未知的錯誤"
        }
    }
});