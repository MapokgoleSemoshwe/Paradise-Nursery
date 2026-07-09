import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { addItem, removeItem, updateQuantity } from "./CartSlice";
import LandingPage from "./AboutUs";
import ProductsPage from "./ProductList";
import CartPage from "./CartItem";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  // Add Item
  // Add Item
const addToCart = (plant) => {
  setCart(addItem(cart, plant));
};

// Increase Quantity
const increaseQuantity = (id) => {
  setCart(updateQuantity(cart, id, 1));
};

// Decrease Quantity
const decreaseQuantity = (id) => {
  setCart(updateQuantity(cart, id, -1));
};

// Delete Item
const deleteItem = (id) => {
  setCart(removeItem(cart, id));
};
  return (
    <BrowserRouter>

     <Navbar
  cartCount={
    cart.reduce(
      (total, item) => total + item.quantity,
      0
    )
  }
/>

      <Routes>

        <Route path="/" element={<LandingPage />} />

        <Route
          path="/products"
          element={<ProductsPage addToCart={addToCart} />}
        />

        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              deleteItem={deleteItem}
            />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;