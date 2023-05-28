import React, { useEffect, useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import Header from "../components/Header"
import Dropdead from "../components/Dropdead";
import "./Stubborn.css";

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
const title = {
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
}
const fields = {
    display: "flex",
    flexDirection: "column",
}
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

function Submit() {
    const [recipeName, setRecipeName] = useState("");
  
    const instance = Axios.create({
      withCredentials: true,
    });

    const navigate = useNavigate();
    function handleClickHome() {
      navigate("/")
    }
    return (
        <>
            <Box>
            <Box sx={menuContainer}>
              <Typography sx={title} onClick={handleClickHome}>BLU's</Typography>
              <Typography sx={menuButton}>
                Username
              </Typography>
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
                    value={recipeName}
                    onChange={(e) => {
                        setRecipeName(e.target.value);
                    }}
                    />
                    <Typography sx={inputTag}>
                        Select category
                    </Typography>
                    <Dropdead />
                    <Typography sx={inputTag}>
                      Recipe detail
                    </Typography>
                    <input
                    type="text"
                    className="texfil"
                    style={type}
                    value={recipeName}
                    onChange={(e) => {
                        setRecipeName(e.target.value);
                    }}
                    />
                    <Typography sx={inputTag}>
                      Upload image
                    </Typography>
                    <input
                    type="text"
                    className="texfil"
                    style={type}
                    value={recipeName}
                    onChange={(e) => {
                        setRecipeName(e.target.value);
                    }}
                    />
                </Box>
            </Box>
          </Box>{" "}
        </>
      )
}

export default Submit;