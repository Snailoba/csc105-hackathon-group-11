import React, { useEffect, useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const conRight = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "45%"
}
const duo = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingBottom: "20px",
}
const recipeDeta = {
    fontFamily: "Inika",
    fontSize: "30px",
    color: "#97DFFC",
  
    "@media screen and (max-width: 1100px)": {
        fontSize: "15px",
    },
}
const desc = {
    fontFamily: "Inika",
    fontSize: "20px",
    color: "#97DFFC",
    textAlign: "left",
  
    "@media screen and (max-width: 1100px)": {
        fontSize: "10px",
    },
}
const recipeCate = {
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

function RightSide() {
  return (
    <Box sx={conRight}>
        <Box sx={duo}>
            <Typography sx={recipeDeta}>Recipe Details</Typography>
            <Box sx={recipeCate}>
                <Typography sx={tag}>Cold food</Typography>
            </Box>
        </Box>
        <Typography sx={desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
    </Box>
  )
}

export default RightSide