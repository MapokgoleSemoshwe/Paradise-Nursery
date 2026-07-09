import Navbar from "./Navbar";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import {
  updateQuantity,
  removeItem,
} from "../redux/CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.items);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />

      <div style={{ padding: "20px" }}>
        <h1>Shopping Cart</h1>

        {cart.length === 0 ? (
          <>
            <h2>Your cart is empty.</h2>

            <Link to="/plants">
              <button>Continue Shopping</button>
            </Link>
          </>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  marginBottom: "20px",
                  padding: "15px",
                }}
              >
                <div style={{ display: "flex", gap: "20px" }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    width="120"
                    height="120"
                    style={{
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />

                  <div>
                    <h3>{item.name}</h3>

                    <p>Price: R {item.price}</p>

                    <p>Quantity: {item.quantity}</p>

                    <p>
                      Total:
                      <strong>
                        {" "}
                        R {item.price * item.quantity}
                      </strong>
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <button
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          amount: 1,
                        })
                      )
                    }
                  >
                    +
                  </button>

                  <button
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          amount: -1,
                        })
                      )
                    }
                  >
                    -
                  </button>

                  <button
                    onClick={() =>
                      dispatch(removeItem(item.id))
                    }
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}

            <h2>Total Cart Amount: R {total}</h2>

            <div
              style={{
                display: "flex",
                gap: "20px",
                marginTop: "20px",
              }}
            >
              <Link to="/plants">
                <button>
                  Continue Shopping
                </button>
              </Link>

              <button
                onClick={() =>
                  alert("Checkout Coming Soon!")
                }
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default CartItem;
