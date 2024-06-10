import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Collection 表達用戶收藏了那些文章在他的收藏中
const CollectionSchema = new Schema({
    userCollectionId: {
        type: Schema.Types.ObjectId,
        ref: 'UserCollection',
        required: true
    },
    articleId: {
        type: Schema.Types.ObjectId,
        ref: 'Article',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export const Collection = mongoose.model('Collection', CollectionSchema);
