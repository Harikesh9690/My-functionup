const userModel = require("../models/userModel")
const jwt = require('jsonwebtoken')


const createUser = async function (req, res) {
  try {
    let data = req.body;
    let savedData = await userModel.create(data);
    res.status(201).send({ msg: savedData });
  } catch (error) {
    res.status(500).send(error.message)
  }
};

const loginUser = async function (req, res) {
  try {
    let userName = req.body.emailId;
    let password = req.body.password;

    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
      return res.status(401).send({
        status: false,
        msg: "username or the password is not correct",
      });

    let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "thorium",
        organisation: "FunctionUp",
      },
      "functionup-plutonium-very-very-secret-key"
    );
    res.setHeader("x-auth-token", token);
    res.status(200).send({ status: true, token: token });
  } catch (error) {
    res.status(500).send(error.message)
  }
};

const getUserData = async function (req, res) {
  try {
    let userId = req.params.userId;
    if (userId) {
      let userDetails = await userModel.findById(userId);
      res.send({ status: true, data: userDetails });
    } else {
      return res.status(401).send({ status: false, msg: "No such user exists" });
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
};

const updateUser = async function (req, res) {
  try {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    if (!user) {
      return res.send("No such user exists");
    }

    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
    res.send({ status: updatedUser, data: updatedUser });
  } catch (error) {
    res.status(500).send(error.message)
  }
};

const deleteuser = async function (req, res) {
  try {
    let userId = req.params.userId
    if (req.pass.userId == userId) {
      let userDetails = await userModel.findByIdAndUpdate({ _id: userId }, { $set: { isdeleted: true } })
      res.status(200).send({ status: true, msg: "deleted successfully" })
    } else {
      res.status(403).send({ status: false, msg: "you are not authorised for this opretion" })
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
}
module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteuser = deleteuser;