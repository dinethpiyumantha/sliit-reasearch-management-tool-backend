import mongoose from "mongoose";
const { Schema } = mongoose;

const PanelmembersSchema = new Schema({
  panelMemberId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  groups: {
    type: Array
  },
});

const Panelmember = mongoose.model("Panelmember", PanelmembersSchema);
export default Panelmember;