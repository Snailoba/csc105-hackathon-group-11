const { check } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mysql = require("mysql2");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const secret = process.env.SECRET;

const connection = mysql.createConnection({
  host: "server2.bsthun.com",
  port: "6105",
  user: "lab_14smdo",
  password: "fGQknR3J6Mln2E1Y",
  database: "lab_blank01_143kapi",
});

module.exports = [
  check("username").notEmpty().withMessage("username cannot be empty"),
  check("password").notEmpty().withMessage("password cannot be empty"),
  async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    console.log(`Username ${username}`);
    console.log(`Password ${password}`);
    connection.query(
      `SELECT * FROM users WHERE username = ?`,
      [username],
      async (err, rows) => {
        try {
          console.log(rows);
          if (err) {
            res.json({
              success: false,
              data: null,
              error: err.message,
            });
          } else {
            numRows = rows.length;
            if (numRows == 0) {
              return res.json({
                success: false,
                message: "This account doesn't exist",
              });
            }
            const isMatch = await bcrypt.compare(password, rows[0].password);
            if (!isMatch) {
              return res.json({
                success: false,
                message: "The password is incorrect",
              });
            } else {
              const token = jwt.sign(
                { userId: rows[0].id, username: rows[0].username },
                secret,
                {
                  expiresIn: "1d",
                }
              );
              res.cookie("user", token);
              res.json({
                success: true,
                message: "login success",
                user: rows[0],
                token: token,
              });
            }
          }
        } catch (e) {
          console.log(e);
          res.status(500).send("ERROR");
        }
      }
    );
  },
];
console.log("Login module has been imported successfully");
