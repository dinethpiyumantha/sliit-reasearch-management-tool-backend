import mongoose from "mongoose";
const { Schema } = mongoose;

const SubmissionSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    type: {
        type: String,
        required: true,
        trim: true
    },
    deadline: {
        type: String,
        required: true,
        trim: true
    },
    submissions: {
        type: Array
    }
}, { timestamps: true });

const Submission = mongoose.model("Submission", SubmissionSchema);
export default Submission;