import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: String,
    email: String,
    phoneno: Number,
  },
  {
    timestamps: true,
  }
);

const User = new mongoose.model("CurdOperation", UserSchema);
export default User;
