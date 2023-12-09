import React, { useState } from "react";

const CheckoutPage = () => {
  const [orderData, setOrderData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setOrderData({ ...orderData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform checkout logic here
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f2f2f2",
    },
    formContainer: {
      backgroundColor: "#fff",
      padding: "40px",
      borderRadius: "5px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    },
    heading: {
      marginBottom: "20px",
      textAlign: "center",
    },
    inputLabel: {
      display: "block",
      marginBottom: "10px",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "20px",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    textarea: {
      width: "100%",
      padding: "10px",
      marginBottom: "20px",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    button: {
      backgroundColor: "blue",
      color: "white",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h1 style={styles.heading}>Checkout</h1>
        <form onSubmit={handleSubmit}>
          <label style={styles.inputLabel}>
            Name:
            <input
              type="text"
              name="name"
              value={orderData.name}
              onChange={handleInputChange}
              style={styles.input}
            />
          </label>
          <br />
          <label style={styles.inputLabel}>
            Email:
            <input
              type="email"
              name="email"
              value={orderData.email}
              onChange={handleInputChange}
              style={styles.input}
            />
          </label>
          <br />
          <label style={styles.inputLabel}>
            Phone:
            <input
              type="tel"
              name="phone"
              value={orderData.phone}
              onChange={handleInputChange}
              style={styles.input}
            />
          </label>
          <br />
          <label style={styles.inputLabel}>
            Address:
            <textarea
              name="address"
              value={orderData.address}
              onChange={handleInputChange}
              style={styles.textarea}
            />
          </label>
          <br />
          <button type="submit" style={styles.button}>
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
