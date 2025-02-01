import React from "react";
import "./Team.css";
import Saanjhi from "../assets/Saanjhi.jpg";
import Yash from "../assets/Yash.jpg";
import Yana from "../assets/Yana.jpg";
import Sarisha from "../assets/Sarisha.jpg";
import ScrollAnimation from "react-animate-on-scroll";

const Team = () => {
  return (
    <div className="team-section">
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <h2>Meet the Captains</h2>
        <div className="team-photos">
          <div className="team-member">
            <img src={Saanjhi} alt="Saanjhi" />
            <h1>Saanjhi Shahdadpuri</h1>
            <p>Logistics Captain</p>
          </div>
          <div className="team-member">
            <img src={Yash} alt="Yash" />
            <h1>Yash Bansal</h1>
            <p>Creative Captain</p>
          </div>
          <div className="team-member">
            <img src={Yana} alt="Yana" />
            <h1>Yana Gupta</h1>
            <p>Creative Captain</p>
          </div>
          <div className="team-member">
            <img src={Sarisha} alt="Sarisha" />
            <h1>Sarisha Sabhlok</h1>
            <p>Production Captain</p>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Team;
