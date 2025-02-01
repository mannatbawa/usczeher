import React from "react";
const videoBg = "/zehervid.mp4";
const Main = () => {
  return (
    <div className="main">
      <div>
        <video src={videoBg} autoPlay loop muted />

        <div className="content">
          <h1>
            {" "}
            <span className="header-title"> USC Zeher </span>{" "}
          </h1>
          <p className="header-description">
            {" "}
            Bollywood Fusion Competitive Dance Team
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
