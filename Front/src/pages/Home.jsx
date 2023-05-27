import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Trio from "../components/Trio";

const menuContainer = {
  background: "#858AE3",
  position: "absolute",
  top: 0,
  left: 0,
  height: "95px",
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
const loginButton = {};
const conHome = {
  display: "flex",
  flexDirection: "column",
  marginTop: "100px",
  "@media screen and (max-width: 1100px)": {
    width: "70vw",
  },
};

function Home() {
  const navigate = useNavigate();

  //   function handleClickSubmit() {
  //     navigate("/submit");
  //   }
  //   function handleClickCategory() {
  //     navigate("/category");
  //   }
  //   function handleClickDetails() {
  //     navigate("/details");
  //   }
  return (
    <>
      <Box>
        <Box sx={menuContainer}>
          <Typography sx={title}>BLU's</Typography>
        </Box>
        <Box sx={conHome}>
          <Header head={"Blu's top recipes this week"} />
          <Trio />
          <Footer />
  </Box>
      </Box>{" "}
    </>
  );
}

export default Home;
