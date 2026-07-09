export const addItem = (cart, plant) => {
  const existing = cart.find(item => item.id === plant.id);

  if (existing) {
    return cart.map(item =>
      item.id === plant.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cart, { ...plant, quantity: 1 }];
};

export const removeItem = (cart, id) => {
  return cart.filter(item => item.id !== id);
};

export const updateQuantity = (cart, id, amount) => {
  return cart
    .map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + amount }
        : item
    )
    .filter(item => item.quantity > 0);
};