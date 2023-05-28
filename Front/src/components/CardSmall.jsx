import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";

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
    "@media screen and (max-width: 1100px)": {
        width: "20%",
        marginRight: "5px",
    },
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
        fontSize: "10px",
    },
}
const desc = {
    wordWrap: "break-word",
    fontFamily: "Inika",
    fontSize: "15px",
    color: "black",

    "@media screen and (max-width: 1100px)": {
        fontSize: "8px",
    },
}

function CardSmall() {
  return (
    <Box sx={conCard}>
        <img src="assets/sample.jpg" style={imag} />
        <Box sx={detail}>
            <Box sx={titl}>Recipe name</Box>
            <Box sx={desc}>By Username</Box>
        </Box>
    </Box>
  )
}

export default CardSmall