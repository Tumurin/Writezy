import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// UserCollection 表達用戶建構了那些收藏類別
const UserCollectionSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export const UserCollection = mongoose.model('UserCollection', UserCollectionSchema);
