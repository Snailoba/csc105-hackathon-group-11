import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const footer = {
  display: "flex",
  margin: "auto",
  alignItems: "left",
  justifyContent: "left",
  width: "60vw",
};
const footertext = {
  fontFamily: "inika",
    fontSize: "20px",
    color: "#97DFFC",

    "@media screen and (max-width: 1100px)": {
        fontSize: "20px",
  },
};
const createButton = {};
const about = {};
const aboutHeader = {};
const aboutDesc = {};

function Footer() {
  return (
    <Box sx = {footer}>
      <Typography sx={footertext}>
        <p><h3>Who is blu?</h3></p>
        <p>Blu personifies the tastes and preferences of individuals 
          who are drawn to the delightful world of 'blue-vibe' cuisine.
          With a focus on seafood, cold dishes, and relaxing food, 
          Blu's recipe collection caters to those seeking culinary experiences 
          that evoke a sense of relaxation and culinary bliss.</p>
      </Typography>
    </Box>
  );
}

export default Footer;
// Who is blu?
// Blu personifies the tastes and preferences of individuals who are drawn to the delightful world of 'blue-vibe' cuisine. With a focus on seafood, cold dishes, and relaxing food, Blu's recipe collection caters to those seeking culinary experiences that evoke a sense of relaxation and culinary bliss.