import bcrypt from "bcryptjs";
import express from "express";
import db from "../db.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/login", (req, res) => {
  try {
    const { username, email, password } = req.body;
    db.query("SELECT * FROM users WHERE username=?",
    [username], (err,result) =>{
        if (err) throw err;
        if(result.length==0)
        return res.json("User not found!");
        
         //CHECK PASSWORD
         const isPAsswordCorrect = bcrypt.compareSync(req.body.password, result[0].password); // true
            
         if(!isPAsswordCorrect) return res.status(400).json("Wrong Username or Password");

         const token = jwt.sign({id:result[0].user}, "jwtkey");
         const {password, ...other} = result[0]
         console.log();
         res
             .cookie("access_token", token)
             .status(200)
             .json(other);
    })


  } catch (e) {
    res.send(e);
  }
});

router.post("/register", async (req, res) => {
    
  try {
        
    
    const { username, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const value = [
        username,
        email,
        hashedPassword
    ]
    //store into DB
    db.query("INSERT INTO users(`username`,`email`,`password`) VALUES (?)",[value], (err, result) => {
        if(err){
            return res.json(err)
        }
        return res.json("User has been created!");
      console.log(result);
    });
  } catch (e) {
    res.send(e);
  }

  
});

router.get("/logout", (req, res) => {
  try {
    res.clearCookie("access_token",{
        sameSite:"none",
        secure:true
    })
    res.json("Logged Out");
  } catch (e) {
    res.send(e);
  }
});

export default router;
