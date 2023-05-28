import React, { useContext, useEffect, useState } from "react";
import { Typography, Stack, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { AuthContext } from '../Context/AuthContext';
// import Cookies from "js-cookies";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Trio from "../components/Trio";
import ColdFood from "../components/ColdFood";
import RelaxingFood from "../components/RelaxingFood";
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
  const { currentUser,logout } = useContext(AuthContext);

  // function handleClickRegister() {
  //   navigate("/register");
  // }
  function handleClickLogin() {
    navigate("/login");
  }
  // function handleClickSubmit() {
  //   navigate("/submit");
  // }
  // function handleClickCategory() {
  //   navigate("/category");
  // }
  // function handleClickDetails() {
  //   navigate("/details");
  // }
  return (
    <>
      <Box>
        <Box sx={menuContainer}>
          <Typography sx={title}>BLU's</Typography>
          
          {currentUser ? <Typography sx={menuButton} onClick={logout}>
          {currentUser?.username} &nbsp;
          
            Logout
          </Typography>
          :
          <Typography sx={menuButton} onClick={handleClickLogin}>
          {currentUser?.username} &nbsp;
          
            Login
          </Typography>
          }
          
        </Box>
        <Box sx={conHome}>
          <Header head={"Blu's weekly top recipes"} />
          <Trio />
          <ColdFood />
          <RelaxingFood />
          <Footer />
        </Box>
      </Box>{" "}
    </>
  );
}

export default Home;
