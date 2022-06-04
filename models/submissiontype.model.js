import mongoose from "mongoose";
const { Schema } = mongoose;

const UsersSchema = new Schema({
  submissionType: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  fileType: {
    type: String,
    required: true,
  },
  deadline: {
    type: String,
    required: true,
  },
});

const SubmissionType = mongoose.model("SubmissionType", UsersSchema);
export default SubmissionType;