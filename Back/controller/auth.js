import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  //CHECK EXISTING USER
  const query = "SELECT * FROM users WHERE email=? OR username=?";
  const { email, username } = req.body;

  db.query(query, [email, username], (err, data) => {
    res.send("hi");
    if (err) {
      console.log(err);
      return res.json({ msg: "test", ...err });
    }
    if (data.length) return res.status(409).json("user already exists!"); //HASH THE PASSWORD AND CREATE A USER
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    // Store hash in your password DB.
    const q = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)";
    const VALUES = [req.body.username, req.body.email, hash];
    db.query(q, [VALUES], (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json("user has been created.");
    });
  });
};
export const login = (req, res) => {};
export const logout = (req, res) => {};
