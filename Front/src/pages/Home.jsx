import React, { useEffect, useState } from "react";
import { Typography, Stack, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
// import Cookies from "js-cookies";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Trio from "../components/Trio";

const menuContainer = {
  background: "#613DC1",
  position: "absolute",
  top: 0,
  left: 0,
  height: "85px",
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
const menuButton = {
  position: "absolute",
  margin: "8px",
  top: 0,
  right: 0,
  transform: "translate(-50%, 30%)",
  fontFamily: "Inika",
  fontSize: "30px",
  color: "#97DFFC",

  "@media screen and (max-width: 1100px)": {
    fontSize: "20px",
    transform: "translate(-10%, 70%)",
  },
};
const conHome = {
  display: "flex",
  flexDirection: "column",
  marginTop: "90px",
  width: "95vw",
  "@media screen and (max-width: 1100px)": {
    width: "90vw",
  },
};

function Home() {
  const navigate = useNavigate();

  function handleClickRegister() {
    navigate("/register");
  }
  function handleClickLogin() {
    navigate("/login");
  }
  return (
    <>
      <Box>
        <Box sx={menuContainer}>
          <Typography sx={title}>BLU's</Typography>
          <Typography sx={menuButton} onClick={handleClickLogin}>
            Log in
          </Typography>
        </Box>
        <Box sx={conHome}>
          <Header head={"Blu's weekly top recipes"} />
          <Trio />
          <Trio />
          <Trio />
          <Footer />
        </Box>
      </Box>{" "}
    </>
  );
}

export default Home;
