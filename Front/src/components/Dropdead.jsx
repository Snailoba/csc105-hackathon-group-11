import React, { useState } from "react";
import { Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const categoryList = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  height: "5vh",
  marginBottom: "10px",

};
const dropdownButton = {
  backgroundColor: "#858AE3",
  fontFamily: "Inika",
  fontSize: "20px",
  width: "100%",
  height: "100%",
  borderRadius: "6px",
  display: "flex",
  textAlign: "left",
  alignItems: "center",
  paddingLeft: "5px",
  zIndex: 2,

  ":hover": {
    backgroundColor: "#4E148C",
    color: "#97DFFC",
  },
  "@media screen and (max-width: 1100px)": {
    fontSize: "15px",
  },
};
const dropdown = {
  position: "absolute",
  backgroundColor: "#858AE3",
  width: "65vw",
  height: "15vh",
  borderTopLeftRadius: "0",
  borderTopRightRadius: "0",
  borderBottomLeftRadius: "10px",
  borderBottomRightRadius: "10px",
  display: "none",

  "&.open": {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "column",
    transform: "translateY(50%)",
    zIndex: 1,
  },

  "@media screen and (max-width: 1100px)": {
    width: "85vw",
    height: "15vh",
  },
};
const dropdownContent = {
  bottom: 0,
  width: "100%",
  borderRadius: "10px",
  ":hover": {
    backgroundColor: "#4E148C",
    color: "#97DFFC",
  },
  "@media screen and (max-width: 1100px)": {
    marginTop: "5px",
  },
};
const dropdownText = {
  textAlign: "left",
  fontFamily: "Inika",
  fontSize: "20px",
  paddingLeft: "5px",

  "@media screen and (max-width: 1100px)": {
    fontSize: "15px",
  },
};

function Dropdead() {
  const [dropOpen, setDropOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Select category");

  const toggleDropdown = () => {
    setDropOpen(!dropOpen);
  };
  return (
    <Box
      sx={categoryList}
      onClick={(e) => {
        setSelectedCategory(e.target.innerText);
      }}
    >
      <Box sx={dropdownButton} onClick={toggleDropdown}>
        {selectedCategory}
      </Box>
      <Box sx={dropdown} className={dropOpen ? "dropdown open" : "dropdown"}>
        <Box sx={dropdownContent} onClick={toggleDropdown}>
          <Typography sx={dropdownText}>Seafood</Typography>
        </Box>
        <Box sx={dropdownContent} onClick={toggleDropdown}>
          <Typography sx={dropdownText}>Cold food</Typography>
        </Box>
        <Box sx={dropdownContent} onClick={toggleDropdown}>
          <Typography sx={dropdownText}>Relaxing food</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Dropdead;