import mongoose from "mongoose";
const { Schema } = mongoose;

const TemplateSchema = new Schema({
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
    File: {
        type: Object,
        required: true,
        trim: true
    },
}, { timestamps: true });

const Template = mongoose.model("Template", TemplateSchema);
export default Template;