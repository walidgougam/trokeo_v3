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

exports.handleLike = (req, res) => {
  const { userId, productId } = req.body;
  console.log(userId, "userid server");
  console.log(productId, "productid server");
  Product.findOne(
    {
      _id: productId,
    },
    (err, product) => {
      if (product) {
        var isLiked = false;

        for (var a = 0; a < product.likes.length; a++) {
          var liker = product.likes[a];
          if (liker === userId) {
            isLiked = true;
          }
        }

        if (isLiked) {
          Product.updateOne(
            {
              _id: productId,
            },
            {
              $pull: {
                likes: userId,
              },
            },
            (err, result) => {
              res.status(200).json({
                result,
              });
              console.log(result, "result of pull product likes");
            }
          );
        } else {
          Product.updateOne(
            {
              _id: productId,
            },
            {
              $push: {
                likes: userId,
              },
            },
            (err, result) => {
              res.status(200).json({
                result,
              });
              console.log(result, "result of push product likes");
            }
          );
        }
      }
    }
  );
};
