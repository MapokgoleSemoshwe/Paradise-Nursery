function PlantCard({ plant, addToCart, disabled }) {
  return (
    <div className="card">

      <img
        src={plant.image}
        alt={plant.name}
      />

      <h3>{plant.name}</h3>

      <p>{plant.description}</p>

      <h4>R {plant.price}</h4>

      <button
        disabled={disabled}
        onClick={() => addToCart(plant)}
      >
        {disabled ? "Added" : "Add to Cart"}
      </button>

    </div>
  );
}

export default PlantCard;