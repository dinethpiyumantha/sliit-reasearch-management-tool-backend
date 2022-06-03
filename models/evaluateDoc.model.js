import mongoose from "mongoose";
const { Schema } = mongoose;

const EvaluateDocSchema = new Schema({
    evaluationType: {
        type: String,
        required: true,
        trim: true
    },
    groupId: {
        type: String,
        required: true,
        trim: true
    },
    supervisorName: {
        type: String,
        required: true,
        trim: true
    },
    totalMark: {
        type: Number,
        required: true,
        trim: true
    }
});

const EvaluateDoc = mongoose.model("EvaluateDoc", EvaluateDocSchema);
export default EvaluateDoc;