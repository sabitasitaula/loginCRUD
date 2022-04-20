import UserModel from "../model/User.js";
import Bcrypt from "bcrypt";

export const userAll = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.json(users);
    }
    catch (error) {
        res.json({ message: error });
    }
};

export const userDetails = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        res.json(user);
    }
    catch (error) {
        res.json({ message: error });
    }
};

export const userCreate = async (req, res) => {

    let { userName, email, address, password } = req.body;
    password = Bcrypt.hashSync(password, 10);
    
    const userModel = new UserModel({
        userName: userName,
        email: email,
        address: address,
        password: password
    });
    try {
        const savedUser = await userModel.save();
        res.send({savedUser, message:"user created successfully", statusCode:200});
    }
    catch (error) {
        res.json( error);
    }
   
};

export const userUpdate = async (req, res) => {
  try {
    let { userName, email, address, password } = req.body;
    password = Bcrypt.hashSync(password, 10);
    const user = {
      userName: userName,
      email: email,
      address: address,
      password: password,
    };
    const updateUser = await UserModel.findByIdAndUpdate(
      { _id: req.params.id },
      user
    );
    res.json({
      user,
      message: "Data Updated Successfully",
      statusCode: 200,
    });
  } catch (error) {
    res.json({ message: error });
  }
};


export const userDelete = async (req, res) => {
    try {
        const _id = req.params.id;
        const removeUser = await UserModel.findByIdAndDelete(_id);
        res.json({message:"User Deleted successfully"});
    }
    catch (error) {
        res.json({ message: error });
    }
};

export const userLogin = async (req, res) => {
    try {
      const email = req.body.email;
      let password = req.body.password;
      const userEmail = await UserModel.findOne({ email: email });
      if (Bcrypt.compareSync(password, userEmail.password)) {
        res.status(201).json({ message: "User login successfully" });
      } else {
        res.json({ message: "Invalid login details" });
      }
      // res.json(product);
    } catch (error) {
      res.status(400).json({ message: "User not found" });
    }
  };