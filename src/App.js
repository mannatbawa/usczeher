import "./App.css";
import React from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import AboutUsSection from "./components/AboutUsSection";
import Carousel from "./components/Carousel";
import Team from "./components/Team";
import Footer from "./components/Footer";
import { zvids } from "./components/Data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <div id="home">
        <Main />
      </div>
      <div id="about-us">
        <AboutUsSection />
        <Carousel videos={zvids} />
      </div>
      <div id="team">
        <Team />
      </div>
      <Footer />
      <Routes>
        <Route path="/" exact />
      </Routes>
    </Router>
  );
}

export default App;
