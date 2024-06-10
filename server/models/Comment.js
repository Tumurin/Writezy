import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    article: {
        type: Schema.Types.ObjectId,
        ref: 'Article',
    },
    likes: {
        type: Number,
        default: 0,
    },
    likedBy: [ // 紀錄哪些用戶點擊過該留言的讚
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        }
    ],
    publishedDate: {
        type: Date,
        default: Date.now,
    },
});

// 創建 Comment 模型
export const Comment = mongoose.model('Comment', CommentSchema);
