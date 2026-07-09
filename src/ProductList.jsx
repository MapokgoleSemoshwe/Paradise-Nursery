import { useState } from "react";
import PlantCard from "./components/PlantCard";
import plants from "./data/plants";

function ProductList({ addToCart }) {

  const [addedItems, setAddedItems] = useState([]);

  const handleAdd = (plant) => {
    addToCart(plant);
    setAddedItems([...addedItems, plant.id]);
  };

  const categories = [...new Set(plants.map(item => item.category))];

  return (
    <div>

      {categories.map(category => (

        <div key={category}>

          <h2>{category}</h2>

          <div className="products">

            {plants
              .filter(item => item.category === category)
              .map(plant => (

                <PlantCard
                  key={plant.id}
                  plant={plant}
                  addToCart={handleAdd}
                  disabled={addedItems.includes(plant.id)}
                />

              ))}

          </div>

        </div>

      ))}

    </div>
  );
}

export default ProductList;