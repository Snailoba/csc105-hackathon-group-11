import React, { useEffect, useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LeftSide from "../components/LeftSide"
import RightSide from "../components/RightSide"

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
const conDeta = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "100px",
    width: "85vw",

    "@media screen and (max-width: 1100px)": {
        width: "90vw",
        flexDirection: "column",
        alignItems: "center",
    },
}

function Detail() {
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
            <Box sx={conDeta}>
                <LeftSide />
                <RightSide />
            </Box>
      </Box>{" "}
    </>
  )
}

export default Detail;