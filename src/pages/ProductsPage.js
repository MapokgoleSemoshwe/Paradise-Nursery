import plants from "../data/plants";
import PlantCard from "../components/PlantCard";

function ProductsPage({ addToCart }) {

  const aromatic = plants.filter(
    plant => plant.category === "Aromatic Plants"
  );

  const medicinal = plants.filter(
    plant => plant.category === "Medicinal Plants"
  );

  return (
    <div>

      <h2>Aromatic Plants</h2>

      <div className="products">

        {aromatic.map((plant) => (
          <PlantCard
            key={plant.id}
            plant={plant}
            addToCart={addToCart}
          />
        ))}

      </div>

      <h2>Medicinal Plants</h2>

      <div className="products">

        {medicinal.map((plant) => (
          <PlantCard
            key={plant.id}
            plant={plant}
            addToCart={addToCart}
          />
        ))}

      </div>

    </div>
  );
}

export default ProductsPage;