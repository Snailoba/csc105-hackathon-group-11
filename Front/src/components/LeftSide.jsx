import React, { useContext, useEffect, useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
const conLeft = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "45%",
    height: "80vh",

    "@media screen and (max-width: 1100px)": {
        width: "90%",
        height: "40vh",
    },
}
const top = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: "20px",
    "@media screen and (max-width: 1100px)": {
        marginBottom: "10px",
    },
}
const bottom = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "15%",
    marginBottom: "20px",
    "@media screen and (max-width: 1100px)": {
        marginBottom: "0px",
    },
}
const recipeDeta = {
    fontFamily: "Inika",
    fontSize: "30px",
    color: "#97DFFC",
  
    "@media screen and (max-width: 1100px)": {
        fontSize: "15px",
    },
}
const recipeOwner = {
    backgroundColor: "#97DFFC",
    padding: "10px",
    borderRadius: "10px",
}
const tag = {
    fontFamily: "Inika",
    fontSize: "20px",
    color: "black",
  
    "@media screen and (max-width: 1100px)": {
        fontSize: "10px",
    },
}
const bottomButton = {
    backgroundColor: "#4E148C",
    fontFamily: "Inika",
    fontSize: "20px",
    height: "50%",
    width: "40%",
    color: "#97DFFC",
    right: 0,

    ":hover": {
        backgroundColor: "#858AE3",
        color: "black",
    },
    ":focus": {
        outline: "none",
    },
    "@media screen and (max-width: 1100px)": {
        fontSize: "12px",
        height: "60%",
    },
}
const imag = {
    width: "100%",
    height: "60%",
    border: "3px solid #32174d",
    borderRadius: "10px",
    objectFit: "cover",
}

function LeftSide() {
    const [post,setPost] =useState([])

  const location = useLocation();
  const Navigate = useNavigate();
  

  const postId = location.pathname.split("/")[2];
  console.log(postId);
  const {currentUser} = useContext(AuthContext);
  console.log(location);

  const handleDelete = async () =>{
    try{
    await axios.delete(`http://localhost:8000/api/posts/${postId}`, {withCredentials:true})
        Navigate("/");
      } catch (err){
        console.log(err);
      }
  }
  
  useEffect(() =>{
    const fetchData = async () =>{
      try{
        const res = await axios.get(`http://localhost:8000/api/posts/${postId}`)
        setPost(res.data);
      } catch (err){
        console.log(err);
      }
      
    }
      fetchData();
  }, [postId]);
    console.log(post.username);

    
   
    return (
        <Box sx={conLeft}>
            <Box sx={top}>
                <Typography sx={recipeDeta}>{post.title}</Typography>
                <Box sx={recipeOwner}>
                    <Typography sx={tag}>By {post.username}</Typography>
                </Box>
            </Box>
            <img src={`../upload/${post.img}`} style={imag} />
            <Box sx={bottom}>
                <Button sx={bottomButton}>Edit recipe</Button>
                <Button sx={bottomButton} onClick={handleDelete}>Delete recipe</Button>
            </Box>
        </Box>
      )
}

export default LeftSide