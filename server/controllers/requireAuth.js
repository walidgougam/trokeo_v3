const jwt = require("jsonwebtoken");
const User = require("../model/UserSchema");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  console.log(authorization, "authorization");
  //authorization = Bearer njef;lmzefezbjfkez

  if (!authorization) {
    res.status(401).send({ error: "you must be logged in" });
  }

  const token = authorization.replace("Bearer ", "");

  jwt.verify(token, "MY_SECRET_KEY", async (err, payload) => {
    try {
      if (err) {
        res.status(401).send({ error: "you must be logged in" });
      }
      const { userId } = payload;

      const user = await User.findById(userId);

      req.user = user;
      next();
    } catch (err) {
      console.log(err, "error on jwt verify token");
    }
  });
};
