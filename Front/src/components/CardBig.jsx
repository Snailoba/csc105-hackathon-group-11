import React, { useEffect, useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const conCard = {
  backgroundColor: "#97DFFC",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "10px",
  width: "90%",
  height: "30vh",
  borderRadius: "10px",
  overflow: "hidden",
  marginBottom: "20px",

  "@media screen and (max-width: 1100px)": {
    width: "80%",
    height: "15vh",
  },
};
const imag = {
  width: "55%",
  height: "100%",
  border: "3px solid #32174d",
  borderRadius: "10px",
  objectFit: "cover",
  marginRight: "10px",
};
const detail = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "45%",
};
const titl = {
  fontFamily: "Inika",
  fontSize: "25px",
  color: "black",

  "@media screen and (max-width: 1100px)": {
    fontSize: "15px",
  },
};
const desc = {
  wordWrap: "break-word",
  fontFamily: "Inika",
  fontSize: "20px",
  color: "black",

  "@media screen and (max-width: 1100px)": {
    fontSize: "10px",
  },
};
function CardBig() {
  const navigate = useNavigate();

  function handleClickDetail() {
    navigate("/detail");
  }
  return (
    <Box sx={conCard} onClick={handleClickDetail}>
      <img src="assets/sample.jpg" style={imag} />
      <Box sx={detail}>
        <Box sx={titl}>Recipe name</Box>
        <Box sx={desc}>By Username</Box>
      </Box>
    </Box>
  );
}

export default CardBig;
