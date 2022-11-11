import React from "react";

function HeroSection() {
  return (
    <div className="hero-section-container">
      <div className="hero-section-text">
        <h2>Find Your Next Read</h2>
        <p>
          Are you sick of searching for the perfect book? Or do you just need to
          <br></br>
          find a new one, stat? Well, look no further! We have the perfect thing
          <br></br>
          for you.
        </p>

        <a href="#book-list" className="view-btn">
          View all
        </a>
      </div>
      <div className="hero-section-image">
        <img src="./images/415-dbpXVmL.jpg" alt="" />
      </div>
    </div>
  );
}

export default HeroSection;
