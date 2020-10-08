const dotenv = require("dotenv");
const Product = require("../model/ProductSchema");
const User = require("../model/UserSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

dotenv.config({
  path: "./config/config.env",
});

exports.createProduct = async (req, res, next) => {
  const {
    title,
    description,
    productPicture,
    condition,
    category,
    user,
    isServices,
    isGoods,
    isFromOrganization,
    userId,
  } = req.body;
  const product = new Product({
    title,
    description,
    productPicture,
    condition,
    category,
    user,
    isServices,
    isGoods,
    isFromOrganization,
  });

  product.save((err, product) => {
    if (product) {
      User.findOneAndUpdate(
        {
          _id: userId,
        },
        {
          $push: {
            userProduct: product._id,
          },
        },
        (err, user) => {
          console.log(user, "resultat user after push product");
        }
      );
    }
  });
};

exports.getProduct = async (req, res) => {
  await Product.find()
    .populate("user")
    .then((product) => {
      res.status(200).json({
        status: "success",
        product,
      });
    });
};
