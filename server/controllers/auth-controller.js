//homepage logic
const User = require("../models/user-model");
const bcrypt = require("bcrypt");
const home = async (req, res) => {
  try {
    res.status(200).send("Hi,Welcome to MERN Homepage---router");
  } catch (err) {
    console.log("error while loading homepage--", error);
  }
};
const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, password, phonenumber, isAdmin } = req.body;
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(400).json({ message: "Email already exists" });
    }
    //one way to encrypt password
    const saltRound = 10;
    const hash_password = await bcrypt.hash(password, saltRound);
    const userCreated = await User.create({
      username,
      email,
      password: hash_password,
      phonenumber,
    });
    userCreated.save();
    res.status(201).json({ message: userCreated, 
        msg: "Registerd user successfully",
        token: await  userCreated.generateToken(),
        userId:userCreated._id.toString()
        //generate toekn defined in model
    });
  } catch (error) {
    console.log(`error while loading register--${error}`);
  }
};
module.exports = { home, register };
