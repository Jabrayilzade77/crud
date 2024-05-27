import { UserModel } from "../models/UserModel.js";
import bcrypt from "bcrypt";


export const usersGetAll = async (req, res) => {
  const users = await UserModel.find({});
  res.send(users);
};

export const usersGetById = async (req, res) => {
    const { id } = req.params;
    const user = await UserModel.findById(id);
    res.send(user);
  };

  export const usersCreateOne = async (req, res) => {
    try {
      const { email, password } = req.body;
      const hasedPassword = await bcrypt.hash(password, 10);
      const user = new UserModel({ email, password: hasedPassword });
      await user.save();
      res.send(user);
    } catch (error) {
      res.send(error);
    }
  };


  export const usersLogin = async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email: email });
  
    if (!user) {
      return res.send("user is not found");
    }
  
    const isPasswordRigth = bcrypt.compare(password, user.password);
  
    if (!isPasswordRigth) {
      return res.send("password wrong");
    }
  
    res.send("xos gelmissiniz");
  };

  export const usersUpdateById = async (req, res) => {
    const { id } = req.params;
    const obj = req.body;
    const kittens = await UserModel.findByIdAndUpdate(id, obj);
    res.send(kittens);
  };



export const usersDeleteById =  async (req, res) => {
    const { id } = req.params;
    const kittens = await UserModel.findByIdAndDelete(id);
    res.send(kittens);
  };

