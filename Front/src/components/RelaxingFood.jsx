import React, { useContext, useEffect, useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import CardSmall from "./CardSmall";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";

const conCard = {
  backgroundColor: "#97DFFC",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "10px",
  width: "25%",
  height: "90%",
  borderRadius: "10px",
  overflow: "hidden",
  marginRight: "10px",
};
const conImag = {
  marginRight: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "45%",
  height: "100%",
  "@media screen and (max-width: 1100px)": {
    width: "100%",
    marginRight: "0px",
  },
};
const imag = {
  width: "100%",
  height: "100%",
  border: "2px solid #2C0735",
  borderRadius: "10px",
  objectFit: "cover",
};
const detail = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "45%",
  "@media screen and (max-width: 1100px)": {
    display: "none",
  },
};
const titl = {
  fontFamily: "Inika",
  fontSize: "15px",
  color: "black",

  "@media screen and (max-width: 1100px)": {
    fontSize: "10px",
  },
};
const desc = {
  wordWrap: "break-word",
  fontFamily: "Inika",
  fontSize: "15px",
  color: "black",

  "@media screen and (max-width: 1100px)": {
    fontSize: "10px",
  },
};
const trio = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
};
const trioCategory = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
};
const left = {
  width: "100%",
  display: "flex",
  justifyContent: "left",
  textAlign: "left",
};
const categoryName = {
  fontFamily: "Inika",
  fontSize: "30px",
  color: "#97DFFC",

  "@media screen and (max-width: 1100px)": {
    fontSize: "15px",
  },
};
const conCategory = {
  width: "100%",
  height: "15vh",
  backgroundColor: "#613DC1",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "left",
  alignItems: "center",
  padding: "10px",
  "@media screen and (max-width: 1100px)": {
    height: "15vh",
  },
};
const conSimor = {
  width: "20%",
  height: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
};
const simorButton = {
  backgroundColor: "#858AE3",
  fontFamily: "Inika",
  fontSize: "15px",
  height: "40%",
  width: "50%",
  color: "black",
  right: 0,

  ":hover": {
    backgroundColor: "#4E148C",
    color: "#97DFFC",
  },
  ":focus": {
    outline: "none",
  },
  "@media screen and (max-width: 1100px)": {
    fontSize: "10px",
    width: "50%",
  },
};

const RelaxingFood = ({ genre }) => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  // function handleClickCategory() {
  //     navigate("/category");
  // }
  const [posts, setPosts] = useState([]);

  console.log(location);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/posts/`);
        //   const res = await axios.get(`http://localhost:8080/api/posts/?cat=${cat}`)
        console.log(res.data);
        const filteredPosts = res.data.filter(
          (post) => post.genre === "RelaxingFood"
        );
        setPosts(filteredPosts);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [genre]);
  return (
    <Box sx={trio}>
      <Box sx={trioCategory}>
        <Box sx={left}>
          <Typography sx={categoryName}>Relaxing Food</Typography>
        </Box>
        <Box sx={conCategory}>
          {/* start smallCard */}

          {posts.map((post) => (
            <Box sx={conCard} className="post" key={post.id}>
              <Box sx={conImag}>
                <img src={`../upload/${post.img}`} alt="" style={imag} />
              </Box>
              <Box sx={detail}>
                <Link className="link" to={`/post/${post.id}`}>
                  <Box sx={titl}>{post.title}</Box>
                  <Box sx={desc}>By {currentUser?.username}</Box>
                </Link>
              </Box>
            </Box>
          ))}
          {/* end smallCard */}

          <Box sx={conSimor}>
            <Button sx={simorButton}>See more</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RelaxingFood;
