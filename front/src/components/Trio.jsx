import React, { useContext, useEffect, useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CardSmall from "./CardSmall"
import { AuthContext } from '../Context/AuthContext';
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
    marginRight: "10px"
}
const imag = {
    width: "45%",
    height: "100%",
    border: "3px solid #32174d",
    borderRadius: "10px",
    objectFit: "cover",
    marginRight: "10px"
}
const detail = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "45%",
    
}
const titl = {
    fontFamily: "Inika",
    fontSize: "20px",
    color: "black",

    "@media screen and (max-width: 1100px)": {
        fontSize: "15px",
    },
}
const desc = {
    wordWrap: "break-word",
    fontFamily: "Inika",
    fontSize: "15px",
    color: "black",

    "@media screen and (max-width: 1100px)": {
        fontSize: "15px",
    },
}

const trio = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
};
const trioCategory = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
};
const left = {
    width: "100%",
    display: "flex",
    justifyContent: "left",
    textAlign: "left"
}
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
};
const conSimor = {
    width: "10%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    transform: "translateX(45%)",
}
const simorButton = {
    backgroundColor: "#858AE3",
    fontFamily: "Inika",
    fontSize: "20px",
    height: "40%",
    width: "100%",
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
        fontSize: "12px",
    },
};

const Trio = ({genre}) => {
    const navigate = useNavigate();
    const { currentUser } = useContext(AuthContext);
    // function handleClickCategory() {
    //     navigate("/category");
    // }
    const [posts,setPosts] =useState([])
    
    console.log(location);
    useEffect(() =>{
      const fetchData = async () =>{
        try{
          const res = await axios.get(`http://localhost:8000/api/posts/`)
        //   const res = await axios.get(`http://localhost:8080/api/posts/?cat=${cat}`)
          console.log(res.data);
          const filteredPosts = res.data.filter(post => post.genre === "Seafood");
          setPosts(filteredPosts);
        } catch (err){
            console.log(err);
        }
        
    }
    fetchData();
    console.log(posts.username);
    }, [genre]);
  return (
    <Box sx={trio}>
        <Box sx={trioCategory}>
            <Box sx={left}>
                <Typography sx={categoryName}>Seafood</Typography>
            </Box>
            <Box sx={conCategory}>
            {/* start smallCard */}
            
   { posts.map(post=> (
            <Box sx={conCard} className='post' key={post.id}>
                <img src={`../upload/${post.img}`} alt="" style={imag} />
                <Box sx={detail}>
                    <Box sx={titl}>{post.title}</Box>
                    <Box sx={desc}>By {post.username}</Box>
                </Box>
            </Box>

   ))
    }
    {/* end smallCard */}
                
                <Box sx={conSimor}>
                    <Button sx={simorButton}>See more</Button>
                </Box>
            </Box>
        </Box>
    </Box>
  );
}

export default Trio;
