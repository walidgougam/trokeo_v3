const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const bcrypt = require("bcrypt");

const ChatSchema = new mongoose.Schema(
  {
    sender: { type: String },
    reciever: { type: ObjectId, ref: "User" },
    titleProduct: { type: String },
    pictureProduct: { type: String },
    messages: [
      {
        _id: { type: String }, //message_id
        text: { type: String }, //message_content
        createdAt: { type: String }, //message_creation_time
        user: {
          _id: { type: String }, //sender_id
          name: { type: String }, //sender_name
          avatar: { type: String }, //sender_photo
        },
        // image: String, //message_image_content
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Chat", ChatSchema);
