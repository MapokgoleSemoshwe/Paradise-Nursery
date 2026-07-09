import { Link } from "react-router-dom";

function CartPage({
  cart,
  increaseQuantity,
  decreaseQuantity,
  deleteItem
}) {

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>

      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <h2>Your cart is empty.</h2>
      ) : (
        <>
          {cart.map(item => (

            <div
              key={item.id}
              style={{
                border: "1px solid gray",
                marginBottom: "20px",
                padding: "15px"
              }}
            >

              <img
                src={item.image}
                alt={item.name}
                width="120"
              />

              <h2>{item.name}</h2>

              <p>Unit Price: R{item.price}</p>

              <p>Quantity: {item.quantity}</p>

              <p>
                Total:
                R{item.price * item.quantity}
              </p>

              <button
                onClick={() =>
                  decreaseQuantity(item.id)
                }
              >
                -
              </button>

              <button
                onClick={() =>
                  increaseQuantity(item.id)
                }
              >
                +
              </button>

              <button
                onClick={() =>
                  deleteItem(item.id)
                }
              >
                Delete
              </button>

            </div>

          ))}

          <h2>Total Cost: R{total}</h2>

          <Link to="/products">
            <button>
              Continue Shopping
            </button>
          </Link>

          <button
            onClick={() => alert("Thank you for your purchase!")}
          >
            Checkout
          </button>

        </>
      )}

    </div>
  );
}

export default CartPage;