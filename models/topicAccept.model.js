import mongoose from "mongoose";
const { Schema } = mongoose;

const TopicAcceptSchema = new Schema({
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
    status: {
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

const TopicAccept = mongoose.model("TopicAccept", TopicAcceptSchema);
export default TopicAccept;