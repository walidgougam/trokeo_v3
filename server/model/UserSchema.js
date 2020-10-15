const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true },
    password: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    female: { type: Boolean },
    phoneNumber: { type: String },
    userPicture: { type: String },
    about: { type: String, trim: true },
    localisation: { type: String },
    stars: { type: String },
    userProduct: [{ type: ObjectId, ref: "Product" }],
    productLikes: [],
    productBooked: [],
    categoryGoodsFollow: [],
    categoryServicesFollow: [],
  },
  {
    timestamps: true,
  }
);

// UserSchema.pre("save", function (next) {
//   const user = this;
//   if (!user.isModified("password")) {
//     return next();
//   }

//   bcrypt.genSalt(10, (err, salt) => {
//     if (err) {
//       return next(err);
//     }

//     bcrypt.hash(user.password, salt, (err, hash) => {
//       if (err) {
//         return next(err);
//       }

//       user.password = hash;

//       next();
//     });
//   });
// });

// UserSchema.methods.comparePassword = function (candidatePassword) {
//   const user = this;
//   return new Promise((resolve, reject) => {
//     bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
//       if (err) {
//         return reject(err);
//       }
//       if (!isMatch) {
//         return reject(false);
//       }
//       resolve(true);
//     });
//   });
// };

module.exports = mongoose.model("User", UserSchema);
