const dotenv = require("dotenv");
const User = require("../model/UserSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

dotenv.config({
  path: "./config/config.env",
});

const { JWT_SECRET_KEY } = process.env;

exports.register = async (req, res) => {
  const {
    email,
    password,
    firstName,
    lastName,
    userPicture,
    female,
  } = req.body;
  try {
    if (!email || !password || !firstName || !lastName || !female) {
      console.log("you have to fill all input");
    }
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegex.test(email))
      throw "Email is not supported from your domain.";
    if (password.length < 6)
      throw "Password must be atleast 6 characters long.";

    User.findOne({ email: email }, (error, user) => {
      if (user == null) {
        bcrypt.hash(password, 10, (error, hash) => {
          User.create(
            {
              email,
              password: hash,
              firstName,
              lastName,
              userPicture,
              female,
            },
            (err, userData) => {
              res.status(200).json({
                status: "success",
                message: "inscription reussis",
                userData,
              });
            }
          );
        });
      } else {
        console.log("user");
        res.status(400).json({
          error: "email or username already exist",
        });
      }
    });
  } catch (err) {
    console.log(err, "error on register on user controller");
  }
};

exports.registerGoogle = async (req, res) => {
  const { email, firstName, lastName, userPicture } = req.body;
  try {
    User.findOne({ email: email }, (error, user) => {
      if (user == null) {
        User.create(
          {
            email,
            firstName,
            lastName,
            userPicture,
          },
          (err, userData) => {
            res.status(200).json({
              status: "success",
              message: "inscription reussis",
              userData,
            });
          }
        );
      } else {
        User.findOne({ email: email }, (erro, userData) => {
          res.status(200).json({
            status: "success",
            message: "connexion reussis",
            userData,
          });
        });
      }
    });
  } catch (err) {
    console.log(err, "error on register google on user controller");
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(404).json({
      message: "you have to fill all field",
    });
  }
  User.findOne({ email: email })
    //.select("-password") // on supprime le password des resultat pour que personne le voit.
    .then((savedUser) => {
      if (savedUser) {
        const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET_KEY);
        let { name, email, _id } = savedUser;
        res.status(200).json({ name, email, token, _id });
        bcrypt.compare(password, savedUser.password).then((goodPassword) => {
          if (goodPassword) {
            res.status(200).json({
              message: "you are the good user you can connect",
            });
          } else {
            res.status(404).json({
              message: " wrong name or password",
            });
          }
        });
      } else {
        res.status(404).json({
          message: "login erreur",
        });
      }
    })
    .catch((err) => {
      res.status(404).json({
        message: "erreur",
      });
    });
};

exports.loginGoogle = async (req, res) => {
  const { googleId } = req.body;
};

exports.getUser = async (req, res, next) => {
  try {
    User.findOne({ _id: req.params.id })
      .populate("userProduct")
      .select("-password") //tous les champs sauf le password
      .then((user) => {
        res.status(200).json({ user });
      })
      .catch((err) => res.status(404).json({ err }));
  } catch (err) {
    console.log("on rentre pas dans le get user");
  }
};

exports.editUser = async (req, res) => {
  const {
    userId,
    firstName,
    lastName,
    about,
    email,
    phoneNumber,
    female,
    userPicture,
  } = req.body;

  console.log(
    userId,
    firstName,
    lastName,
    about,
    email,
    phoneNumber,
    female,
    userPicture,
    "res user controller"
  );
  await User.findOneAndUpdate(
    {
      _id: userId,
    },
    {
      firstName,
      lastName,
      about,
      email,
      phoneNumber,
      female,
      userPicture,
    },
    (error, data) => {
      res.status(200).json({
        status: "success",
        message: "edit succesfully",
        data,
      });
    }
  );
};
