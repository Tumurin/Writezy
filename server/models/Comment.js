import mongoose from "mongoose";
const Schema = mongoose.Schema;


// 定義 Comment Schema
const commentSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,// Author ID
        ref: 'User', // 參照 User Schema
    },
    article: {
        type: Schema.Types.ObjectId, // Article ID
        ref: 'Article', // 參照 Article Schema
        required: true,
    },
    content: {
        type: String,
        required: true, // 內容為必填項
    },
    publishedDate: {
        type: Date,
        default: Date.now, // 默認為當前日期
    },
    images: [{ // 評論圖片網址
        type: String,
    }],
    videos: [{ // 評論影片網址
        type: String,
    }],
    tags: [{ // 標籤
        type: String,
    }],
    likes: { // 按讚
        type: Number,
        default: 0,
    }
},
    {
        versionKey: false
    }
);

// 創建 Comment 模型
export const Comment = mongoose.model('Comment', commentSchema);