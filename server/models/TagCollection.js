import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const tagCollectionSchema = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    tags: [{
        type: String,
    }],
});

export const TagCollection = mongoose.model('TagCollection', tagCollectionSchema);
