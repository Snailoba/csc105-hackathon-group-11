import React, { useEffect, useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const footer = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  marginTop: "30px",
  marginBottom: "30px",
};
const createCon = {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "50%",
};
const createButton = {
  backgroundColor: "#4E148C",
  fontFamily: "Inika",
  fontSize: "20px",
  height: "40%",
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
};
const aboutCon = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "50%",
  textAlign: "left",
};
const left = {
  width: "100%",
  display: "flex",
  justifyContent: "left",
  textAlign: "left",
};
const aboutHeader = {
  fontFamily: "Inika",
  fontSize: "30px",
  color: "#97DFFC",

  "@media screen and (max-width: 1100px)": {
    fontSize: "15px",
  },
};
const aboutDesc = {
  fontFamily: "Inika",
  fontSize: "20px",
  color: "#97DFFC",

  "@media screen and (max-width: 1100px)": {
    fontSize: "10px",
  },
};

function Footer() {
  const navigate = useNavigate();

  function handleClickSubmit() {
    navigate("/submit");
  }
  return (
    <Box sx={footer}>
      <Box sx={createCon}>
        <Button sx={createButton} onClick={handleClickSubmit}>
          Create your recipe
        </Button>
      </Box>
      <Box sx={aboutCon}>
        <Box sx={left}>
          <Typography sx={aboutHeader}>Who is Blu?</Typography>
        </Box>
        <Typography sx={aboutDesc}>
          Blu personifies the tastes and preferences of individuals who are
          drawn to the delightful world of 'blue-vibe' cuisine. With a focus on
          seafood, cold dishes, and relaxing food, Blu's recipe collection
          caters to those seeking culinary experiences that evoke a sense of
          relaxation and culinary bliss.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
