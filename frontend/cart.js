import React, { useState } from "react";
import "./cart.css"; // Import the CSS file for styling
import { Link } from "react-router-dom";
const cartItems = [
  {
    id: 1,
    name: "Product 1",
    price: "$19.99",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "Product 2",
    price: "$29.99",
    image: "https://via.placeholder.com/100",
  },
];

const CartPage = () => {
  const [cart, setCart] = useState(cartItems);

  const handleIncrement = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(0, item.quantity - 1) }
          : item
      )
    );
  };

  const handleRemove = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <h2>You have {getTotalItems()} item(s) in your cart</h2>
      <div className="cart-items">
        {/* Map through cart items array */}
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <h3 className="item-title">{item.name}</h3>
              <p className="item-price">{item.price}</p>
              <div className="item-quantity">
                <button onClick={() => handleDecrement(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrement(item.id)}>+</button>
              </div>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleClearCart}>Clear Cart</button>
      <br></br>
      <br></br>

      <Link to="/chek">
        <button style={{ alignSelf: "center", justifySelf: "center" }}>
          process to cheakout
        </button>
      </Link>
    </div>
  );
};

export default CartPage;
