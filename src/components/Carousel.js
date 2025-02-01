import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Carousel.css";
import ScrollAnimation from "react-animate-on-scroll";

const Carousel = ({ videos }) => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % videos.length); // go to next video
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + videos.length) % videos.length); // go to previous
  };

  return (
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
      <div className="carousel">
        <h2>Past Productions</h2>

        <div className="carousel_wrapper">
          {videos.map((video, index) => {
            // render only the active video
            if (index === current) {
              return (
                <div key={video.id} className="video-item video-item-active">
                  <iframe
                    width="100%"
                    height="100%"
                    src={video.url}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="card_overlay"></div>
                </div>
              );
            } else {
              return null; // inactive videos wont render
            }
          })}
          <div class="dots">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>

          {/* Navigation Arrows */}
          <div className="carousel_arrow_left" onClick={handlePrev}>
            <i className="fas fa-arrow-left"></i>
          </div>
          <div className="carousel_arrow_right" onClick={handleNext}>
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default Carousel;
