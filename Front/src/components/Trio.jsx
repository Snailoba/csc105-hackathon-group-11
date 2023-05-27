import React, { useEffect, useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CardSmall from "./CardSmall"

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
    flexDirection: "column",
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
    paddingLeft: "100px"
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

function Trio() {
    const navigate = useNavigate();
    // function handleClickCategory() {
    //     navigate("/category");
    // }
  return (
    <Box sx={trio}>
        <Box sx={trioCategory}>
            <Box sx={left}>
                <Typography sx={categoryName}>Seafood</Typography>
            </Box>
            <Box sx={conCategory}>
                <CardSmall />
                <CardSmall />
                <CardSmall />
                <Box sx={conSimor}>
                    <Button sx={simorButton}>See more</Button>
                </Box>
            </Box>
        </Box>
    </Box>
  );
}

export default Trio;
