import express from "express";
import bcrypt from "bcryptjs";
import { UserModel } from "../../database/user";

const Router = express.Router();

//Models

import { UserModel } from "../../database/user";

/*
Route:       /signup
Descrip:     SignUp with email and password
Params:       None
Access:       Post
*/

Router.post("/signup", async (req, res) => {
  try {
    const { email, password, fullname, phoneNumber } = req.body.credential;
    //Check whether email or phone number exists
    const checkUserByEmail = await UserModel.findOne({ email });
    const checkUserByPhone = await UserModel.findOne({ phoneNumber });

    if (checkUserByEmail || checkUserByPhone) {
      return res.json({ error: "User already Exists" });
    }
//hashing
    const bcryptSalt = await bcrypt.genSalt(8);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
});

export default Router;
