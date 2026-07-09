import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import LandingPage from "./pages/LandingPage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  // Add Item
  const addToCart = (plant) => {
    const existing = cart.find(item => item.id === plant.id);

    if (existing) {
      setCart(
        cart.map(item =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...plant,
          quantity: 1
        }
      ]);
    }
  };

  // Increase Quantity
  const increaseQuantity = (id) => {
    setCart(
      cart.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease Quantity
  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  // Delete Item
  const deleteItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
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