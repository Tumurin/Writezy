import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const LikeSchema = new Schema({
    action: {
        type: String,
        enum: ['like', 'dislike'],
        required: true
    },
    articleId: {
        type: Schema.Types.ObjectId,
        ref: 'Article',
        required: true
    },
    userId: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
    ],
    commentId: {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
    }
});

export const Like = mongoose.model('Like', LikeSchema);
