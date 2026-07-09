import Navbar from "./Navbar";
import plants from "../data/plants";

import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const addedIds = cartItems.map((item) => item.id);

  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <>
      <Navbar />

      <div style={{ padding: "20px" }}>
        <h1>Our Plants</h1>

        {categories.map((category) => (
          <div key={category} style={{ marginBottom: "50px" }}>
            <h2>{category}</h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
                gap: "20px",
              }}
            >
              {plants
                .filter((plant) => plant.category === category)
                .map((plant) => (
                  <div
                    key={plant.id}
                    style={{
                      border: "1px solid #ccc",
                      borderRadius: "10px",
                      padding: "15px",
                      textAlign: "center",
                    }}
                  >
                    <img
                      src={plant.image}
                      alt={plant.name}
                      style={{
                        width: "180px",
                        height: "180px",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    />

                    <h3>{plant.name}</h3>

                    <p>
                      <strong>R {plant.price}</strong>
                    </p>

                    <button
                      disabled={addedIds.includes(plant.id)}
                      onClick={() => dispatch(addItem(plant))}
                    >
                      {addedIds.includes(plant.id)
                        ? "Added"
                        : "Add to Cart"}
                    </button>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductList;
