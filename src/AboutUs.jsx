import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="landing">
      <h1>Paradise Nursery</h1>

      <p>
        Welcome to Paradise Nursery, your trusted destination for beautiful
        indoor plants. We offer a wide variety of aromatic and medicinal plants
        that help create healthier and greener living spaces.
      </p>

      <p>
        Our mission is to make plant shopping simple and enjoyable by providing
        quality plants at affordable prices while encouraging people to bring
        nature into their homes and workplaces.
      </p>

      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
}

export default AboutUs;