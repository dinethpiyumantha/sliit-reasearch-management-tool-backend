import mongoose from "mongoose";
const { Schema } = mongoose;

const TopicEvaluateSchema = new Schema({
    groupId: {
        type: String,
        required: true,
        trim: true
    },
    topic: {
        type: String,
        required: true,
        trim: true
    },
    acceptancestatus: {
        type: String,
        required: true,
        trim: true
    },
    evaluationstatus: {
        type: String,
        required: true,
        trim: true
    },
    feedback: {
        type: String,
        required: true,
        trim: true
    }
});

const TopicEvaluate = mongoose.model("TopicEvaluate", TopicEvaluateSchema);
export default TopicEvaluate;