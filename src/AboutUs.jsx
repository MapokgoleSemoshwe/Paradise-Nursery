import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="about-us-container">

      <div className="background-image">

        <div className="about-content">

          <h1>Paradise Nursery</h1>

          <p>
            Paradise Nursery is passionate about bringing nature into every
            home. We specialize in providing healthy, high-quality indoor
            plants that brighten living spaces and improve well-being.
          </p>

          <p>
            Whether you are looking for aromatic plants, medicinal plants,
            decorative plants, or beginner-friendly indoor plants, Paradise
            Nursery offers an extensive collection at affordable prices with
            excellent customer service.
          </p>

          <p>
            Our mission is to inspire people to create greener homes by making
            plant shopping simple, enjoyable, and accessible for everyone.
          </p>

          <Link to="/products">
            <button>
              Get Started
            </button>
          </Link>

        </div>

      </div>

    </div>
  );
}

export default AboutUs;