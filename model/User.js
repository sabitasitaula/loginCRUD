import mongoose from "mongoose";

const UserModel = mongoose.model(
  "Login",
  mongoose.Schema(
    {
      userName: {
        type: String,
        required: [true, "Please add a username"],
        trim: true,
      },
      email: {
        type: String,
        unique: true,
        required: [true, "Please add an email"],
          trim: true,
          match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please add a valid email",
          ],
      },
      address: {
        type: String,
        required: [true, "Please add an address"],
        trim: true,
      },
      password: {
        type: String,
        required: [true, "Please add a password"],
        trim: true,
      },
    },
    { timestamps: true }
  )
);

export default UserModel;
