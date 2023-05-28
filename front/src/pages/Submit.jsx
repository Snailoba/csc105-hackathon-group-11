import React, { useEffect, useState } from "react";
import { Typography, Box, Button, colors } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import Axios from "axios";
import Header from "../components/Header";
import "./Stubborn.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";

const menuContainer = {
  background: "#613DC1",
  position: "absolute",
  top: 0,
  left: 0,
  height: "85px",
  width: "100%",
  display: "flex",
  alignItems: "center",
};
const titleSub = {
  fontFamily: "oregano",
  fontStyle: "italic",
  fontSize: "55px",
  pl: "1%",
  color: "#97DFFC",
  "@media screen and (max-width: 1100px)": {
    fontSize: "40px",
  },
};
const menuButton = {
  position: "absolute",
  margin: "8px",
  top: 0,
  right: 0,
  transform: "translate(-30%, 30%)",
  fontFamily: "Inika",
  fontSize: "30px",
  color: "#97DFFC",

  "@media screen and (max-width: 1100px)": {
    fontSize: "20px",
    transform: "translate(-10%, 70%)",
  },
};
const conSubm = {
  display: "flex",
  flexDirection: "column",
  marginTop: "100px",
  width: "65vw",

  "@media screen and (max-width: 1100px)": {
    width: "85vw",
  },
};
const fields = {
  display: "flex",
  flexDirection: "column",
};
const type = {
  backgroundColor: "#858AE3",
  fontFamily: "Inika",
  color: "black",
  borderRadius: 6,
  border: "none",
  outline: "none",
  padding: "10px 10px",
  fontSize: "20px",
  marginBottom: "10px",
};
const inputTag = {
  fontFamily: "Inika",
  color: "#97DFFC",
  textAlign: "left",
  fontSize: "25px",
  marginTop: "10px",
  marginBottom: "10px",
};
const createButton = {
  backgroundColor: "#4E148C",
  fontFamily: "Inika",
  fontSize: "20px",
  height: "40%",
  width: "30%",
  color: "#97DFFC",
  marginTop: "20px",
  marginBottom: "20px",

  ":hover": {
    backgroundColor: "#858AE3",
    color: "black",
  },
  ":focus": {
    outline: "none",
  },
  "@media screen and (max-width: 1100px)": {
    fontSize: "12px",
  },
};
const square = {
  backgroundColor: "#858AE3",
  width: "100%",
  height: "20vh",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
};
const trioCate = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "left",
};
const cate = {
  backgroundColor: "#97DFFC",
  borderRadius: "10px",
  padding: "5px",
  marginLeft: "5px",
  marginRight: "15px",
};
const cateText = {
  fontFamily: "Inika",
  color: "black",
  textAlign: "left",
  fontSize: "25px",
  "@media screen and (max-width: 1100px)": {
    fontSize: "10px",
  },
};


function Submit() {
  const state = useLocation().state;
  const [recipeName, setRecipeName] = useState("");
  const [value, setValue] = useState(state?.desc || "");
  const [title, setTitle] = useState(state?.title || "");
  const [file, setFile] = useState(null);
  const [genre, setGenre] = useState(state?.genre || "");

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post(
        "http://localhost:8000/api/upload",
        formData
      );

      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();
    try {
      state
        ? await axios.put(
            `http://localhost:8000/api/posts/${state.id}`,
            {
              title,
              desc: value,
              genre,
              img: file ? imgUrl : "",
            },
            { withCredentials: true }
          )
        : await axios.post(
            `http://localhost:8000/api/posts/`,
            {
              title,
              desc: value,
              genre,
              img: file ? imgUrl : "",
            },
            { withCredentials: true }
          );
    } catch (err) {
      console.log(err);
    }
    console.log(title);
    navigate("/");
  };
  const [selectedValue, setSelectedValue] = React.useState("a");

  const navigate = useNavigate();
  function handleClickRecipes() {
    navigate("/recipes");
  }

  return (
    <>
      <Box>
        <Box sx={menuContainer}>
          <Typography sx={titleSub}>BLU's</Typography>
          <Typography sx={menuButton}>RecipeName</Typography>
        </Box>
        <Box sx={conSubm}>
          <Header head={"Create your recipe"} />
          <Box sx={fields}>
            <label htmlFor="texfil" style={inputTag}>
              Recipe name
            </label>
            <input
              type="text"
              className="texfil"
              style={type}
              // value={recipeName}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Typography sx={inputTag}>Select category</Typography>
            <Box sx={trioCate}>
              <input
                type="radio"
                checked={genre === "Seafood"}
                name="genre"
                value="Seafood"
                id="Seafood"
                onChange={(e) => setGenre(e.target.value)}
              />
              <label htmlFor="Seafood" style={cate}>
                <Typography sx={cateText}>Seafood</Typography>
              </label>
              <input
                type="radio"
                checked={genre === "ColdFood"}
                name="genre"
                value="ColdFood"
                id="ColdFood"
                onChange={(e) => setGenre(e.target.value)}
              />
              <label htmlFor="Seafood" style={cate}>
                <Typography sx={cateText}>Cold food</Typography>
              </label>
              <input
                type="radio"
                checked={genre === "RelaxingFood"}
                name="genre"
                value="RelaxingFood"
                id="RelaxingFood"
                onChange={(e) => setGenre(e.target.value)}
              />
              <label htmlFor="Seafood" style={cate}>
                <Typography sx={cateText}>Relaxing food</Typography>
              </label>
            </Box>
            <Typography sx={inputTag}>Recipe detail</Typography>
            <ReactQuill
              className="editor"
              theme="snow"
              value={value}
              onChange={setValue}
            />
            <label className="file" htmlFor="file" style={inputTag}>
              Upload Image
            </label>
            <input
              style={square}
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </Box>
        </Box>
        <Button sx={createButton} onClick={handleClick}>
          Create your recipe
        </Button>
      </Box>{" "}
    </>
  );
}

export default Submit;