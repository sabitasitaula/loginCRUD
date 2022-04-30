import mongoose from "mongoose";

const ContactModel = mongoose.model(
  "Contact",
  mongoose.Schema(
    {
      fullName: {
        type: String,
        required: [true, "Please add a full name"],
        trim: true,
      },
      email: {
        type: String,
        required: [true, "Please add an email"],
        trim: true,
        match: [
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          "Please add a valid email",
        ],
      },
      message: {
        type: String,
        required: [true, "Please add a message"],
        trim: true,
      },
    },
    { timestamps: true }
  )
);

export default ContactModel;
