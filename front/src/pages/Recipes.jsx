import React, { useEffect, useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CardBig from "../components/CardBig"

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
const conCate = {
    display: "flex",
    flexDirection: "column",
    marginTop: "100px",
    width: "85vw",

    "@media screen and (max-width: 1100px)": {
        width: "90vw",
    },
}
const displayArea = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    overflow: "hidden",

    "@media screen and (max-width: 1100px)": {
       gridTemplateColumns: "repeat(2, 1fr)",
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
}
const duoText = {  
    fontFamily: "inika",
    fontSize: "35px",
    color: "#97DFFC",

    "@media screen and (max-width: 1100px)": {
        fontSize: "20px",
    },
};
const duoButton = {
    backgroundColor: "#4E148C",
    fontFamily: "Inika",
    fontSize: "20px",
    height: "40%",
    width: "20%",
    color: "#97DFFC",
    marginRight: "20px",
  
    ":hover": {
        backgroundColor: "#858AE3",
        color: "black",
    },
    ":focus": {
        outline: "none",
    },
    "@media screen and (max-width: 1100px)": {
        fontSize: "10px",
        width: "40%",
    },
  };

function Recipes() {
    const navigate = useNavigate();
    function handleClickHome() {
      navigate("/")
    }
    function handleClickSubmit() {
        navigate("/submit")
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
          <Box sx={conCate}>
          <Box sx={duo}>
            <Typography sx={duoText}>
                Your recipes
            </Typography>
            <Button sx={duoButton} onClick={handleClickSubmit}>
                Create new recipe
            </Button>
          </Box>
          <Box sx={displayArea}>
              <CardBig />
              <CardBig />
              <CardBig />
              <CardBig />
              <CardBig />
              <CardBig />
              <CardBig />
              <CardBig />
              <CardBig />
              <CardBig />
              <CardBig />
              <CardBig />
          </Box>
          </Box>
        </Box>{" "}
      </>
    )
}

export default Recipes