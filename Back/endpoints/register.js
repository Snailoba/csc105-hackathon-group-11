const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "server2.bsthun.com",
  port: "6105",
  user: "lab_14smdo",
  password: "fGQknR3J6Mln2E1Y",
  database: "lab_blank01_143kapi",
});

module.exports = [
  check("username")
    .notEmpty()
    .withMessage("username cannot be empty")
    .isLength({ min: 1 })
    .withMessage("username must be at least 1 character")
    .matches(/^[a-zA-Z0-9]*$/)
    .withMessage("username must not contain special characters"),
  check("password")
    .notEmpty()
    .withMessage("password cannot be empty")
    .isLength({ min: 8 })
    .withMessage("password must be at least 8 characters")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)
    .withMessage(
      "password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
  async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array() });
    }

    const hash = await bcrypt.hash(password, 10);
    connection.query(
      `SELECT * FROM users WHERE username = ?`,
      [username],
      (err, rows) => {
        if (err) {
          res.json({
            success: false,
            data: null,
            error: err.message,
          });
        } else {
          if (rows.length > 0) {
            res.json({
              success: false,
              message: "Username already exists",
            });
          } else {
            connection.query(
              `INSERT INTO users (username, password) VALUES (?,?)`,
              [username, hash],
              (err, rows) => {
                if (err) {
                  res.json({
                    success: false,
                    data: null,
                    error: err.message,
                  });
                } else {
                  console.log(rows);
                  if (rows) {
                    res.json({
                      success: true,
                      data: {
                        message: "Registration success",
                      },
                    });
                  }
                }
              }
            );
          }
        }
      }
    );
  },
];
console.log("Register module has been imported successfully");
