import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Stubborn.css";
import Swal from "sweetalert2";

const container = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
    transform: "translateY(15%)"
  };
  const logo = {
  };
  const logoText = {
    top: "50%",
    left: "50%",
    fontFamily: "Oregano",
    fontStyle: "italic",
    color: "#97DFFC",
    fontSize: "85px",
  };
  const submitButton = {
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
  const loginButton = {
    backgroundColor: "#4E148C",
    fontFamily: "Inika",
    fontSize: "9px",
    height: "5%",
    width: "40%",
    color: "#97DFFC",
    ":hover": {
      backgroundColor: "#32174d",
      color: "white",
    },
    ":focus": {
      outline: "none",
    },
  };
  const type = {
    backgroundColor: "#858AE3",
    fontFamily: "Inika",
    color: "black",
    borderRadius: 6,
    border: "none",
    outline: "none",
    padding: "10px 10px",
    fontSize: "20px",
  };
  const inputTag = {
    fontFamily: "Inika",
    color: "#97DFFC",
    textAlign: "left",
    fontSize: "25px",
  };
  const inputContainer = {
    display: "flex",
    flexDirection: "column",
    width: "55vh",
  };
  const space = {
    backgroundColor: "#2c0735",
    height: "2vh",
  };

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const instance = axios.create({
    withCredentials: true,
  });

  const validatePassword = () => {
    return password === confirmPassword;
  };

  const navigate = useNavigate();
  function handleClickLogin() {
    navigate("/login");
  }
  return (
    <Box>
      <Box sx={container}>
        <Box>
            <Box sx={logo}>
                <Box sx={logoText}>BLU's recipe</Box>
            </Box>
        </Box>
        <Box sx={inputContainer}>
          <label htmlFor="texfil" style={inputTag}>
            Username
          </label>
          <input
            type="text"
            className="texfil"
            style={type}
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <Box sx={space} />
          <label htmlFor="texfil" style={inputTag}>
            Password
          </label>
          <input
            type="text"
            className="texfil"
            style={type}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Box sx={space} />
          <label htmlFor="texfil" style={inputTag}>
            Confirm Password
          </label>
          <input
            type="text"
            className="texfil"
            style={type}
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </Box>
        <Box sx={space} />
        <Button variant="text" sx={submitButton} onClick={handleClickLogin}>
          Register
        </Button>
        <Button variant="text" sx={loginButton} onClick={handleClickLogin}>
          Already made an account?
        </Button>
      </Box>
    </Box>
  );
}

export default Register;