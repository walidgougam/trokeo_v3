const express = require("express");
const app = express();
const server = require("http").createServer(app);
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoute = require("./route/userRoute");
const productRoute = require("./route/productRoute");
const chatRoute = require("./route/chatRoute");
const multer = require("multer");

dotenv.config({
  path: "./config/config.env",
});

connectDB();

///////////////////////    UPLOAD PICTURE    ///////////////////////////////////

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
  // fileFilter: function (req, file, cb) {
  //   const ext = path.extname(file.originalname);
  //   if (ext !== ".jpg" && ext !== ".png" && ext !== ".mp4") {
  //     return cb(res.status(400).end("only jpg, png, mp4 is allowed", false));
  //   }
  //   cb(null, true);
  // },
});

var upload = multer({
  storage: storage,
  limits: { fieldSize: 25 * 1024 * 1024 },
}).single("image");

app.use("/static", express.static("uploads"));
app.post("/register/uploadPicture", upload, (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.json({
        success: false,
        err,
      });
    }
    return res.json({
      success: true,
      url: res.req.file.path,
    });
  });
});

app.use(cors());
app.use(bodyParser.json()); // pour les requetes json. req.body
app.use(express.json());

///////////////////////    ROUTE    ///////////////////////////////////
app.use("/user", userRoute);
app.use("/product", productRoute);
app.use("/chat", chatRoute);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log("server running on port" + PORT));
