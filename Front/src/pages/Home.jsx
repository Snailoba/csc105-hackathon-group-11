import React, { useEffect, useState } from "react";
import { Typography, Stack, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
// import Cookies from "js-cookies";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Trio from "../components/Trio";
import Button from '../components/Button';

const menuContainer = {
  background: "#613DC1",
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
const menuButton = {
  position: "absolute",
  margin: "8px",
  top: 0,
  right: 0,
  transform: "translate(-50%, 50%)",
  fontFamily: "Inika",
  fontSize: "30px",
  color: "#97DFFC",
};
const conHome = {
  display: "flex",
  flexDirection: "column",
  marginTop: "100px",
  width: "95vw",
  "@media screen and (max-width: 1100px)": {
    width: "70vw",
  },
};

// const logout = () => {
//   setUser();
//   Cookies.remove('UserToken');
// };
// return(
  // <Stack
  //     direction={"row"}
  //     alignItems={"center"}
  //     justifyContent={"flex-end"}
  //     spacing={2}
  //     sx={{
  //       position: 'sticky',
  //       zIndex: 10,
  //       marginBottom: '8px',
  //       padding: '16px'
  //     }}
  // >
  //   {user ? (
  //     <Box sx={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
  //       <Typography>{user.username}</Typography>
  //       <Botton text="Logout" handle={logout} />
  //     </Box>
  //   ) : (
  //     <Botton text="Login" handle={handleOpen} />
  //   )}
  // </Stack>
// );

function Home() {
  const navigate = useNavigate();
  // const logout = () => {
  //   setUser();
  //   Cookies.remove('UserToken');
  // };

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
          <Typography sx={menuButton}>
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

/* import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Menu from "../../components/Menu";

const menuContainer = {
  background: "#32174D",
  position: "absolute",
  top: 0,
  left: 0,
  height: "95px",
  width: "100%",
  display: "flex",
  alignItems: "center",
};
const title = {
  fontFamily: "Girassol",
  fontSize: "55px",
  pl: "1%",
  color: "white",
  "@media screen and (max-width: 1100px)": {
    fontSize: "40px",
  },
};
const menuButton = {
  position: "absolute",
  margin: "8px",
  top: 0,
  right: 0,
};
const buttonText = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontFamily: "Inika",
  color: "black",
  fontSize: "25px",
};
const inputTag = {
  fontFamily: "Inika",
  color: "black",
  textAlign: "left",
  fontSize: "25px",
  "@media screen and (max-width: 1100px)": {
    fontSize: "20px",
  },
};
const conHome = {
  display: "flex",
  flexDirection: "column",
  marginTop: "100px",
  "@media screen and (max-width: 1100px)": {
    width: "70vw",
  },
};
const twin = {
  display: "flex",
  flexDirection: "row",
  width: "50vw",
  "@media screen and (max-width: 1100px)": {
    width: "70vw",
  },
};
const showcase = {
  width: "50vw",
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
  flexDirection: "column",
  "@media screen and (max-width: 1100px)": {
    width: "70vw",
  },
};
const firstLayer = {
  width: "70%",
};
const secondLayer = {
  marginBottom: "10px",
  width: "120px",
  "@media screen and (max-width: 1100px)": {
    width: "85px",
  },
};
const squareDate = {
  width: "100%",
  height: "5vh",
  backgroundColor: "#eed9c4",
  borderRadius: "10px",
  paddingLeft: "5px",
};
const squareWeather = {
  width: "100%",
  height: "5vh",
  backgroundColor: "#eed9c4",
  borderRadius: "10px",
  paddingLeft: "5px",
};
const squareHome = {
  width: "100%",
  height: "66vh",
  backgroundColor: "#eed9c4",
  borderRadius: "10px",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  overflow: "hidden",

  "@media screen and (max-width: 1100px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
    height: "95vh",
  },
};
const imag = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "33vh",
  "@media screen and (max-width: 1100px)": {
    height: "32vh",
  },
};
const outfitImages = {
  width: "75%",
  height: "75%",
  border: "3px solid #32174d",
  borderRadius: "10px",
  objectFit: "cover",
};

function Home() {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => setOpenModal(!openModal);

  const [currentDay, setCurrentDay] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const year = String(currentDate.getFullYear()).slice(-2);

    const formattedDate = `${day}/${month}/${year}`;
    setCurrentDay(formattedDate);
  }, []);

  function handleClickEvents() {
    navigate("/events");
  }
  function handleClickWeather() {
    navigate("/weather");
  }
  function handleClickDetails() {
    navigate("/details");
  }
  return (
    <>
      <Box>
        <Box sx={menuContainer}>
          <Typography sx={title}>Luco</Typography>
          <Box sx={menuButton}>
            <img
              src="assets/hex.svg"
              alt="hexagon"
              onClick={handleOpen}
              style={{
                width: "80px",
                height: "80px",
              }}
            />
            <Box sx={buttonText}>Menu</Box>
            <Menu open={openModal} handleClose={handleOpen} />
          </Box>
        </Box>
        <Box sx={conHome}>
          <Box sx={twin}>
            <Box sx={firstLayer}>
              <Box sx={secondLayer}>
                <Typography sx={inputTag}>Date</Typography>
                <Box sx={squareDate} onClick={handleClickEvents}>
                  <Typography sx={inputTag}>{currentDay}</Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={firstLayer}>
              <Box sx={secondLayer}>
                <Typography sx={inputTag}>Weather</Typography>
                <Box sx={squareWeather} onClick={handleClickWeather}>
                  <Typography sx={inputTag}>35°C</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={showcase}>
            <Typography sx={inputTag}>Today's outfit</Typography>
            <Box sx={squareHome} onClick={handleClickDetails}>
              <Box sx={imag}>
                <img src="assets/sample.jpg" style={outfitImages} />
              </Box>
              <Box sx={imag}>
                <img src="assets/sample.jpg" style={outfitImages} />
              </Box>
              <Box sx={imag}>
                <img src="assets/sample.jpg" style={outfitImages} />
              </Box>
              <Box sx={imag}>
                <img src="assets/sample.jpg" style={outfitImages} />
              </Box>
              <Box sx={imag}>
                <img src="assets/sample.jpg" style={outfitImages} />
              </Box>
              <Box sx={imag}>
                <img src="assets/sample.jpg" style={outfitImages} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>{" "}
    </>
  );
}

export default Home; */
