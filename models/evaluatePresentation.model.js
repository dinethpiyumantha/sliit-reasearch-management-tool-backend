import mongoose from "mongoose";
const { Schema } = mongoose;

const EvaluatePresentationSchema = new Schema({
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
    totalEvaluatedMark: {
        type: Number,
        required: true,
        trim: true
    }
});

const EvaluatePresentaion = mongoose.model("EvaluatePresentaion", EvaluatePresentationSchema);
export default EvaluatePresentaion;
