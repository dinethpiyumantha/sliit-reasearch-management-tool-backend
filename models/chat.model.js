import mongoose from "mongoose";
const { Schema } = mongoose;

const ChatSchema = new Schema({
    senderId: {
        type: String,
        required: true,
        trim: true
    },
    sender: {
        type: String,
        required: true,
        trim: true
    },
    message: {
        type: String,
        required: true,
        trim: true
    }
},{ timestamps: true });

const Chat = mongoose.model("Chat", ChatSchema);
export default Chat;