import React from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import About from "./components/About";
import ProductSection from "./components/ProductSection";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Navbar/>
      
      <Routes>
      <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
      <Cart/>
    </Router>
      
      

  );
}

export default App;
