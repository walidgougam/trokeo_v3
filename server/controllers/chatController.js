const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/UserSchema");
const Chat = require("../model/ChatSchema");

exports.getChat = async (req, res) => {
  const chat = await Chat.findOne({
    $or: [
      {
        $and: [{ reciever }, { sender }],
      },
      {
        $and: [{ sender }, { reciever }],
      },
    ],
  }).populate("product");

  if (chat === false) {
    res.status(200).json({
      chat,
    });
  } else {
    console.log("error on get CHat");
  }
};

exports.postChat = (req, res) => {
  const { reciever, sender, product, messages } = req.body;

  const query = Chat.findOne({
    $or: [
      { sender, reciever },
      { sender: reciever, reciever: sender },
    ],
  });
  query
    .exec()
    .then((data) => {
      if (data === null) {
        const chat = new Chat({
          sender,
          reciever,
          product,
          messages,
        });

        chat
          .save()
          .then((data) => {
            console.log("succes on post chat for first time - server");
            res.json(data);
          })
          .catch((error) => {
            res.json(error);
            console.log("error on post chat for first time - server");
          });
      } else {
        const updateChat = Chat.updateOne(
          {
            $or: [
              { sender, reciever },
              { sender: reciever, reciever: sender },
            ],
          },
          { $push: { messages } }
        );
        updateChat
          .exec()
          .then((data) => {
            console.log("success on update chat - server");
            res.json(data);
          })
          .catch((error) => {
            console.log("error on update chat - server");
            res.json(error);
          });
      }
    })
    .catch((error) => {
      res.json(error);
      console.log("error on post chat - server");
    });
};

exports.getSpecificChat = (req, res) => {
  const { reciever, sender } = req.params;
  const chat = Chat.findOne({
    $or: [
      { sender, reciever },
      { sender: reciever, reciever: sender },
    ],
  }).populate("product");

  chat.exec().then((data) => {
    if (data === null) {
      res.json([]);
    } else {
      res.json(data.messages);
    }
  });
};

exports.getAllRecieverChat = async (req, res) => {
  const { id } = req.params;
  const chat = await Chat.find({
    $or: [{ sender: id }, { reciever: id }],
  }).populate("reciever product");
  if (chat) {
    res.status(200).json({
      chat,
    });
  }
};

exports.deleteChat = async (req, res) => {
  const { sender, reciever } = req.params;
  Chat.findOneAndDelete({ sender, reciever }).exec((err, result) => {
    if (err) {
      res.status(400).json({
        status: "success",
      });
    } else {
      res.status(200).json({
        status: "success",
        result,
      });
    }
  });
};
