const { check } = require("express-validator");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const secret = process.env.SECRET;

module.exports = [
  async (req, res) => {
    console.log(req.cookies);
    const token = req.cookies.user;

    var decoded = jwt.verify(token, secret);
    console.log(decoded);

    if (decoded) {
      res.json({
        success: true,
        message: "User is logged in with ID: " + decoded.userId,
        decoded: decoded.userId,
      });
    } else {
      res.json({
        success: false,
        message: "User is not logged in",
      });
    }
  },
];
