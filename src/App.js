import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Product from "./Pages/Product";
import Home from "./Pages/Home";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <div className="app">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/product" element={<Product />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
