const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const bcrypt = require("bcrypt");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, unique: true },
    description: { type: String, trim: true },
    productPicture: { type: Array },
    likes: { type: Array },
    booked: { type: Array },
    distance: { type: String },
    review: { type: String },
    likes: { type: Array },
    booked: { type: Boolean },
    category: { type: String },
    condition: { type: String },
    isServices: { type: Boolean },
    isGoods: { type: Boolean },
    isFromOrganization: { type: Boolean },
    user: { type: ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", ProductSchema);
