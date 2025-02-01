import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";

import teamimage from "../assets/teamphoto.svg";
import "./AboutUsSection.css";

const AboutUsSection = () => {
  return (
    <div className="aboutUs">
      <br></br>
      <div className="section">
        <br></br>
        <br></br>
        <div className="image-container">
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <h1 className="top-right">About Us</h1>
            <img className="designed" src={teamimage} alt="Zeher 2023-2024" />
            <h3 className="jost">
              Celebrating 15 years of talent, Zeher is the premier Bollywood
              fusion dance team at the University of Southern California. We
              compete in prestigious collegiate circuits such as the Desi Dance
              Network (DDN) and the National Desi Dance League (NDDL). Join us
              as we share our passion for dance and create mesmerizing
              productions.
            </h3>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
