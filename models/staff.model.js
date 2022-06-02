import mongoose from "mongoose";
const {Schema} = mongoose;

const StaffSchema = new Schema({
    staffId: {
        type: String,
        required: true,
        trim: true
    },
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
    type: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: Object,
        required: true,
        trim: true
    }

});