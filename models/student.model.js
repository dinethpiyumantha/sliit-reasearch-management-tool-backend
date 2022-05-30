import mongoose from "mongoose";
const { Schema } = mongoose;

const StudentSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: Object,
        required: true,
        trim: true
    },
    studentId: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        required: true,
        trim: true
    }
});

const Student = mongoose.model("Student", StudentSchema);
export default Student;