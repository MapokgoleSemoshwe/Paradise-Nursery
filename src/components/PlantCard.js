function PlantCard({ plant, addToCart }) {
  return (
    <div className="card">

      <img
        src={plant.image}
        alt={plant.name}
        width="200"
      />

      <h3>{plant.name}</h3>

      <p>{plant.description}</p>

      <h4>R {plant.price}</h4>

      <button onClick={() => addToCart(plant)}>
        Add to Cart
      </button>

    </div>
  );
}

export default PlantCard;