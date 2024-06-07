import mongoose from "mongoose";
const Schema = mongoose.Schema;


// 定義 Article Schema
const articleSchema = new Schema({
    title: { // 想標題很麻煩，非必填，讓 AI 處理
        type: String,
    },
    content: {
        type: String,
        required: true, // 內容為必填項
    },
    author: { // 作者ID
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    club: { // 是否發布到社團頁
        type: Schema.Types.ObjectId,
        ref: 'Club',
    },
    publishedDate: {
        type: Date,
        default: Date.now, // 默認為當前日期
    },
    images: [{ // 文章夾帶的圖片網址
        type: String,
    }],
    videos: [{ // 文章夾帶的影片網址
        type: String,
    }],
    tags: [{ // 標籤
        type: String,
    }],
    likes: { // 按讚
        type: Number,
        default: 0,
    },
    comments: [{
        type: Schema.Types.ObjectId, // 評論ID
        ref: 'Comment', // 參照 Comment 模型
    }],
});

// 創建 Article 模型
export const Article = mongoose.model('article', articleSchema);
