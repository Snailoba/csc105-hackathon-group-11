import React, { useEffect, useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const conLeft = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "45%",
    height: "80vh"
}
const top = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: "20px",
}
const bottom = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "25%",
    marginBottom: "20px",
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
    return (
        <Box sx={conLeft}>
            <Box sx={top}>
                <Typography sx={recipeDeta}>Recipe 1</Typography>
                <Box sx={recipeOwner}>
                    <Typography sx={tag}>By Username</Typography>
                </Box>
            </Box>
            <img src="assets/sample.jpg" style={imag} />
            <Box sx={bottom}>
                <Button sx={bottomButton}>Edit recipe</Button>
                <Button sx={bottomButton}>Delete recipe</Button>
            </Box>
        </Box>
      )
}

export default LeftSide