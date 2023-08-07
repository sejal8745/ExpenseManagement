const userModel = require("../models/userModel");

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email: email, password: password });

    if (!user) {
      return res.status(404).saend("user not found");
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

//register callbacks
const registerController = async (req, res) => {
  console.log(req.body);
  try {
    const newUser = new userModel(req.body);
    //await newUser.save();
    //console.log(newUser);
    const respond = await newUser.save();
    console.log(respond);
    res.status(201).json({
      success: true,
      newUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

module.exports = { loginController, registerController };
