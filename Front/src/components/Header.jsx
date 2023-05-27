import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";

const header = {
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
    width: "100%",
};
const headerText = {  
    fontFamily: "inika",
    fontSize: "35px",
    color: "#97DFFC",

    "@media screen and (max-width: 1100px)": {
        fontSize: "20px",
    },
};

function Header({head}) {
  return (
  <Box sx={header}>
    <Typography sx={headerText}>{head}</Typography>
  </Box>
  )
}

export default Header;
