import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />}></Route>
          <Route path="/:category" element={<Products />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
        <Toaster position="top-center" reverseOrder={false} />
      </BrowserRouter>
    </div>
  );
};

export default App;
