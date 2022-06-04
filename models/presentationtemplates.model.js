import mongoose from "mongoose";
const { Schema } = mongoose;

const PresentationTemplateSchema = new Schema({
    templateName: {
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
    file: {
        type: Object,
        required: true,
        trim: true
    },
}, { timestamps: true });

const PresentationTemplate = mongoose.model("PresentationTemplate", PresentationTemplateSchema);
export default PresentationTemplate;