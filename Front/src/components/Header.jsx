import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";

const header = {
    display: "flex",
alignItems: "center",}
;
const headerText = {  
    fontFamily: "inika",
  fontSize: "35px",
  pl: "1%",
  color: "#97DFFC",
  "@media screen and (max-width: 1100px)": {
    fontSize: "20px",
  },};

function Header({head}) {
  return (
  <Box sx={header}>
    <Typography sx={headerText}>{head}</Typography>
  </Box>
  )
}

export default Header;
