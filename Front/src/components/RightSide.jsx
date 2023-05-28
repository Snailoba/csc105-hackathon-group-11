import React, { useContext, useEffect, useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
const conRight = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "45%",

  "@media screen and (max-width: 1100px)": {
    width: "90%",
  },
};
const duo = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  marginBottom: "20px",
  "@media screen and (max-width: 1100px)": {
    marginBottom: "10px",
  },
};
const recipeDeta = {
  fontFamily: "Inika",
  fontSize: "30px",
  color: "#97DFFC",

  "@media screen and (max-width: 1100px)": {
    fontSize: "15px",
  },
};
const desc = {
  fontFamily: "Inika",
  fontSize: "20px",
  color: "#97DFFC",
  textAlign: "left",
  marginBottom: "20px",

  "@media screen and (max-width: 1100px)": {
    fontSize: "10px",
  },
};
const recipeCate = {
  backgroundColor: "#97DFFC",
  padding: "10px",
  borderRadius: "10px",
};
const tag = {
  fontFamily: "Inika",
  fontSize: "20px",
  color: "black",

  "@media screen and (max-width: 1100px)": {
    fontSize: "10px",
  },
};

function RightSide() {
  const [post, setPost] = useState([]);

  const location = useLocation();
  const Navigate = useNavigate();

  const postId = location.pathname.split("/")[2];
  console.log(postId);
  const { currentUser } = useContext(AuthContext);
  console.log(location);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/posts/${postId}`
        );
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);
  console.log(post.username);
  console.log(post.genre);
  return (
    <Box sx={conRight}>
      <Box sx={duo}>
        <Typography sx={recipeDeta}>Recipe Details</Typography>
        <Box sx={recipeCate}>
          <Typography sx={tag}>{post.genre}</Typography>
        </Box>
      </Box>
      <Typography sx={desc}>{post.desc}</Typography>
    </Box>
  );
}

export default RightSide;
