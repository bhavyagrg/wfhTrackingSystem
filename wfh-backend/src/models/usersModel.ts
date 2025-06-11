import mongoose from "mongoose";
import UserType from "../constants/userConstants";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  first_name: {
    type: String,
    required: true,
    trim: true,
  },
  last_name: {
    type: String,
    required: true,
    trim: true,
  },
  dob: Date,
  org_joining_date: Date,
  user_type: {
    type: String,
    enum: Object.values(UserType),
    required: true,
  },
  organisations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organisation",
    },
  ],
  is_active: {
    type: Boolean,
    default: true,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
