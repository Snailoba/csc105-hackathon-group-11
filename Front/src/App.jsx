import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import Submit from "./pages/Submit";
// import Category from "./pages/Category";
// import Detail from "./pages/Detail";
import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> 
        {/* <Route path="/submit" element={<Submit />} />
        <Route path="/category" element={<Category />} />
        <Route path="/detail" element={<Detail />} /> */}
      </Routes>
    </>
  );
};

export default App;
