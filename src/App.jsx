import { Routes, Route, Link } from "react-router-dom";

import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function LandingPage() {
  return (
    <div className="landing-page">

      <div className="overlay">

        <h1>Paradise Nursery</h1>

        <h2>Bring Nature Into Your Home</h2>

        <p>
          Paradise Nursery offers beautiful indoor plants,
          flowering plants and succulents for every home.
        </p>

        <Link to="/plants">
          <button className="start-btn">
            Get Started
          </button>
        </Link>

        <Link to="/about">
          <button className="start-btn">
            About Us
          </button>
        </Link>

      </div>

    </div>
  );
}

function App() {

  return (

    <Routes>

      <Route
        path="/"
        element={<LandingPage />}
      />

      <Route
        path="/about"
        element={<AboutUs />}
      />

      <Route
        path="/plants"
        element={<ProductList />}
      />

      <Route
        path="/cart"
        element={<CartItem />}
      />

    </Routes>

  );

}

export default App;
