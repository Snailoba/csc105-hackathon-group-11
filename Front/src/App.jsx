import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Submit from "./pages/Submit";
import Category from "./pages/Category";
import Detail from "./pages/Detail";
import Recipes from "./pages/Recipes";
import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/category" element={<Category />} />
        <Route path="/post/:id" element={<Detail />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
    </>
  );
};

export default App;
