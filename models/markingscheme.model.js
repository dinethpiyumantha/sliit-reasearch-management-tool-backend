import mongoose from "mongoose";
const { Schema } = mongoose;

const MarkingSchema = new Schema({
    submission: {
        type: String,
        required: true,
        trim: true
    },
    criterias: {
        type: Array,
        required: true
    }
}, { timestamps: true });

const Marking = mongoose.model("Marking", MarkingSchema);
export default Marking;