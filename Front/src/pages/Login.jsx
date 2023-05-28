import React, { useContext, useState } from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import "./Stubborn.css";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";

const container = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 3,
  transform: "translateY(30%)",
};
const logo = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
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
const registerButton = {
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

function Login() {
  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");

  //   const instance = Axios.create({
  //     withCredentials: true,
  //   });
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      login(inputs);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };

  function handleClickRegister() {
    navigate("/register");
  }
  return (
    <>
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
              // value={username}
              name="username"
              onChange={handleChange}
            />
            <Box sx={space} />
            <label htmlFor="texfil" style={inputTag}>
              Password
            </label>
            <input
              type="text"
              className="texfil"
              style={type}
              // value={password}
              name="password"
              onChange={handleChange}
            />
          </Box>
          <Box sx={space} />
          <Button variant="text" sx={submitButton} onClick={handleSumbit}>
            Log in
          </Button>
          <Button
            variant="text"
            sx={registerButton}
            onClick={handleClickRegister}
          >
            Don't have an account
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Login;
// const [username, setUsername] = useState("");
// const [password, setPassword] = useState("");

// const instance = Axios.create({
//   withCredentials: true,
// });

// const navigate = useNavigate();
// const handleSubmit = async () => {
//   try {
//     const response = await instance.post("http://localhost:2000/log", {
//       username,
//       password,
//     });
//     console.log(response.data);
//     if (response.data.success) {
//       navigate("/home");
//     } else if (response.data.errors) {
//       Swal.fire("Error!", `${response.data.errors[0].msg}`, "error");
//     }
//   } catch (error) {
//     if (error.response) {
//       console.log(error.response.data);
//       console.log(error.response.status);
//       console.log(error.response.headers);
//       setPassword("");
//       Swal.fire("Error!", `Error Code: ${error.response.status}`, "error");
//     }
//   }
// };
