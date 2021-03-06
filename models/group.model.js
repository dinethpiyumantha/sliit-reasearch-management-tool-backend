import mongoose from "mongoose";
const { Schema } = mongoose;

const GroupSchema = new Schema({
  members: {
    type: Array,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  supervisor: {
    type: Object,
    required: false
  },
  coSupervisor: {
    type: Object,
    required: false
  }
});

const Group = mongoose.model("Group", GroupSchema);
export default Group;