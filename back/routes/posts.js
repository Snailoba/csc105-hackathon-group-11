import express from "express";
import db from "../db.js";
import jwt from "jsonwebtoken";

const router = express.Router();

// getPosts (all posts)
router.get("/", (req, res) => {
  try {
    const q =req.query.genre
    ? "SELECT * FROM posts p JOIN users u ON u.user=p.uid WHERE p.id=?" 
    : "SELECT * FROM posts";

    db.query(q, [req.query.genre], (err,result) =>{
        return res.status(200).json(result);
    })

  } catch (e) {
    res.send(e);
  }
});

//getPost one post
router.get("/:id", (req, res) => {
    try {
      
        db.query("SELECT  p.id ,`username`,`title`,`desc`,p.img, u.img AS userImg , `genre` FROM users u JOIN posts p ON u.user=p.uid WHERE  p.id=?",
        [req.params.id], (err,result) =>{
            if(err) return res.json(err)

            return res.json(result[0]);
        });
      
  
  
    } catch (e) {
      res.send(e);
    }
});

//addpost not finish
router.post("/", (req, res) => {
    try {
      const token = req.cookies.access_token;
      res.send("HI");
        // console.log(token);
        if(!token) return res.json("Not Authenticated!");
        jwt.verify(token, "jwtkey", (err,userInfo) =>{
            
            if(err) return res.json(err);
            const values = [
                req.body.title,
                req.body.desc,
                req.body.img,
                req.body.genre,
                userInfo.id
            ];
            db.query("INSERT INTO posts(`title`,`desc`,`img`,`genre`,`uid`) VALUES (?)",[values], (err,result) =>{
              if (err) return res.status(500).json(err);
              return res.json(result);
              
            })
        })
      
      
  
  
    } catch (e) {
      res.send(e);
    }
});

//delete
router.delete("/:id", (req, res) => {
    try {
        const token = req.cookies.access_token;
    console.log(token);
  if (!token) return res.status(401).json("Not authenticated!");
  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const postId = req.params.id;
    const q = "DELETE FROM posts WHERE `id` = ? AND `uid` = ?";

    db.query(q, [postId, userInfo.id], (err, data) => {
      if (err) return res.status(403).json("You can delete only your post!");

      return res.json("Post has been deleted!");
    });
  }
  );
      
      
  
  
    } catch (e) {
      res.send(e);
    }
});

//update
router.put("/:id", (req, res) => {
    try {
        const token = req.cookies.access_token;
        console.log(token);
      if (!token) return res.status(401).json("Not authenticated!");
      jwt.verify(token, "jwtkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");
        const postId = req.params.id;
        const q = "UPDATE posts SET`title`=?,`desc`=?,`img`=?,`genre`=? WHERE `id`=? AND `uid`=?"
    
        const VALUES = [
            req.body.title,
            req.body.desc,
            req.body.img,
            req.body.genre,
        ]
    
    db.query(q, [...VALUES,postId, userInfo.id], (err,result) =>{
        if (err) return res.status(500).json(err);
        return res.status(201).json("Post has been updated!");
    })
    
      });
      
  
  
    } catch (e) {
      res.send(e);
    }
});

export default router;
