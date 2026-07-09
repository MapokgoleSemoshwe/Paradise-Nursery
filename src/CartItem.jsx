import { Link } from "react-router-dom";

function CartItem({
  cart,
  increaseQuantity,
  decreaseQuantity,
  deleteItem
}) {

  const totalCost = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleDecrease = (item) => {
    if (item.quantity === 1) {
      deleteItem(item.id);
    } else {
      decreaseQuantity(item.id);
    }
  };

  const handleCheckout = () => {
    alert("Thank you for shopping with Paradise Nursery! Your order has been placed successfully.");
  };

  return (
    <div className="cart-container">

      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <h2>Your shopping cart is empty.</h2>
      ) : (
        <>
          {cart.map((item) => (

            <div className="cart-card" key={item.id}>

              <img
                src={item.image}
                alt={item.name}
              />

              <div className="cart-info">

                <h2>{item.name}</h2>

                <p>
                  Unit Price:
                  <strong> R {item.price}</strong>
                </p>

                <p>
                  Quantity:
                  <strong> {item.quantity}</strong>
                </p>

                <p>
                  Total:
                  <strong> R {item.price * item.quantity}</strong>
                </p>

                <div className="cart-buttons">

                  <button
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>

                  <button
                    onClick={() => handleDecrease(item)}
                  >
                    -
                  </button>

                  <button
                    onClick={() => deleteItem(item.id)}
                  >
                    Delete
                  </button>

                </div>

              </div>

            </div>

          ))}

          <h2>Total Cost : R {totalCost}</h2>

          <div className="checkout-buttons">

            <Link to="/products">
              <button>
                Continue Shopping
              </button>
            </Link>

            <button
              onClick={handleCheckout}
            >
              Checkout
            </button>

          </div>

        </>
      )}

    </div>
  );
}

export default CartItem;