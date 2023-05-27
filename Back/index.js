const express = require("express");
const app = express();
const port = 3000;
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const { check, validationResult, cookie } = require("express-validator");
var jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const connection = mysql.createConnection({
  host: "db.cshack.site",
  port: "3306",
  user: "group11",
  password: "204238240",
  database: "MariaDB",
});

connection.connect(() => {
  console.log("Database is connected");
});
app.listen(port, () => console.log(" app listening on port 3000!"));
app.get("/", (req, res) => {
  res.send("hello world!");
});
