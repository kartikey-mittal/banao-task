import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Test from "./Test";
import Dempo from "./Dempo";
import Hero from "./Hero";
// import GridCard from "./GridCard";
import Testimonials from "../components/Testimonials";
import Home from "./Home";
const Layout = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<  Home />} />
          <Route path="/dempo" element={<Dempo />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/grid" element={<Testimonials />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Layout;
